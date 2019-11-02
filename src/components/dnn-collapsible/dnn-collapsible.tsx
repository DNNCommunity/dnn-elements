import { Component, Host, h, Prop, Element, Watch, State } from '@stencil/core';

@Component({
  tag: 'dnn-collapsible',
  styleUrl: 'dnn-collapsible.scss',
  shadow: true
})
export class DnnCollapsible {

  @Element() el: HTMLDnnCollapsibleElement;

  /** Defines if the panel is expanded or not. */
  @Prop({reflect: true}) expanded: boolean = false;

  /** Defines the transition time in ms, defaults to 300ms */
  @Prop() transitionDuration?: number = 300;

  @State() animating: boolean = false;

  @Watch('expanded')
  handleExpandedChanged(newValue: boolean){
    this.animating = true;
    setTimeout(() => {
      const container = this.el.shadowRoot.querySelector('#container') as HTMLDivElement;
      if (newValue){
        container.style.height = container.scrollHeight + 'px';
      }
      else{
        container.style.height = "0px";
      }
    }, 0);
    
    setTimeout(() => {
      this.animating = false;
    }, this.transitionDuration);
  }

  componentDidLoad(){
    const container = this.el.shadowRoot.querySelector('#container') as HTMLDivElement;
    container.style.transitionDuration = this.transitionDuration + 'ms';
  }

  render() {
    return (
      <Host>
        <div id="container">
          {(this.expanded || this.animating) &&
              <slot></slot>
          }
        </div>
      </Host>
    );
  }

}
