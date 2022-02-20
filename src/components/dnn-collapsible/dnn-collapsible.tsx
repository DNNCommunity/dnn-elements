import { Component, Host, h, Prop, Element, Event, EventEmitter, Watch, Listen, Method } from '@stencil/core';

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

  /** Fires whenever the collapsible height has changed */
  @Event({bubbles: true, composed: true}) dnnCollapsibleHeightChanged: EventEmitter<void>;

  @Listen("dnnCollapsibleHeightChanged", {target: "body"})
  handleHeightChanged(){
    requestAnimationFrame(() => {
      console.log(this.el, "listened");
      this.updateSize();
    })
  }

  /**
   * Updates the component height, use to update after a slot content changes.
   */
  @Method()
  async updateSize() {
    if (this.expanded){
        requestAnimationFrame(() => {
          console.log(this.el, "is expanded and is now updating its size");
          this.container.style.maxHeight = `${this.container.scrollHeight}px`;
        });
        setTimeout(() => {
          this.container.style.maxHeight = "none";
        }, this.transitionDuration);
    }
  }
  
  @Watch("expanded")
  handledExpandedChanged(expanded: boolean){
    console.log(this.el, `expanded prop has changed to ${expanded}`);
    if (expanded){
      this.updateSize();
    }
    else{
      this.container.style.maxHeight = "0px";
    }
    setTimeout(() => {
      requestAnimationFrame(() => {
        console.log(this.el, "firing the event now");
        this.dnnCollapsibleHeightChanged.emit();
      });
    }, this.transitionDuration * 3);
  }
  
  private observer = new MutationObserver(() => {
    console.log(this.el, "observed a mutation and will uptade size.");
    this.updateSize();
  });
  
  componentDidLoad(){
    var observerOptions: MutationObserverInit = {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
    };
    this.observer.observe(this.container, observerOptions);
    const slot = this.container.querySelector("slot");
    this.observer.observe(slot, observerOptions);
  }

  disconnectedCallback(){
    this.observer.disconnect();
  }
  
  private container: HTMLDivElement;

  render() {
    return (
      <Host>
        <div id="container" class={this.expanded && "expanded"} ref={el => this.container = el}>
            <slot></slot>
        </div>
      </Host>
    );
  }

}
