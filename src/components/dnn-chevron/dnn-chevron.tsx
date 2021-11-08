import { Component, Host, h, Prop, Event } from '@stencil/core';
import { EventEmitter } from '@stencil/core';
import { Watch } from '@stencil/core';
import chevronRightIcon from "@material-design-icons/svg/filled/chevron_right.svg";

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

  /** Fires up when the expanded status changes */
  @Event() changed: EventEmitter;

  @Watch('expanded')
  handleExpandedChanged(newValue: boolean) {
    this.changed.emit(newValue);
  }

  render() {
    return (
      <Host>
        <button aria-label={this.expanded ? this.collapseText : this.expandText}
          onClick={() => this.expanded = !this.expanded}
        >
          <div innerHTML={chevronRightIcon} />
        </button>
      </Host>
    );
  }

}
