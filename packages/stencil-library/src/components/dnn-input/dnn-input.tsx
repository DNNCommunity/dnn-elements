import { Component, Host, Prop, State, h, Method, Event, EventEmitter, AttachInternals } from '@stencil/core';
import { generateRandomId } from '../../utilities/stringUtilities';

/** A custom input component that wraps the html input element is a mobile friendly component that supports a label, some help text and other features.
 * @slot prefix - Can be used to inject content before the input field.
 * @slot suffix - Can be used to inject content after the input field.
 */
@Component({
  tag: 'dnn-input',
  styleUrl: 'dnn-input.scss',
  shadow: true,
  formAssociated: true,
})
export class DnnInput {

  /** The input type, supports most of html standard input type, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types. */
  @Prop({mutable: true}) type: "date" | "datetime-local" | "email" | "number" | "password" | "tel" | "text" | "time" | "url" | "search" = "text";
  
  /** The label for this input. */
  @Prop() label: string;

  /** The name for this input when used in forms. */
  @Prop() name: string;

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

  /** @deprecated This control has it's own validation reporting, will be removed in v0.25.0 */
  @Prop() disableValidityReporting: boolean;

  /** If true, enables users to switch between a password and a text field (to view their password). */
  @Prop() allowShowPassword: boolean;

  /** Fires when the value has changed and the user exits the input. */
  @Event() valueChange: EventEmitter<number | string | string[]>;

  /** Fires when the using is inputing data (on keystrokes). */
  @Event() valueInput: EventEmitter<number | string | string[]>;
  
  /** Reports the input validity details. See https://developer.mozilla.org/en-US/docs/Web/API/ValidityState */
  @Method()
  async checkValidity(): Promise<ValidityState> {
    var validity = this.inputField.checkValidity();
    if (!validity) {
      this.fieldset.setValidity(false, this.inputField.validationMessage);
    }
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
  
  @AttachInternals() internals: ElementInternals;
  
  private inputField!: HTMLInputElement;
  private fieldset: HTMLDnnFieldsetElement;
  private labelId: string;

  componentWillLoad() {
    this.labelId = generateRandomId();
  }

  componentDidLoad() {
    var validity = this.inputField.validity;
    var validityMessage = validity.valid ? "" : this.inputField.validationMessage;
    this.internals.setValidity(this.inputField.validity, validityMessage);
  }

  // eslint-disable-next-line @stencil-community/own-methods-must-be-private
  formResetCallback() {
    this.inputField.setCustomValidity("");
    this.value = "";
    this.internals.setValidity({});
    this.internals.setFormValue("");
  }

  private handleInput(e: InputEvent): void {
    if (this.type === "number" && e.data === "-") {
      // Ignore the minus sign if the input type is number
      return;
    }
    var value = (e.target as HTMLInputElement).value;
    this.value = value;
    var valid = this.inputField.checkValidity();
    this.valid = valid;
    this.valueInput.emit(this.value);
  }

  private handleInvalid(): void {
    this.fieldset.setValidity(false, this.inputField.validationMessage);
    this.internals.setValidity(this.inputField.validity, this.inputField.validationMessage);
  }

  private handleChange() {
    this.valueChange.emit(this.value);
    if (this.name != undefined){
      var data = new FormData();
      data.append(this.name, this.value.toString());
      this.internals.setFormValue(data);
    }
  }

  private switchPasswordVisibility(){
    if (this.type === "password" )
    {
      this.type = "text";
      return;
    }
    if (this.type === "text")
    {
      this.type = "password";
      return;
    }
  }

  private shouldLabelFloat(): boolean {
    if (this.focused) {
      return false;
    }

    if (this.value != undefined && this.value != "") {
      return false;
    }

    if (this.type == "date" || this.type == "datetime-local" || this.type == "time") {
      return false;
    }

    if (this.type === "number" && this.value === 0){
      return false;
    }
    
    return true;
  }

  handleBlur(): void {
    this.focused = false
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
          onClick={() => !this.focused && this.inputField.focus()}
          onFocus={() => this.focused = true}
          onBlur={() => this.focused = false}
        >
          <div class="inner-container">
            {!this.shouldLabelFloat() &&
              <slot name="prefix"></slot>
            }
            <input
              ref={el => this.inputField = el}
              name={this.name}
              type={this.type}
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
              onBlur={() => this.handleBlur()}
              onFocus={() => this.focused = true}
              onInput={e => this.handleInput(e)}
              onInvalid={() => this.handleInvalid()}
              onChange={() => this.handleChange()}
              aria-labelledby={this.labelId}
            />
            {!this.shouldLabelFloat() &&
              <slot name="suffix"></slot>
            }
            {!this.valid &&
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="error">
                <path d="M479.982-280q14.018 0 23.518-9.482 9.5-9.483 9.5-23.5 0-14.018-9.482-23.518-9.483-9.5-23.5-9.5-14.018 0-23.518 9.482-9.5 9.483-9.5 23.5 0 14.018 9.482 23.518 9.483 9.5 23.5 9.5ZM453-433h60v-253h-60v253Zm27.266 353q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/>
              </svg>
            }
            {this.allowShowPassword &&
              <button class="show-password" onClick={() => this.switchPasswordVisibility()}>
                {this.type === "text" &&
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path d="M480.118-330Q551-330 600.5-379.618q49.5-49.617 49.5-120.5Q650-571 600.382-620.5q-49.617-49.5-120.5-49.5Q409-670 359.5-620.382q-49.5 49.617-49.5 120.5Q310-429 359.618-379.5q49.617 49.5 120.5 49.5Zm-.353-58Q433-388 400.5-420.735q-32.5-32.736-32.5-79.5Q368-547 400.735-579.5q32.736-32.5 79.5-32.5Q527-612 559.5-579.265q32.5 32.736 32.5 79.5Q592-453 559.265-420.5q-32.736 32.5-79.5 32.5ZM480-200q-146 0-264-83T40-500q58-134 176-217t264-83q146 0 264 83t176 217q-58 134-176 217t-264 83Zm0-300Zm-.169 240Q601-260 702.5-325.5 804-391 857-500q-53-109-154.331-174.5-101.332-65.5-222.5-65.5Q359-740 257.5-674.5 156-609 102-500q54 109 155.331 174.5 101.332 65.5 222.5 65.5Z"/>
                  </svg>
                }
                {this.type == "password" &&
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path d="m629-419-44-44q26-71-27-118t-115-24l-44-44q17-11 38-16t43-5q71 0 120.5 49.5T650-500q0 22-5.5 43.5T629-419Zm129 129-40-40q49-36 85.5-80.5T857-500q-50-111-150-175.5T490-740q-42 0-86 8t-69 19l-46-47q35-16 89.5-28T485-800q143 0 261.5 81.5T920-500q-26 64-67 117t-95 93Zm58 226L648-229q-35 14-79 21.5t-89 7.5q-146 0-265-81.5T40-500q20-52 55.5-101.5T182-696L56-822l42-43 757 757-39 44ZM223-654q-37 27-71.5 71T102-500q51 111 153.5 175.5T488-260q33 0 65-4t48-12l-64-64q-11 5-27 7.5t-30 2.5q-70 0-120-49t-50-121q0-15 2.5-30t7.5-27l-97-97Zm305 142Zm-116 58Z"/>
                  </svg>
                }
              </button>
            }
          </div>
        </dnn-fieldset>
      </Host>
    );
  }
}
