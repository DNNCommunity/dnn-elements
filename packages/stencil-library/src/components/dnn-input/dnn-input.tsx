import { Component, Host, Prop, State, h, Method, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'dnn-input',
  styleUrl: 'dnn-input.scss',
  shadow: true,
})
export class DnnInput {

  /** The input type, supports most of html standard input type, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types. */
  @Prop() type: "date" | "datetime-local" | "email" | "number" | "password" | "tel" | "text" | "time" | "url" | "search" = "text";
  
  /** The label for this input. */
  @Prop() label: string;

  /** The name for this input, if not provided a random name will be assigned. */
  @Prop({mutable: true}) name: string;

  /** The value of the input. */
  @Prop({mutable: true, reflect:true}) value: number | string | string[];

  /** Defines the help label displayed under the field. */
  @Prop() helpText: string;

  /** Defines whether the field requires having a value. */
  @Prop() required: boolean;
  
  /** Defines whether the field is disabled. */
  @Prop() disabled: boolean;

  /** Defines the type of auto-completion to use for this field, see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete. */
  @Prop() autocomplete: string = "off";

  /** Defines the minimum allowed value. */
  @Prop() min: number | string;

  /** Defines the maximum allowed value. */
  @Prop() max: number | string;

  /** Defines the minimum amount of charaters. */
  @Prop() minlength: number;

  /** Defines the maximum amount of charaters. */
  @Prop() maxlength: number;

  /** If true, allows multiple emails to be entered separated by commas. */
  @Prop() multiple: boolean;

  /** Valid for text, search, url, tel, email, and password, the pattern attribute defines a regular expression that the input's value must match in order for the value to pass constraint validation. */
  @Prop() pattern: string;

  /** Defines wheter the defined value is readonly. */
  @Prop() readonly: boolean;

  /** Defines the possible steps for numbers and dates/times. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#step */
  @Prop() step: string | number;

  /** If true, the browser default validation message will be hidden. */
  @Prop() disableValidityReporting: boolean;

  /** Fires when the value has changed and the user exits the input. */
  @Event() valueChange: EventEmitter<number | string | string[]>;

  /** Fires when the using is inputing data (on keystrokes). */
  @Event() valueInput: EventEmitter<number | string | string[]>;
  
  /** Reports the input validity details. See https://developer.mozilla.org/en-US/docs/Web/API/ValidityState */
  @Method()
  async checkValidity(): Promise<ValidityState> {
    return this.inputField.validity;
  }

  @Method()
  async setCustomValidity(message: string): Promise<void> {
    this.customValidityMessage = message;
    return this.inputField.setCustomValidity(message);
  }
  
  @State() focused = false;
  @State() valid = true;
  @State() customValidityMessage: string;
  
  private inputField!: HTMLInputElement;

  componentWillLoad() {
    if (this.name === undefined)
    {
      this.name = `dnn-input-${Math.floor(Math.random() * 1000000)}`;
    }
  }

  private getContainerClasses() {
    const classes: string[] = ["container"];
    if (this.focused) {
      classes.push("focused");
    }

    if (this.value !== undefined && this.value !== "")
    {
      classes.push("has-value");
    }

    if (this.required)
    {
      classes.push("required");
    }

    if (this.disabled)
    {
      classes.push("disabled");
    }

    if (!this.valid){
      classes.push("invalid");
    }

    return classes.join(" ");
  }

  private handleInput(value: string): void {
    this.value = value;
    var valid = this.inputField.checkValidity();
    this.valid = valid;
    this.valueInput.emit(this.value);
  }

  private handleInvalid(): void {
    this.valid = false;
    if (this.customValidityMessage == undefined){
      this.customValidityMessage = this.inputField.validationMessage;
    }
  }

  private handleChange() {
    if (!this.disableValidityReporting) {
      this.inputField.reportValidity();
    }
    this.valueChange.emit(this.value);
  }

  render() {
    return (
      <Host>
        <div
          class={this.getContainerClasses()}
          onClick={() => this.inputField.focus()}
        >
          <div class="inner-container">
            {this.label &&
              <label htmlFor={this.name}>
                {`${this.label}${this.required ? " *" : ""}`}
              </label>
            }
            <slot name="prefix"></slot>
            <input
              ref={el => this.inputField = el}
              name={this.name}
              type={this.type}
              aria-label={this.label}
              disabled={this.disabled}
              required={this.required}
              autoComplete={this.autocomplete}
              min={this.min}
              max={this.max}
              minlength={this.minlength}
              maxlength={this.maxlength}
              multiple={this.multiple}
              pattern={this.pattern}
              readonly={this.readonly}
              step={this.step}
              value={this.value}
              onBlur={() => this.focused = false}
              onFocus={() => this.focused=true}
              onInput={e => this.handleInput((e.target as HTMLInputElement).value)}
              onInvalid={() => this.handleInvalid()}
              onChange={() => this.handleChange()}
            />
            <slot name="suffix"></slot>
            {!this.valid &&
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="error">
                <path d="M479.982-280q14.018 0 23.518-9.482 9.5-9.483 9.5-23.5 0-14.018-9.482-23.518-9.483-9.5-23.5-9.5-14.018 0-23.518 9.482-9.5 9.483-9.5 23.5 0 14.018 9.482 23.518 9.483 9.5 23.5 9.5ZM453-433h60v-253h-60v253Zm27.266 353q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/>
              </svg>
            }
          </div>
        </div>
        {!this.valid && this.customValidityMessage &&
          <div class="error-message">
            {this.customValidityMessage}
          </div>
        }
        {this.valid &&
          <div class="help-text">{this.helpText}</div>
        }
      </Host>
    );
  }
}
