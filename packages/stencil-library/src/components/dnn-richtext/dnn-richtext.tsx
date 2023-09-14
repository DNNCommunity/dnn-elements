import { Component, Host, h, Prop, Event, EventEmitter, Watch } from '@stencil/core';
import { Jodit } from "jodit";
import type { Config } from "jodit/types/config";
import { decodeHtml } from '../../utilities/stringUtilities';

@Component({
  tag: 'dnn-richtext',
  styleUrl: 'dnn-richtext.scss',
  shadow: false,
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
  
  @Watch("value")
  watchValueChanged(newValue: string) {
    if (this.editor) {
      this.editor.value = decodeHtml(newValue);
    }
  }

  /** Fires when the value changed. */
  @Event() valueChange: EventEmitter<string>;

  /** Fires during value input. */
  @Event() valueInput: EventEmitter<string>;

  componentDidLoad(){
    var mergedOptions = {
      ...this.dnnDefaultOptions,
      ...this.options,
    };
    this.editor = Jodit.make(this.textArea, mergedOptions);
    this.editor.value = decodeHtml(this.value);
    this.editor.e.on('change', newValue => this.valueChange.emit(newValue));
    this.editor.e.on('input', newValue => this.valueInput.emit(newValue));
  }

  render() {
    return (
      <Host>
        <textarea ref={el => this.textArea = el}>
        </textarea>
      </Host>
    );
  }

}
