import { Component, Host, h, State, Event, EventEmitter, Watch, Prop } from '@stencil/core';
import { Debounce } from '../../utilities/debounce';

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
   * Debounces the queryChanged by 500ms.
   */
  @Prop() debounced: boolean = true;

  @State() query: string = "";

  /**
   * Fires up each time the search query changes.
   * The data passed is the new query.
   */
  @Event() queryChanged: EventEmitter;

  @Watch('query')
  fireQueryChanged(){
    if (this.debounced){
      this.debouncedHandleQueryChanged();
    }
    else{
      this.handleQueryChanged();
    }
  }
  
  private handleQueryChanged(){
    this.queryChanged.emit(this.query);
  }

  @Debounce(500)
  private debouncedHandleQueryChanged(){
    this.handleQueryChanged();
  }
  

  render() {
    return (
      <Host>
        <input type="text" value={this.query}
          placeholder={this.placeholder}
          onInput={e => this.query = (e.target as HTMLInputElement).value}
        />
        {this.query !== "" ?
          <button class="svg clear"
            onClick={() => this.query = ""}
          >
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" class="svg-inline--fa fa-times-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path></svg>
          </button>
        :
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
        }
      </Host>
    );
  }

}
