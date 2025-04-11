import { Component, Host, h, Prop, AttachInternals, State, Event, EventEmitter, Method } from '@stencil/core';
import { generateRandomId } from '../../utilities/stringUtilities';

/** A custom textarea component. */
@Component({
  tag: 'dnn-textarea',
  styleUrl: 'dnn-textarea.scss',
  shadow: true,
  formAssociated: true,
})
export class DnnTextarea {
  /** Can be set to change how the user can resize the field. */
  @Prop() resizable: "none" | "both" | "horizontal" | "vertical" | "block" | "inline" = "block";

  /** Sets the value of the textarea. */
  @Prop({mutable: true}) value = "";

  /** The label for this input. */
  @Prop() label?: string;

  /** The name for this input when used in forms. */
  @Prop() name?: string;

  /** Defines the help label displayed under the field. */
  @Prop() helpText?: string;

  /** Defines whether the field requires having a value. */
  @Prop() required?: boolean;

  /** Defines whether the field is disabled. */
  @Prop() disabled?: boolean;

  /** Defines the type of auto-completion to use for this field, see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete. */
  @Prop() autocomplete: string = "off";

  /** Defines the minimum amount of charaters. */
  @Prop() minlength?: number;

  /** Defines the maximum amount of charaters. */
  @Prop() maxlength?: number;

  /** Defines wheter the defined value is readonly. */
  @Prop() readonly?: boolean;

  /** Defines how many rows (lines of text) to initially show. */
  @Prop() rows: number = 3;

  /** Fires when the using is inputing data (on keystrokes). */
  @Event() valueInput!: EventEmitter<string>;

  /** Fires when the value has changed and the user exits the input. */
  @Event() valueChange!: EventEmitter<string>;

  /** Reports the input validity details. See https://developer.mozilla.org/en-US/docs/Web/API/ValidityState */
  @Method()
  async checkValidity(): Promise<ValidityState> {
    var validity = this.textarea.checkValidity();
    if (!validity) {
      this.fieldset.setValidity(false, this.textarea.validationMessage);
    }
    return this.textarea.validity;
  }

  /** Can be used to set a custom validity message. */
  @Method()
  async setCustomValidity(message: string): Promise<void> {
    if (message == undefined || message == "") {
      this.textarea.setCustomValidity("");
      this.valid = true;
      this.fieldset.setValidity(true);
      return;
    }

    this.customValidityMessage = message;
    this.valid = false;
    this.textarea.setCustomValidity(message);
  }

  @State() focused = false;
  @State() valid = true;
  @State() customValidityMessage?: string;

  @AttachInternals() internals!: ElementInternals;
  
  private textarea!: HTMLTextAreaElement;
  private fieldset!: HTMLDnnFieldsetElement;
  private labelId?: string;

  componentWillLoad() {
    this.labelId = generateRandomId();
  }

  componentDidLoad() {
    this.textarea.style.minHeight = `${this.rows * 1.5}em`;
  }

  formResetCallback() {
    this.textarea.setCustomValidity("");
    this.valid = true;
    this.value = "";
    this.internals.setValidity({});
    this.internals.setFormValue("");
  }

  private handleInput(value: string): void {
    this.value = value;
    var valid = this.textarea.checkValidity();
    this.valid = valid;
    this.valueInput.emit(this.value);
  }

  private handleInvalid(): void {
    this.valid = false; // Ensure the valid state is updated
    if (this.customValidityMessage == undefined) {
      this.customValidityMessage = this.textarea.validationMessage;
    }
    this.fieldset.setValidity(false, this.textarea.validationMessage);
    this.internals.setValidity(this.textarea.validity, this.textarea.validationMessage);
  }

  private handleChange() {
    this.valueChange.emit(this.value);
    if (this.name != undefined){
      var data = new FormData();
      data.append(this.name, this.value?.toString() ?? "");
      this.internals.setFormValue(data);
    }
  }

  private shouldLabelFloat(): boolean {
    if (this.focused) {
      return false;
    }

    if (this.value != undefined && this.value != "") {
      return false;
    }
    
    return true;
  }

  render() {
    return (
      <Host
        tabIndex={this.focused ? -1 : 0}
        onFocus={() => this.textarea.focus()}
        onBlur={() => this.textarea.blur()}
      >
        <dnn-fieldset
          ref={el => this.fieldset = el!}
          invalid={!this.valid}
          focused={this.focused}
          resizable={this.resizable}
          label={`${this.label ?? ""}${this.required ? " *" : ""}`}
          helpText={this.helpText}
          disabled={this.disabled}
          id={this.labelId}
          floatLabel={this.shouldLabelFloat()}
          onClick={() => !this.focused && this.textarea.focus()}
        >
          <textarea
            ref={el => this.textarea = el!}
            name={this.name}
            value={this.value}
            required={this.required}
            onBlur={() => this.focused = false}
            onFocus={() => this.focused=true}
            onChange={() => this.handleChange()}
            onInput={e => this.handleInput((e.target as HTMLTextAreaElement).value)}
            onInvalid={() => this.handleInvalid()}
            disabled={this.disabled}
            autoComplete={this.autocomplete}
            minlength={this.minlength}
            maxlength={this.maxlength}
            readonly={this.readonly}
            aria-labelledby={this.labelId}
            rows={this.rows}
          />
          {!this.valid &&
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="error">
                <path d="M479.982-280q14.018 0 23.518-9.482 9.5-9.483 9.5-23.5 0-14.018-9.482-23.518-9.483-9.5-23.5-9.5-14.018 0-23.518 9.482-9.5 9.483-9.5 23.5 0 14.018 9.482 23.518 9.483 9.5 23.5 9.5ZM453-433h60v-253h-60v253Zm27.266 353q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/>
              </svg>
          }
        </dnn-fieldset>
      </Host>
    );
  }

}
