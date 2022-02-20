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

  @Listen("dnnCollapsibleHeightChanged")
  handleHeightChanged(){
    requestAnimationFrame(() => {
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
          this.container.style.maxHeight = `${this.container.scrollHeight}px`;
        });
        setTimeout(() => {
          this.container.style.maxHeight = "none";
        }, this.transitionDuration);
    }
  }
  
  @Watch("expanded")
  handledExpandedChanged(expanded: boolean){
    if (expanded){
      this.updateSize();
    }
    else{
      this.container.style.maxHeight = "0px";
    }
    setTimeout(() => {
      requestAnimationFrame(() => {
        this.dnnCollapsibleHeightChanged.emit();
      });
    }, this.transitionDuration);
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
