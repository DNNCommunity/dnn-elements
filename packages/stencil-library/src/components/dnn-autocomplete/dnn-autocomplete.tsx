import { Component, Prop, State, Event, Element, h, Host, EventEmitter, Method, AttachInternals, Listen } from '@stencil/core';
import DnnAutocompleteSuggestion from './types';

@Component({
  tag: 'dnn-autocomplete',
  styleUrl: 'dnn-autocomplete.scss',
  shadow: false,
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
  @Prop({mutable: true, reflect: true}) value: string;

  /** Defines whether the field requires having a value. */
  @Prop() required: boolean;

  /** Defines whether the field is disabled. */
  @Prop() disabled: boolean;

  /** Sets the list of suggestions. */
  @Prop() suggestions: DnnAutocompleteSuggestion[] = [];

  /** Callback to render suggestions, if not provided, only the label will be rendered. */
  @Prop() renderSuggestion: (suggestion: DnnAutocompleteSuggestion) => HTMLElement;

  @State() focused = false;
  @State() valid = true;
  @State() customValidityMessage: string;
  @State() selectedIndex: number;

  @Element() element: HTMLDnnAutocompleteElement;

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

  /** Listener for mouse down event */
  @Listen("click", { target: "document", capture: false })
  handleOutsideClick(e: MouseEvent) {
    const path = e.composedPath();
    if (!path.includes(this.element))
    {
      this.focused = false;
    }
  }

  private inputField!: HTMLInputElement;
  private labelId: string;
  private style: { [key: string]: string } = {};

  // eslint-disable-next-line @stencil-community/own-methods-must-be-private
  formResetCallback() {
    this.inputField.setCustomValidity("");
    this.valid = true;
    this.value = "";
    this.internals.setValidity({});
    this.internals.setFormValue("");
  }

  private handleInput(e: Event) {
    // TODO: We need to complete what happens here.
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

  private handleKeyDown(e: KeyboardEvent): void {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (this.selectedIndex == undefined) {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex = Math.min(this.selectedIndex + 1, this.suggestions.length - 1);
      }
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (this.selectedIndex == undefined) {
        this.selectedIndex = this.suggestions.length - 1;
      } else {
        this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
      }
    }
    this.value = this.suggestions[this.selectedIndex].value;
    if (e.key === "Enter") {
      this.focused = false;
    }
    if (e.key === "Tab"){
      this.focused = false;
    }
  }

  private selectItem(e: Event, index: number): void {
    e.preventDefault();
    e.stopPropagation();
    this.selectedIndex = index;
    this.value = this.suggestions[this.selectedIndex].value;
    this.focused = false;
  }

  /** Render the component */
  render() {
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
          // onClick={() => !this.focused && this.inputField.focus()}
        >
          <div onClick={() => console.log("inner-container clicked")} class="inner-container" style={this.style}>
            <input
              ref={(el) => this.inputField = el}
              name={this.name}
              type="search"
              disabled={this.disabled}
              required={this.required}
              autoComplete="off"
              value={this.suggestions.length > 0 && this.selectedIndex != undefined ? this.suggestions[this.selectedIndex].label : this.value}
              placeholder={this.placeholder}
              onFocus={() => this.focused = true}
              onInput={e => this.handleInput(e)}
              onInvalid={() => this.handleInvalid()}
              onChange={() => this.handleChange()}
              aria-labelledby={this.labelId}
              onKeyDown={e => this.handleKeyDown(e)}
            />
            <ul
              class={this.focused ? "show" : ""}
            >
              {this.suggestions.map((suggestion, index) => (
                <li
                  class={this.selectedIndex == index ? "selected" : ""}
                  onClick={e => this.selectItem(e, index)}
                >
                  {this.renderSuggestion != undefined ? this.renderSuggestion(suggestion) : suggestion.label}
                </li>
              ))}
            </ul>
              <svg
                class="chevron-down"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960">
                <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>
              </svg>
          </div>
        </dnn-fieldset>
      </Host>
    );
  }
}