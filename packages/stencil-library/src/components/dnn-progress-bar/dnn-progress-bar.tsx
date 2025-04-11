import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'dnn-progress-bar',
  styleUrl: 'dnn-progress-bar.scss',
  shadow: true,
})
export class DnnProgressBar {

  /** Sets to current value for the progress bar. */
  @Prop() value = 0;

  /** Sets the max value for the progress bar. */
  @Prop() max: number = 100;

  /** Determines if gradient colors will be used for progress bar. */
  @Prop() useGradient: boolean = false;

  private getProgressClass() {
    const classes: string[] = [];
    if (this.useGradient) {
      classes.push("use-gradient");
    }
    return classes.join(" ");
  }

  render() {
    return (
      <Host>
        <progress class={this.getProgressClass()} max={this.max} value={this.value}></progress>
      </Host>
    );
  }

}
