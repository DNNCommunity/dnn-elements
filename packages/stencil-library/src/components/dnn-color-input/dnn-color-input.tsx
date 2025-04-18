import { Component, Host, Prop, State, h, Event, EventEmitter, Watch, AttachInternals } from '@stencil/core';
import { DnnColorInfo } from './dnn-color-info';
import { generateRandomId } from "../../utilities/stringUtilities";


/** A custom input component that allows previewing and changing a color value.
 * @slot prefix - Can be used to inject content before the input field.
 * @slot suffix - Can be used to inject content after the input field.
 */
@Component({
  tag: 'dnn-color-input',
  styleUrl: 'dnn-color-input.scss',
  shadow: true,
  formAssociated: true,
})
export class DnnColorInput {

  /** Sets the initial color, must be a valid 8 character hexadecimal string without the # sign. */
  @Prop({mutable: true}) color: string = "000088";

  /** Sets the initial contrast color, must be a valid 8 character hexadecimal string without the # sign. */
  @Prop({mutable: true}) contrastColor: string = "FFFFFF";

  /** Sets the initial light color, must be a valid 8 character hexadecimal string without the # sign. */
  @Prop({mutable: true}) lightColor: string = "00000FF";

  /** Sets the initial dark color, must be a valid 8 character hexadecimal string without the # sign. */
  @Prop({mutable: true}) darkColor: string = "0000044";

  /** The label for this input. */
  @Prop() label: string;

  /** Disables interacting with the component. */
  @Prop() readonly: boolean;

  /** Can be used to customize the text language. */
  @Prop() localization: {
    contrast: string,
    preview: string,
    cancel: string,
    confirm: string,
    normal: string,
    light: string,
    dark: string,
  } = {
    contrast: "Contrast",
    preview: "Preview",
    cancel: "Cancel",
    confirm: "Confirm",
    normal: "Normal",
    light: "Light",
    dark: "Dark",
  };

  /** The name for this input if forms are used. */
  @Prop() name: string;

  /** Defines the help label displayed under the field. */
  @Prop() helpText: string;

  /** If true, the picker will allow selecting a contast color too. */
  @Prop() useContrastColor: boolean;

  /** If true, the picker will allow selecting a light color too. */
  @Prop() useLightColor: boolean;

  /** If true, the picker will allow selecting a dark color too. */
  @Prop() useDarkColor: boolean;

  /** Fires when the color was changed and confirmed. */
  @Event() colorChange: EventEmitter<DnnColorInfo>;

  /** Fires live as the user is trying color changes inside the modal. */
  @Event() colorInput: EventEmitter<DnnColorInfo>;
  
  @State() currentColor: DnnColorInfo;
  @State() focused: boolean;

  @AttachInternals() internals: ElementInternals;

  @Watch("currentColor")
  currentColorChanged(oldValue: DnnColorInfo, newValue: DnnColorInfo){
    if (oldValue != newValue)
    {
      this.colorInput.emit(newValue);
      this.setFormValue();
    }
  }

  private button: HTMLButtonElement;
  
  componentWillLoad() {
    this.labelId = generateRandomId();
    this.currentColor = {
      color: this.color,
      contrastColor: this.contrastColor,
      lightColor: this.lightColor,
      darkColor: this.darkColor
    };
    this.originalColor = this.currentColor;
  }

  componentDidLoad() {
    this.setFormValue();
  }

  formResetCallback() {
    this.internals.setValidity({});
    this.color = this.originalColor.color;
    this.contrastColor = this.originalColor.contrastColor;
    this.lightColor = this.originalColor.lightColor;
    this.darkColor = this.originalColor.darkColor;
    this.currentColor = this.originalColor;
  }
  
  private colorModal: HTMLDnnModalElement;
  private originalColor: DnnColorInfo;
  
  private hasMultipleColors = () => {
    return this.useContrastColor || this.useLightColor || this.useDarkColor;
  }

  private labelId: string;

  private showPicker(): void {
    this.currentColor = {
      color: this.color,
      contrastColor: this.contrastColor,
      lightColor: this.lightColor,
      darkColor: this.darkColor
    };
    this.colorModal.show();
  }

  private saveColor(): void {
    this.color = this.currentColor.color;
    this.contrastColor = this.currentColor.contrastColor;
    this.lightColor = this.currentColor.lightColor;
    this.darkColor = this.currentColor.darkColor;
    this.colorModal.hide();
    this.colorChange.emit(this.currentColor);
  }

  private setFormValue(){
    if (this.name != undefined){
      var formData = new FormData();
      formData.append(this.name, JSON.stringify(this.currentColor));
      this.internals.setFormValue(formData);
    }
  }

  render() {
    return (
      <Host
        tabIndex={this.focused ? -1 : 0}
        onFocus={() => this.button.focus()}
        onBlur={() => this.button.blur()}
      >
        <dnn-fieldset
          label={this.label}
          id={this.labelId}
          focused={this.focused}
          helpText={this.helpText}
        >
          <div class="inner-container">
            <slot name="prefix"></slot>
            <div class="color-preview">
              {this.useLightColor &&
                <div style={{backgroundColor: `#${this.lightColor}`}}>
                </div>
              }
              <div style={{backgroundColor: `#${this.color}`}}>
              </div>
              {this.useDarkColor &&
                <div style={{backgroundColor: `#${this.darkColor}`}}>
                </div>
              }
              {this.useContrastColor &&
                <div class="contrast" style={{color: `#${this.contrastColor}`}}>
                  <hr style={{color: `#${this.contrastColor}`}} />
                  <span>{this.localization.contrast}</span>
                  <hr style={{color: `#${this.contrastColor}`}}/>
                </div>
              }
            </div>
            {!this.readonly &&
              <button
                ref={el => this.button = el}
                aria-labelledby={this.labelId}
                onClick={() => this.showPicker()}
                onFocus={() => this.focused = true}
                onBlur={() => this.focused = false}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                >
                  <path d="M200-200h56l345-345-56-56-345 345v56Zm572-403L602-771l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829-660l-57 57Zm-58 59L290-120H120v-170l424-424 170 170Zm-141-29-28-28 56 56-28-28Z"/>
                </svg>
              </button>
            }
            <slot name="suffix"></slot>
          </div>
        </dnn-fieldset>
        <dnn-modal ref={el => this.colorModal = el} backdropDismiss={false}>
          {this.currentColor &&
            <div class="modal-content">
              {this.hasMultipleColors() &&
                <dnn-tabs>
                  <dnn-tab tabTitle={this.localization.normal}>
                    <dnn-color-picker
                      color={this.currentColor?.color}
                      onColorChanged={e => this.currentColor = {...this.currentColor, color: e.detail.hex}}
                    />
                  </dnn-tab>
                  {this.useLightColor &&
                    <dnn-tab tabTitle={this.localization.light}>
                      <dnn-color-picker
                        color={this.currentColor?.lightColor}
                        onColorChanged={e => this.currentColor = {...this.currentColor, lightColor: e.detail.hex}}
                      />
                    </dnn-tab>
                  }
                  {this.useDarkColor &&
                    <dnn-tab tabTitle={this.localization.dark}>
                      <dnn-color-picker
                        color={this.currentColor?.darkColor}
                        onColorChanged={e => this.currentColor = {...this.currentColor, darkColor: e.detail.hex}}
                      />
                    </dnn-tab>
                  }
                  {this.useContrastColor &&
                    <dnn-tab tabTitle={this.localization.contrast}>
                      <dnn-color-picker
                        color={this.currentColor?.contrastColor}
                        onColorChanged={e => this.currentColor = {...this.currentColor, contrastColor: e.detail.hex}}
                      />
                    </dnn-tab>
                  }
                </dnn-tabs>
              }
              {!this.hasMultipleColors() &&
                <dnn-color-picker
                  color={this.currentColor?.color}
                  onColorChanged={e => this.currentColor = {...this.currentColor, color: e.detail.hex}}
                />
              }
              <h3>Preview</h3>
              <div class="color-preview">
                {this.useLightColor &&
                  <div style={{backgroundColor: `#${this.currentColor.lightColor}`}}>
                  </div>
                }
                <div style={{backgroundColor: `#${this.currentColor.color}`}}>
                </div>
                {this.useDarkColor &&
                  <div style={{backgroundColor: `#${this.currentColor.darkColor}`}}>
                  </div>
                }
                {this.useContrastColor &&
                  <div class="contrast" style={{color: `#${this.currentColor.contrastColor}`}}>
                    <hr style={{color: `#${this.currentColor.contrastColor}`}} />
                    <span>{this.localization.contrast}</span>
                    <hr style={{color: `#${this.currentColor.contrastColor}`}}/>
                  </div>
                }
              </div>
              <div class="controls">
                <dnn-button
                  reversed
                  onClick={() => this.colorModal.hide()}
                >
                  {this.localization.cancel}
                </dnn-button>
                <dnn-button
                  onClick={() => this.saveColor()}
                >
                  {this.localization.confirm}
                </dnn-button>
              </div>
            </div>
          }
        </dnn-modal>
      </Host>
    );
  }
}