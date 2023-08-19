import { Component, Host, h, Prop } from '@stencil/core';
import { Jodit } from "jodit";
import { Config } from "jodit/types/config";
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
    allowResizeY: true,
  }

  componentDidLoad(){
    var mergedOptions = {...this.dnnDefaultOptions, ...this.options};
    this.editor = Jodit.make(this.textArea, mergedOptions);
    this.editor.value = "<p>This is a test</p>"
  }

  render() {
    return (
      <Host>
        <textarea ref={el => this.textArea = el}>
          <slot></slot>
        </textarea>
      </Host>
    );
  }

}
