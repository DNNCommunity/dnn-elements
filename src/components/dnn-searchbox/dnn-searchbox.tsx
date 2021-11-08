import { Component, Host, h, Event, EventEmitter, Watch, Prop } from '@stencil/core';
import { Debounce } from '../../utilities/debounce';
import searchIcon from "@material-design-icons/svg/filled/search.svg";
import cancelIcon from "@material-design-icons/svg/filled/cancel.svg";
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

  /** Sets the query */
  @Prop({mutable: true}) query: string = "";

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
            innerHTML={cancelIcon}
            onClick={() => this.query = ""}
          />
        :
        <span innerHTML={searchIcon} />
        }
      </Host>
    );
  }

}
