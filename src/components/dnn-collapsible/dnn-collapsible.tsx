import { Component, Host, h, Prop, Element, Watch, State, Method, Event, EventEmitter, Listen } from '@stencil/core';
import { Debounce } from '../../utilities/debounce';

@Component({
  tag: "dnn-collapsible",
  styleUrl: "dnn-collapsible.scss",
  shadow: true
})
export class DnnCollapsible {

  @Element() el: HTMLDnnCollapsibleElement;

  /** Defines if the panel is expanded or not. */
  @Prop({reflect: true}) expanded: boolean = false;

  /** Defines the transition time in ms, defaults to 100ms */
  @Prop() transitionDuration?: number = 150;

  @State() animating: boolean = false;

  @Watch("expanded")
  handleExpandedChanged(newValue: boolean){
    this.animating = true;
    requestAnimationFrame(() => {
      const container = this.el.shadowRoot.querySelector("#container") as HTMLDivElement;
      if (newValue){
        container.style.height = container.scrollHeight + "px";
      }
      else{
        container.style.height = "0px";
      }
    });
    
    requestAnimationFrame(() => {
      this.animating = false;
      this.dnnCollapsibleHeightChanged.emit();
    });
  }

  /** Updates the component height, use to update after a slot content changes. */
  @Debounce()
  @Method()
  async updateSize() {
    this.updateComponentSize();
  }

  private updateComponentSize(){
    if (this.expanded){
      this.animating = true;
      requestAnimationFrame(() => {
        const container = this.el.shadowRoot.querySelector("#container") as HTMLDivElement;
        let newHeight = 0;
        container.querySelector('slot').assignedElements().forEach(node => {
          newHeight += node.scrollHeight;
        });
        container.style.height = newHeight + "px";
      });
    }
  }

  /** Fires whenever the collapsible height has changed */
  @Event() dnnCollapsibleHeightChanged: EventEmitter<void>;

  @Listen('dnnCollapsibleHeightChanged')
  handleOtherCollapsibleHeightChanged(){
    setTimeout(() => {
      this.updateComponentSize();
    }, this.transitionDuration);
  }

  private mutationObserver: MutationObserver;

  private handleMutation(mutationList){
    mutationList.forEach(mutation => {
      requestAnimationFrame(() => {
        mutation.target.closest('dnn-collapsible').updateSize();
      });
    });
  }

  componentWillLoad() {
    this.mutationObserver = new MutationObserver((mutationList) => {
      this.handleMutation(mutationList);
    });
  }

  componentDidLoad(){
    const container = this.el.shadowRoot.querySelector('#container') as HTMLDivElement;
    container.style.transitionDuration = this.transitionDuration + 'ms';

    // Monitor for content changes and update own height
    const childNodes = [this.el];
    childNodes.forEach(element => {
      this.mutationObserver.observe(element, {attributes: true, characterData: true, childList: true, subtree: true});
    });

    const slot = this.el.shadowRoot.querySelector('slot');
    slot.addEventListener("slotchange", () => {
      this.updateSize();
    });
  }

  disconnectedCallback(){
    this.mutationObserver.disconnect();
  }
  /*eslint-enable @stencil/own-methods-must-be-private */

  render() {
    return (
      <Host>
        <div id="container">
            <slot></slot>
        </div>
      </Host>
    );
  }

}
