import { Component, Host, h, Event, EventEmitter, Watch, Prop, State } from '@stencil/core';

@Component({
  tag: 'dnn-searchbox',
  styleUrl: 'dnn-searchbox.scss',
  shadow: true
})
export class DnnSearchbox {

  /**
   * Sets the field placeholder text.
   */
  @Prop() placeholder?: string = "";

  /**
   * How many milliseconds to wait before firing the queryChanged event.
   */
  @Prop() debounceTime: number = 500;

  /** Sets the query */
  @Prop({mutable: true}) query: string = "";

  /**
   * Fires up each time the search query changes.
   * The data passed is the new query.
   */
  @Event() queryChanged!: EventEmitter<string>;
  
  @Watch('query')
  handleQueryChanged(){
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.queryChanged.emit(this.query);
    }, this.debounceTime);
  }
  
  @State() focused: any;

  private inputField!: HTMLInputElement;
  
  private debounceTimer: any = null;

  render() {
    return (
      <Host
        tabIndex={this.focused ? -1 : 0}
        onFocus={() => this.inputField.focus()}
        onBlur={() => this.inputField.blur()}
      >
        <input
          ref={el => this.inputField = el!}
          type="text"
          value={this.query}
          placeholder={this.placeholder}
          onInput={e => this.query = (e.target as HTMLInputElement).value}
          onFocus={() => this.focused = true}
          onBlur={() => this.focused = false}
        />
        {this.query !== "" ?
          <button class="svg clear"
            onClick={() => this.query = ""}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>
          </button>
        :
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        }
      </Host>
    );
  }

}
