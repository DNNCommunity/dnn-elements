import { Component, Host, h, Prop, State, Event, EventEmitter, Listen } from '@stencil/core';

@Component({
  tag: 'dnn-treeview-item',
  styleUrl: 'dnn-treeview-item.scss',
  shadow: true,
})
export class DnnTreeviewItem {
  
  private expander!: HTMLDivElement;
  private childElement!: HTMLDivElement;
  
  /** Defines if the current node is expanded  */
  @Prop({mutable: true}) expanded: boolean = false;

  @State() hasChildren: boolean = false;

  /** Fires when a node expanded state has changed. */
  @Event() expandedToggled: EventEmitter<ExpandedToggledEvent>;

  @Listen("expandedToggled")
  expandedToggledHandler() {
      this.adjustHeight();
  }

  componentDidLoad() {
    const children = this.childElement.children[0] as HTMLSlotElement;
    const count = children.assignedElements().length
    if (count > 0){
      this.hasChildren = true;
    }
  }

  private toggleCollapse(): void {
    this.expanded = !this.expanded;
    if (this.expanded){
      this.expander.classList.add("expanded");
      this.adjustHeight();
      window.requestAnimationFrame(() => {
        setTimeout(() => {
          this.expandedToggled.emit({state: "expanded"});
        }, 300);
      });
      return;
    }

    this.childElement.style.height = "0px";
    this.expander.classList.remove("expanded");
    window.requestAnimationFrame(() => this.expandedToggled.emit({state: "collapsed"}));
  }

  private adjustHeight() {
    if (this.expanded){
      this.childElement.style.height = `${this.childElement.scrollHeight}px`;
      window.requestAnimationFrame(() => {
        setTimeout(() => {
          this.childElement.style.height = "auto";
          this.childElement.style.height = `${this.childElement.scrollHeight}px`;
        }, 300);
      });
      return;
    }

    
    //this.childElement.style.height = `${this.childElement.scrollHeight}px`;
  }

  render() {
    return (
      <Host>
        <div class="expander" ref={el => this.expander = el}>
          {this.hasChildren &&
            <button
              onClick={() => this.toggleCollapse()}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M10 17l5-5-5-5v10z"/><path d="M0 24V0h24v24H0z" fill="none"/></svg>
            </button>
          }
        </div>
        <div class="item">
          <slot></slot>
          <div class="children" ref={el => this.childElement = el}>
            <slot name="children"></slot>
          </div>
        </div>
      </Host>
    );
  }
}

export interface ExpandedToggledEvent{
  state: "expanded" | "collapsed",
}