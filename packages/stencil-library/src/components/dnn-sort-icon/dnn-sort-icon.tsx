import { Component, Host, h, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'dnn-sort-icon',
  styleUrl: 'dnn-sort-icon.scss',
  shadow: true
})
export class DnnSortIcon {
  /** Defines the current sort direction */
  @Prop({mutable: true}) sortDirection: "asc" | "desc" | "none" = "none";

  /** Emitted when the sort is changed. */
  @Event() sortChanged!: EventEmitter<"asc"|"desc"|"none">;
  
  @State() focused = false;
  
  private button!: HTMLButtonElement;
  
  private changeSort(): void {
    switch (this.sortDirection) {
      case "asc":
        this.sortDirection = "desc";
        break;
      case "desc":
        this.sortDirection = "asc";
        break;
      case "none":
        this.sortDirection = "asc";
        break;
      default:
        break;
    }

    this.sortChanged.emit(this.sortDirection);
  }

  render() {
    return (
      <Host
        tabIndex={this.focused ? -1 : 0}
        onFocus={() => this.button.focus()}
        onBlur={() => this.button.blur()}
      >
        <button
          ref={el => this.button = el!}
          class={{"active": this.sortDirection != "none"}}
          onClick={() => this.changeSort()}
          onFocus={() => this.focused = true}
          onBlur={() => this.focused = false}
        >
          {this.sortDirection == "none" &&
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16"><path d="M 0 7 H 12 L 6 0 Z M 0 9 H 12 L 6 16 Z"></path></svg>
          }
          {this.sortDirection == "asc" &&
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16"><path d="M 0 7 H 12 L 6 0 Z"></path></svg>
          }
          {this.sortDirection == "desc" &&
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16"><path d="M 0 9 H 12 L 6 16 Z"></path></svg>
          }
        </button>
      </Host>
    );
  }
}
