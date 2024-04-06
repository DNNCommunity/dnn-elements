import { Component, Prop, State, Event, Watch, h, Host, EventEmitter, Method, AttachInternals, Listen } from '@stencil/core';

@Component({
  tag: 'dnn-autocomplete',
  styleUrl: 'dnn-autocomplete.scss',
  shadow: true,
  formAssociated: true,
})
export class DnnAutocomplete {

  /** The label for this autocomplete. */
  @Prop() label: string;

  /** The name for this autocomplete when used in forms. */
  @Prop() name: string;

  /** Defines the help label displayed under the field. */
  @Prop() helpText: string;

  /** Defines the placeholder for the autocomplete. */
  @Prop() placeholder: string;

  /** Defines the value for this autocomplete */
  @Prop() value: string;

  /** Defines the items source for this autocomplete. */
  @Prop() itemsSource: string;

  /** Defines the width for this autocomplete */
  @Prop() width: string;

  /** Defines whether the field requires having a value. */
  @Prop() required: boolean;

  /** Defines whether the field is disabled. */
  @Prop() disabled: boolean;

  /** Defines whether the autocomplete should fetch results from a remote endpoint. */
  @Prop() remote: boolean = false;


  /** focus state */
  @State() focused = false;

  /** valid state */
  @State() valid = true;

  /** custom validity message */
  @State() customValidityMessage: string;

  /** items */
  @State() items: string[] = [];

  /** selected index */
  @State() selectedIndex: number = -1;


  /** Fires when the value has changed and the user exits the input. */
  @Event() valueChange: EventEmitter<number | string | string[]>;

  /** Fires when the using is inputing data (on keystrokes). */
  @Event() valueInput: EventEmitter<number | string | string[]>;

  /** Reports the input validity details. See https://developer.mozilla.org/en-US/docs/Web/API/ValidityState */
  @Method()
  async checkValidity(): Promise<ValidityState> {
    return this.inputField.validity;
  }

  /** Can be used to set a custom validity message. */
  @Method()
  async setCustomValidity(message: string): Promise<void> {
    this.customValidityMessage = message;
    return this.inputField.setCustomValidity(message);
  }

  /** attacth the internals for form validation */
  @AttachInternals() internals: ElementInternals;

  /** Watcher for itemsSource */
  @Watch('itemsSource')
  itemsSourceHandler(newValue: string) {
    if (this.remote) {
      this.endpoint = newValue;
    } else {
      this.items = newValue.split(",");
    }
  }

  /** Listener for mouse down event */
  @Listen("mousedown", { target: "document" })
  handleOutsideClick(e: MouseEvent) {
    const path = e.composedPath();
    if (!path.includes(this.inputField) && !path.includes(this.suggestionList)) {
      this.items = [];
    }
  }

  private inputField!: HTMLInputElement;
  private labelId: string;
  private endpoint: string = "";
  private style: { [key: string]: string } = {};
  private suggestionList: HTMLUListElement;

  /** Set source for items to be local */
  isLocal() {
    return this.endpoint == "" || this.endpoint == null || this.endpoint == undefined;
  }

  // eslint-disable-next-line @stencil-community/own-methods-must-be-private
  formResetCallback() {
    this.inputField.setCustomValidity("");
    this.valid = true;
    this.value = "";
    this.internals.setValidity({});
    this.internals.setFormValue("");
  }

  /** Handle the input event
   * 
   * @param e Event
   * @returns HTMLElement
   */
  private handleInput(e: Event): HTMLElement {
    let target = e.target as HTMLInputElement;
    this.value = target.value;
    let valid = this.inputField.checkValidity();
    this.valid = valid;
    this.valueInput.emit(this.value);

    if (this.items.length === 0) {
      this.itemsSourceHandler(this.itemsSource);
    }

    let buildAutoCompleteItem = (name: string) => {
      let item: HTMLElement = document.createElement("div");
      item.setAttribute("class", "autocomplete-row");
      item.innerHTML = "<strong>" + name + "</strong>";

      item.addEventListener('click', () => {
        target.value = name;
        clear();
      });

      return item;
    }

    let createAutoCompleteContainer = (items: HTMLElement[]) => {
      let autocomplete: HTMLElement = document.createElement("div");
      autocomplete.setAttribute("id", "autocomplete-list");
      autocomplete.setAttribute("class", "autocomplete-items");

      for (let autocompleteItem of items) {
        autocomplete.appendChild(autocompleteItem);
      }

      return autocomplete;
    }

    let getLocalResults = () => {
      let data: HTMLElement[] = [];
      for (let index in this.items) {
        if (this.items[index].toLowerCase().includes(input.toLocaleLowerCase())) {
          let autocompleteItem: HTMLElement = buildAutoCompleteItem(this.items[index]);
          data.push(autocompleteItem);
        }
      }

      return data;
    }

    let getRequest = (query: string) => {
      let uri: string = this.endpoint + query;
      var promise = fetch(uri)
        .then((response) => response.json());

      return promise;
    }

    let getRemoteResults = (input: string, callback: (newData: string[]) => any) => {
      getRequest(input).then((response) => {
        if (response) {
          callback(response);
        } else {
          clear();
        }
      });
    }

    let clear = () => {
      var container = target.parentNode.querySelector("#autocomplete-list");
      if (container != null && container != undefined) {
        target.parentNode.removeChild(container);
      }
    }

    let hydrateAutocomplete = (results: HTMLElement[]) => {
      clear();
      if (results.length > 0) {
        let autocomplete: HTMLElement = createAutoCompleteContainer(results);
        target.parentNode.appendChild(autocomplete);
      }
    }


    let input: string = target.value;
    if (input === "" || input === undefined) {
      clear();
      return;
    }

    if (this.isLocal()) {
      let results: HTMLElement[] = getLocalResults();
      hydrateAutocomplete(results);
    } else {
      getRemoteResults(input, (remoteItemsSource) => {
        let results: HTMLElement[] = [];
        for (let index in remoteItemsSource) {
          let currentElement: HTMLElement = buildAutoCompleteItem(remoteItemsSource[index]);
          results.push(currentElement);
        }

        hydrateAutocomplete(results);
      });
    }
  }

  private handleInvalid(): void {
    this.valid = false;
    if (this.customValidityMessage == undefined) {
      this.customValidityMessage = this.inputField.validationMessage;
    }
  }

  private handleChange() {
    this.valueChange.emit(this.value);
    if (this.name != undefined) {
      var data = new FormData();
      data.append(this.name, this.value.toString());
      this.internals.setFormValue(data);
    }
  }

  /** Update style width */
  updateStyles() {
    this.style["width"] = this.width;
  }

  /** Check if the label should float */
  private shouldLabelFloat(): boolean {
    if (this.focused) {
      return false;
    }

    if (this.value != undefined && this.value != "") {
      return false;
    }

    return true;
  }

  /** Render the component */
  render() {
    this.updateStyles();

    return (
      <Host>
        <dnn-fieldset
          invalid={!this.valid}
          focused={this.focused}
          label={`${this.label ?? ""}${this.required ? " *" : ""}`}
          helpText={this.helpText}
          id={this.labelId}
          disabled={this.disabled}
          floatLabel={this.shouldLabelFloat()}
          onClick={() => !this.focused && this.inputField.focus()}
        >
          <div class="autocomplete" style={this.style}>
            <input
              ref={(el) => this.inputField = el}
              name={this.name}
              type="search"
              disabled={this.disabled}
              required={this.required}
              autoComplete="off"
              value={this.value}
              placeholder={this.placeholder}
              onBlur={() => this.focused = false}
              onFocus={() => this.focused = true}
              onInput={async (e) => await this.handleInput(e)}
              onInvalid={() => this.handleInvalid()}
              onChange={() => this.handleChange()}
              aria-labelledby={this.labelId}
              onKeyDown={e => {
                if (e.key == "Enter") {
                  this.value = this.items[this.selectedIndex];
                  this.items = [];
                }
                if (e.key == "ArrowDown") {
                  this.selectedIndex = Math.min(this.selectedIndex + 1, this.items.length - 1);
                }
                if (e.key == "ArrowUp") {
                  this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
                }

                const selectedItem = this.suggestionList?.querySelector(".selected");
                if (!selectedItem) {
                  return;
                }

                selectedItem.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "center",
                });
              }}
            />
            {this.items.length > 0 &&
              <ul ref={el => this.suggestionList = el}>
                {this.items.map((option, index) =>
                  <li
                    class={this.selectedIndex == index ? "selected" : ""}
                    onClick={() => {
                      this.value = option;
                      this.items = [];
                    }}
                  >
                    {option}
                  </li>
                )}
              </ul>
            }
          </div>
        </dnn-fieldset>
      </Host>
    );
  }
}