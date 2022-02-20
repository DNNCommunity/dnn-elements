import { Component, Host, h, Prop, State, Element, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'dnn-treeview-item',
  styleUrl: 'dnn-treeview-item.scss',
  shadow: true,
})
export class DnnTreeviewItem {
  
  private expander!: HTMLDivElement;

  @Element() el!: HTMLDnnTreeviewItemElement;
  
  /** Defines if the current node is expanded.  */
  @Prop({mutable: true, reflect: true}) expanded: boolean = false;

  /** Fires when the user expands a node. */
  @Event({bubbles: false}) userExpanded: EventEmitter<void>;

  /** Fires when the user collapses a node. */
  @Event({bubbles: false}) userCollapsed: EventEmitter<void>;

  /** Manages state for whether or not item has children. */
  @State() hasChildren: boolean = false;

  /** Watch expanded Prop */
  @Watch('expanded')
  watchExpanded(expanded: boolean) {
    if (expanded) {
      this.expander.classList.add("expanded");
      this.collapsible.expanded = true;
      return;
    }
    
    this.expander.classList.remove("expanded");
    this.collapsible.expanded = false;
  }
      
  
  private childElement!: HTMLDivElement;
  private collapsible!: HTMLDnnCollapsibleElement;

  componentDidLoad() {
    requestAnimationFrame(() => {
      const child = this.childElement.children[0] as HTMLSlotElement;
      const count = child.assignedElements().length
      if (count > 0){
        this.hasChildren = true;
      }
      if (this.expanded){
        this.expander.classList.add("expanded");
        this.collapsible.expanded = true;
      }
    });
  }

  private toggleCollapse(): void {
    this.expanded = !this.expanded;
    if (this.expanded){
      this.expander.classList.add("expanded");
      this.userExpanded.emit();
      return;
    }

    this.expander.classList.remove("expanded");
    this.userCollapsed.emit();
  }

  render() {
    return (
      <Host>
        <div class="expander" ref={el => this.expander = el}>
          {this.hasChildren &&
            <button
              onClick={() => this.toggleCollapse()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M10 17l5-5-5-5v10z"/><path d="M0 24V0h24v24H0z" fill="none"/></svg>
            </button>
          }
        </div>
        <div class="item">
          <div class="item-slot">
            <slot></slot>
          </div>
          <dnn-collapsible ref={el => this.collapsible = el} expanded={this.expanded}>
            <div ref={el => this.childElement = el}>
              <slot name="children"></slot>
            </div>
          </dnn-collapsible>
          </div>
      </Host>
    );
  }
}

export interface ExpandedToggledEvent{
  state: "expanded" | "collapsed";
  height: number;
}