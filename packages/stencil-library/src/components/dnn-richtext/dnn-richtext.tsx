import { Component, Host, h, Prop, Event, EventEmitter, Watch, AttachInternals, State } from '@stencil/core';
import { Jodit } from "jodit";
import type { Config } from "jodit/types/config";
import { decodeHtml } from '../../utilities/stringUtilities';

@Component({
  tag: 'dnn-richtext',
  styleUrl: 'dnn-richtext.scss',
  shadow: false,
  formAssociated: true,
})
export class DnnRichtext {
  /** Optional configuration for Jodit, see https://xdsoft.net/jodit/docs/classes/config.Config.html */
  @Prop() options: Config;
  private textArea: HTMLTextAreaElement;
  private editor: Jodit;
  private dnnDefaultOptions: Config = {
    ...Jodit.defaultOptions,
    useSplitMode: true,
  }

  /** Sets the value of the content of the editor. */
  @Prop() value: string;

  /** Name of the field when used in a form. */
  @Prop() name: string;
  
  @Watch("value")
  watchValueChanged(newValue: string) {
    if (this.editor !== null && this.editor !== undefined) {
      this.editor.value = decodeHtml(newValue);
    }
    this.setFormValue();
  }
  
  /** Fires when the value changed. */
  @Event() valueChange: EventEmitter<string>;
  
  /** Fires during value input. */
  @Event() valueInput: EventEmitter<string>;
  
  @AttachInternals() internals: ElementInternals;
  
  @State() focused = false;
  
  componentDidLoad(){
    var mergedOptions = {
      ...this.dnnDefaultOptions,
      ...this.options,
    };
    this.editor = Jodit.make(this.textArea, mergedOptions);
    this.editor.value = decodeHtml(this.value);
    this.setFormValue();
    this.editor.e.on('change', newValue => {
      this.valueChange.emit(newValue);
      this.setFormValue();
    });
    this.editor.e.on('input', newValue => this.valueInput.emit(newValue));
    this.editor.e.on("focus", () => this.focused = true);
    this.editor.e.on("blur", () => this.focused = false);
  }

  // eslint-disable-next-line @stencil-community/own-methods-must-be-private
  formResetCallback() {
    this.editor.value = decodeHtml(this.value);
    this.internals.setValidity({});
    this.setFormValue();
  }

  private setFormValue() {
    if (this.name != undefined && this.name.length > 0){
      var data = new FormData();
      data.append(this.name, this.editor.value);
      this.internals.setFormValue(data);
    }
  }

  render() {
    return (
      <Host
        tabIndex={this.focused ? -1 : 0}
        onFocus={() => {
          this.focused = true;
          this.editor.focus();
        }}
        onBlur={() => this.focused = false}
      >
        <textarea
          ref={el => this.textArea = el}
          onFocus={() => this.focused = true}
          onBlur={() => this.focused = false}
        >
        </textarea>
      </Host>
    );
  }

}
