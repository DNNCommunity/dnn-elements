import { Component, Prop, State, Event, Element, h, Host, EventEmitter, Method, AttachInternals, Listen, Watch } from '@stencil/core';
import { DnnAutocompleteSuggestion, NeedMoreItemsEventArgs } from './types';
import { Debounce } from '../../utilities/debounce';

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
  
  /** The total amount of suggestions for the given search query.
   * This can be used to show virtual scroll and pagination progressive feeding.
   * The needMoreItems event should be used to request more items.
   */
  @Prop() totalSuggestions: number;
 
  /** How many suggestions to preload in pixels of their height.
  * This is used to calculate the virtual scroll height and request
  * more items before they get into view.
  */
  @Prop() preloadThresholdPixels: number = 1000;

  /** Defines the type of automatic completion the browser could use.
  * See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
  */
  @Prop() autocomplete: string = "off";

  @Element() element: HTMLDnnAutocompleteElement;

  /** Fires when the value has changed and the user exits the input. */
  @Event() valueChange: EventEmitter<number | string | string[]>;

  /** Fires when the using is inputing data (on keystrokes). */
  @Event() valueInput: EventEmitter<number | string | string[]>;

  /** Fires when the component needs to display more items in the suggestions. */
  @Event() needMoreItems: EventEmitter<NeedMoreItemsEventArgs>;

  /** Fires when the search query has changed.
   * This is almost like valueInput, but it is debounced
   * and can be used to trigger a search query without overloading
   * API endpoints while typing.
   */
  @Event() searchQueryChanged: EventEmitter<string>;
  
  /** Fires when an item is selected. */
  @Event() itemSelected: EventEmitter<string>;

  /** Reports the input validity details. See https://developer.mozilla.org/en-US/docs/Web/API/ValidityState */
  @Method()
  async checkValidity(): Promise<ValidityState> {
    var validity = this.inputField.checkValidity();
    if (!validity) {
      this.fieldset.setValidity(false, this.inputField.validationMessage);
    }
    this.fieldset.setValidity(true, "");
    return this.inputField.validity;
  }
  
  /** Can be used to set a custom validity message. */
  @Method()
  async setCustomValidity(message: string): Promise<void> {
    if (message == undefined || message == "") {
      this.inputField.setCustomValidity("");
      this.valid = true;
      this.fieldset.setValidity(true);
      return;
    }

    this.inputField.setCustomValidity(message);
    this.valid = false;
    this.fieldset.setValidity(false, message);
  }

  @State() focused = false;
  @State() valid = true;
  @State() customValidityMessage: string;
  @State() selectedIndex: number;
  @State() positionInitialized = false;
  @State() lastScrollTop = 0;
  @State() displayValue: string = "";

  @Watch("value")
  handleValueChange(newValue: string) {
    this.displayValue = newValue;

    // Find the index of the selected item
    this.selectedIndex = this.suggestions.findIndex(s => s.value === newValue);
  }
  
  /** attacth the internals for form validation */
  @AttachInternals() internals: ElementInternals;
  
  /** Listener for mouse down event */
  @Listen("click", { target: "document", capture: false })
  handleClick(e: MouseEvent) {
    const path = e.composedPath();
    if (!path.includes(this.element))
    {
      this.focused = false;
    }
  }
  
  componentDidRender(){
    if (this.focused && this.suggestions.length > 0 && !this.positionInitialized){
      this.adjustDropdownPosition();
    }
  }

  private inputField!: HTMLInputElement;
  private suggestionsContainer: HTMLUListElement;
  private labelId: string;
  private fieldset: HTMLDnnFieldsetElement;
  
  // eslint-disable-next-line @stencil-community/own-methods-must-be-private
  formResetCallback() {
    this.inputField.setCustomValidity("");
    this.valid = true;
    this.value = "";
    this.internals.setValidity({});
    this.internals.setFormValue("");
  }
  
  private handleInput(e: Event) {
    const inputValue = (e.target as HTMLInputElement).value;
    this.displayValue = inputValue;
    this.value = inputValue;
    var valid = this.inputField.checkValidity();
    this.valid = valid;
    this.valueInput.emit(inputValue);
    this.handleSearchQueryChanged(inputValue);
  }

  @Debounce(300)
  private handleSearchQueryChanged(value: string) {
    this.searchQueryChanged.emit(value);
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

  private findAverageSuggestionHeight(): number {
    const suggestionItems = this.suggestionsContainer.querySelectorAll("li");
    var totalHeight = 0;
    for (let i = 0; i < suggestionItems.length; i++) {
      totalHeight += suggestionItems[i].clientHeight;
    }
    return totalHeight / suggestionItems.length;
  }

  private readonly adjustDropdownPosition = () => {
    var itemHeight = this.findAverageSuggestionHeight();
    requestAnimationFrame(() => {
      this.positionInitialized = true;
    });

    // If we can fit 3 items below the input and there is still 3em left, we show the dropdown under.
    // Otherwise, we show it above.
    var spaceBelow = window.innerHeight - this.inputField.getBoundingClientRect().bottom;
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const fitsDown = spaceBelow > 3 * itemHeight + 3 * rem;
    if (fitsDown) {
      this.suggestionsContainer.style.top = "1.2rem";
    }
    else {
      this.suggestionsContainer.style.bottom = "1.2rem";
    }

    // Set the max height to not overflow the screen.
    if (fitsDown){
      this.suggestionsContainer.style.maxHeight = `${spaceBelow - 3 * rem}px`;
    }
    else {
      this.suggestionsContainer.style.maxHeight = `${this.inputField.getBoundingClientRect().top - 3 * rem}px`;
    }

    this.checkIfMoreItemsNeeded();
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
    this.value = this.suggestions[this.selectedIndex]?.value || this.value;
    if (e.key === "Enter") {
      var selectedItem = this.suggestions[this.selectedIndex];
      this.value = selectedItem.value;
      this.inputField.value = selectedItem.label;
      this.itemSelected.emit(selectedItem.value);
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
    this.displayValue = this.suggestions[this.selectedIndex].label;
    this.inputField.value = this.displayValue;
    this.checkValidity();
    this.focused = false;
    this.itemSelected.emit(this.suggestions[this.selectedIndex].value)
  }

  private getVirtualScrollHeight(): number {
    const itemHeight = this.findAverageSuggestionHeight();
    const upcomingItems = this.totalSuggestions - this.suggestions.length;
    return itemHeight * upcomingItems;
  }

  private handleDropdownClick(): void {
    this.handleSearchQueryChanged(this.value);
  }

  @Debounce(100)
  private handleSuggestionsScroll(): void {
    const container = this.suggestionsContainer;
    const currentScrollTop = container.scrollTop;

    // Only act if we are scrolling down
    if (currentScrollTop > this.lastScrollTop) {
      const loadingDiv = container.querySelector('.loading') as HTMLDivElement;

      if (loadingDiv == undefined) {
        this.lastScrollTop = currentScrollTop;
        return;
      }

      const loadingDivPosition = loadingDiv.offsetTop;
      const loadingDivHeight = loadingDiv.offsetHeight;
      const loadingDivBottom = loadingDivPosition + loadingDivHeight;

      // Calculate the visible bottom of the scroll container
      const visibleBottom = currentScrollTop + container.clientHeight;

      // Prevent scrolling past the loading div by checking if the visible bottom surpasses the loading div's bottom
      if (visibleBottom > loadingDivBottom) {
        // Adjust scrollTop so it doesn't scroll past the loading div
        container.scrollTop = loadingDivBottom - container.clientHeight;
      }

      // Check if more items are needed based on the position of the loading div
      this.checkIfMoreItemsNeeded();
    }

    // Update the last scroll position
    this.lastScrollTop = currentScrollTop;
  }

  @Debounce()
  private checkIfMoreItemsNeeded() {
    const container = this.suggestionsContainer;
  
    const loadingDiv = container.querySelector('.loading') as HTMLDivElement;
    if (loadingDiv == undefined) return; // Exit if there's no loading div
  
    const scrollPosition = container.scrollTop + container.clientHeight;
    const loadingDivPosition = loadingDiv.offsetTop;
  
    // Check if the loading div is within the threshold of becoming visible
    if (loadingDivPosition - scrollPosition < this.preloadThresholdPixels) {
      const eventArgs: NeedMoreItemsEventArgs = {
        searchTerm: this.inputField.value,
      };
      this.needMoreItems.emit(eventArgs);
    }
  }

  handleBlur(): void {
    var validity = this.inputField.checkValidity();
    this.valid = validity;
    this.fieldset.setValidity(validity, this.inputField.validationMessage);
    this.internals.setValidity(this.inputField.validity, this.inputField.validationMessage);
  }

  render() {
    return (
      <Host
        tabIndex={this.focused ? -1 : 0}
        onFocus={() => this.inputField.focus()}
        onBlur={() => this.inputField.blur()}
      >
        <dnn-fieldset
          ref={el => this.fieldset = el}
          invalid={!this.valid}
          focused={this.focused}
          label={`${this.label ?? ""}${this.required ? " *" : ""}`}
          helpText={this.helpText}
          id={this.labelId}
          disabled={this.disabled}
          floatLabel={this.shouldLabelFloat()}
        >
          <div class="inner-container">
            <input
              ref={(el) => this.inputField = el}
              name={this.name}
              type="search"
              role="combobox"
              aria-haspopup="listbox"
              aria-expanded={this.focused.toString()}
              aria-activedescendant={this.selectedIndex !== undefined ? `option-${this.selectedIndex}` : undefined}
              disabled={this.disabled}
              required={this.required}
              autoComplete={this.autocomplete}
              value={this.displayValue}
              onFocus={() => {
                this.searchQueryChanged.emit(this.value || "");
                this.focused = true;
              }}
              onBlur={() => this.handleBlur()}
              onInput={e => this.handleInput(e)}
              onInvalid={() => this.handleInvalid()}
              onChange={() => this.handleChange()}
              aria-labelledby={this.labelId}
              onKeyDown={e => this.handleKeyDown(e)}
            />
            <ul
              class={this.focused && this.suggestions.length > 0 ? "show" : ""}
              role="listbox"
              ref={el => this.suggestionsContainer = el}
              onScroll={() => this.handleSuggestionsScroll()}
            >
              {this.suggestions.map((suggestion, index) => (
                <li
                  id={`option-${index}`}
                  role="option"
                  aria-selected={this.selectedIndex == index}
                  class={this.selectedIndex == index ? "selected" : ""}
                  onClick={e => this.selectItem(e, index)}
                >
                  {this.renderSuggestion != undefined ? this.renderSuggestion(suggestion) : suggestion.label}
                </li>
              ))}
              {this.totalSuggestions != undefined && this.totalSuggestions > this.suggestions.length &&
                <div class="loading">
                </div>
              }
              {this.totalSuggestions != undefined && this.totalSuggestions > this.suggestions.length && this.positionInitialized &&
                <div style={{height: `${this.getVirtualScrollHeight()}px`}}>
                </div>
              }
            </ul>
            <svg
              onClick={() => this.handleDropdownClick()}
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