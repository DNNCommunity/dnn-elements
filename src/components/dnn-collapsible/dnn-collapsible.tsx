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

  /** Defines the transition time in ms, defaults to 300ms */
  @Prop() transitionDuration?: number = 300;

  @State() animating: boolean = false;

  @Watch("expanded")
  handleExpandedChanged(newValue: boolean){
    this.animating = true;
    setTimeout(() => {
      const container = this.el.shadowRoot.querySelector("#container") as HTMLDivElement;
      if (newValue){
        container.style.height = container.scrollHeight + "px";
      }
      else{
        container.style.height = "0px";
      }
    }, 0);
    
    setTimeout(() => {
      this.animating = false;
      this.dnnCollapsibleHeightChanged.emit();
    }, this.transitionDuration);
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
      setTimeout(() => {
        const container = this.el.shadowRoot.querySelector("#container") as HTMLDivElement;
        let newHeight = 0;
        container.querySelector('slot').assignedElements().forEach(node => {
          newHeight += node.scrollHeight;
        });
        container.style.height = newHeight + "px";
      }, 0);
    }
  }

  /** Fires whenever the collapsible height has changed */
  @Event() dnnCollapsibleHeightChanged: EventEmitter<void>;

  @Listen('dnnCollapsibleHeightChanged')
  handleOtherCollapsibleHeightChanged(){
    this.updateComponentSize();
  }

  private mutationObserver: MutationObserver;
  /**
   * Creates an instance of dnn-collapsible
   */
  constructor() {
    this.mutationObserver = new MutationObserver(this.handleMutation);
  }

  private handleMutation(mutationList){
    mutationList.forEach(mutation => {
      mutation.target.closest('dnn-collapsible').updateSize();
    });
  }

  componentDidLoad(){
    const container = this.el.shadowRoot.querySelector('#container') as HTMLDivElement;
    container.style.transitionDuration = this.transitionDuration + 'ms';

    // Monitor for content changes and update own height
    this.mutationObserver.observe(this.el, {attributes: true, characterData: true, childList: true, subtree: true});
  }

  // This warning is disabled due to https://github.com/ionic-team/stencil-eslint/pull/6
  // Should be removed when that PR get's merged
  /*eslint-disable @stencil/own-methods-must-be-private */
  componentDidUnload(){
    
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
