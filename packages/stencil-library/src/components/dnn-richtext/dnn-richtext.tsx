import { Component, Host, h, Prop, Event, EventEmitter, Watch, AttachInternals, State, Element } from '@stencil/core';
import { Jodit } from "jodit";
import type { Config } from "jodit/types/config";
import { decodeHtml } from '../../utilities/stringUtilities';
import { DeepPartial } from 'jodit/types/types';

@Component({
  tag: 'dnn-richtext',
  styleUrl: 'dnn-richtext.scss',
  shadow: true,
  formAssociated: true,
})
export class DnnRichtext {
  /** Optional configuration for Jodit, see https://xdsoft.net/jodit/docs/classes/config.Config.html
   * This will be merged with the default options and passed to the editor.
   * If you prefer to not have to pass a full config object,
   * you can use 'customizeOptions' to modify the options before initializing the editor
   * instead of providing all options here.
   */
  @Prop() options?: Config;
  
  /** Sets the value of the content of the editor. */
  @Prop() value = "";

  /** Name of the field when used in a form. */
  @Prop() name?: string;

  /** Allows registering your own plugins.
   * The callback will be called with the editor instance as the only argument durig initialization.
   * All other behavior needs to be implemented in the plugin itself using editor.on("eventname").
   * See https://xdsoft.net/jodit/examples/plugin/custom_plugin.html for an example.
   * Creating a plugin does NOT automatically add it to the toolbar, you need to do that yourself in 'options' or 'customizeOptions',
   * See https://xdsoft.net/jodit/examples/toolbar/custom_button.html for an example.
   */
  @Prop() plugins: {name: string, callback: (editor: Jodit) => void}[] = [];

  /** Customize the options before initializing the editor, will have all the default options merged with 'options' if passed.
   * This is called last after merging default options with your custom 'options' and just before initializing the editor.
  */
  @Prop() customizeOptions?: (options: Config) => Config;

  @Element() host!: HTMLDnnRichtextElement;
  
  @Watch("value")
  watchValueChanged(newValue: string) {
    if (this.editor !== null && this.editor !== undefined) {
      this.editor.value = decodeHtml(newValue);
    }
    this.setFormValue();
  }
  
  /** Fires when the value changed. */
  @Event() valueChange!: EventEmitter<string>;
  
  /** Fires during value input. */
  @Event() valueInput!: EventEmitter<string>;
  
  @AttachInternals() internals!: ElementInternals;
  
  @State() focused = false;

  private textArea!: HTMLTextAreaElement;
  private editor!: Jodit;
  private dnnDefaultOptions: Config = {
    ...Jodit.defaultOptions,
    useSplitMode: true,
  }
  
  componentDidLoad(){
    var mergedOptions : Partial<Config> = {
      ...this.dnnDefaultOptions,
      ...this.options,
      shadowRoot: this.host.shadowRoot,
    };

    if (this.customizeOptions != undefined){
      mergedOptions = this.customizeOptions(mergedOptions as Config);
    }
    this.plugins.forEach(plugin => Jodit.plugins.add(plugin.name, plugin.callback));
    this.editor = Jodit.make(this.textArea, (mergedOptions as DeepPartial<Config>));
    this.editor.value = decodeHtml(this.value ?? "");
    this.setFormValue();
    this.editor.e.on('input', () => this.valueInput.emit(this.editor.value));
    this.editor.e.on("focus", () => this.focused = true);
    this.editor.e.on("blur", () => {
      this.focused = false;
      this.valueChange.emit(this.editor.value);
      this.setFormValue();
    });
  }

  formResetCallback() {
    this.editor.value = decodeHtml(this.value || "");
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
          ref={el => this.textArea = el!}
          onFocus={() => this.focused = true}
          onBlur={() => this.focused = false}
        >
        </textarea>
      </Host>
    );
  }

}
