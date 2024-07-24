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
  @Prop({mutable: true}) value: string;

  /** The label for this input. */
  @Prop() label: string;

  /** The name for this input when used in forms. */
  @Prop() name: string;

  /** Defines the help label displayed under the field. */
  @Prop() helpText: string;

  /** Defines whether the field requires having a value. */
  @Prop() required: boolean;

  /** Defines whether the field is disabled. */
  @Prop() disabled: boolean;

  /** Defines the type of auto-completion to use for this field, see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete. */
  @Prop() autocomplete: string = "off";

  /** Defines the minimum amount of charaters. */
  @Prop() minlength: number;

  /** Defines the maximum amount of charaters. */
  @Prop() maxlength: number;

  /** Defines wheter the defined value is readonly. */
  @Prop() readonly: boolean;

  /** Fires when the using is inputing data (on keystrokes). */
  @Event() valueInput: EventEmitter<string>;

  /** Fires when the value has changed and the user exits the input. */
  @Event() valueChange: EventEmitter<string>;

  /** Reports the input validity details. See https://developer.mozilla.org/en-US/docs/Web/API/ValidityState */
  @Method()
  async checkValidity(): Promise<ValidityState> {
    return this.textarea.validity;
  }

  /** Can be used to set a custom validity message. */
  @Method()
  async setCustomValidity(message: string): Promise<void> {
    this.customValidityMessage = message;
    return this.textarea.setCustomValidity(message);
  }

  @State() focused = false;
  @State() valid = true;
  @State() customValidityMessage: string;

  @AttachInternals() internals: ElementInternals;
  
  private textarea: HTMLTextAreaElement;
  private labelId: string;

  componentWillLoad() {
    this.labelId = generateRandomId();
  }

  // eslint-disable-next-line @stencil-community/own-methods-must-be-private
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
    this.valid = false;
    if (this.customValidityMessage == undefined){
      this.customValidityMessage = this.textarea.validationMessage;
    }
  }

  private handleChange() {
    this.valueChange.emit(this.value);
    if (this.name != undefined){
      var data = new FormData();
      data.append(this.name, this.value.toString());
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
            ref={el => this.textarea = el}
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
          />
        </dnn-fieldset>
      </Host>
    );
  }

}
