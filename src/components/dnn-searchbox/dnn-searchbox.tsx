import { Component, Host, h, State, Event, EventEmitter, Watch, Prop } from '@stencil/core';
import searchIcon from '@fortawesome/fontawesome-free/svgs/solid/search.svg';
import timesCircle from '@fortawesome/fontawesome-free/svgs/solid/times-circle.svg';

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

  @State() query: string = "";

  /**
   * Fires up each time the search query changes.
   * The data passed is the new query.
   */
  @Event() queryChanged: EventEmitter;

  @Watch('query')
  handleQueryChanged(){
    this.queryChanged.emit(this.query);
  }

  render() {
    return (
      <Host>
        <input type="text" value={this.query}
          placeholder={this.placeholder}
          onInput={e => this.query = (e.target as HTMLInputElement).value}
        />
        {this.query !== "" ?
          <button class="svg clear" innerHTML={timesCircle}
            onClick={() => this.query = ""}
          />
        :
          <div class="svg" innerHTML={searchIcon} />
        }
      </Host>
    );
  }

}
