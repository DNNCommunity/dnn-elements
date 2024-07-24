import { Component, Host, h, Prop, Event, State } from '@stencil/core';
import { EventEmitter } from '@stencil/core';
import { Watch } from '@stencil/core';

@Component({
  tag: 'dnn-chevron',
  styleUrl: 'dnn-chevron.scss',
  shadow: true
})
export class DnnChevron {

  /** Expand text for screen readers */
  @Prop() expandText?: string = "expand";

  /** Collapse text for screen readers */
  @Prop() collapseText?: string = "collapse";

  /** Is the chevron expanded */
  @Prop({mutable: true, reflect: true}) expanded?: boolean = false;
  @Watch('expanded')
  handleExpandedChanged(newValue: boolean) {
    this.changed.emit(newValue);
  }

  /** Fires up when the expanded status changes */
  @Event() changed: EventEmitter;
    
  @State() focused: any;
  private button: HTMLButtonElement;

  render() {
    return (
      <Host
        tabIndex={this.focused ? -1 : 0}
        onFocus={() => this.button.focus()}
        onBlur={() => this.button.blur()}
      >
        <button
          ref={el => this.button = el}
          aria-label={this.expanded ? this.collapseText : this.expandText}
          onClick={() => this.expanded = !this.expanded}
          onFocus={() => this.focused = true}
          onBlur={() => this.focused = false}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
        </button>
      </Host>
    );
  }

}
