/** Reusable DNN UI component to pick a color
 * @copyright Copyright (c) .NET Foundation. All rights reserved.
 * @license MIT
 */
import { EventEmitter } from "../../stencil-public-runtime";
import { ColorInfo } from '../../utilities/colorInfo';
/** Color Picker for Dnn */
export declare class DnnColorPicker {
  el: HTMLDnnColorPickerElement;
  /** Sets the initial color, must be a valid 8 character hexadecimal string without the # sign. */
  color: string;
  /** Sets the width-height ratio of the color picker saturation-lightness box.
   * @example 100% renders a perfect square
   */
  colorBoxHeight: string;
  currentColor: ColorInfo;
  rgbDisplay: string;
  hslDisplay: string;
  hexDisplay: string;
  /** Fires up when the color is changed and emits a ColorInfo object
   * @see ../../utilities/colorInfo.ts
  */
  colorChanged: EventEmitter<ColorInfo>;
  private colorChangedHandler;
  handeCurrentColorChanged(newValue: ColorInfo): void;
  private saturationLightnessBox?;
  private hueRange?;
  componentWillLoad(): void;
  componentDidLoad(): void;
  private getHex;
  private getContrast;
  private getDoublet;
  private handleSaturationLightnessMouseDown;
  private handleDragLightnessSaturation;
  private handleSaturationLightnessMouseUp;
  private handleHueMouseDown;
  private handleHueMouseUp;
  private handleDragHue;
  private handleComponentValueChange;
  private handleHSLChange;
  private handleHexChange;
  private switchColorMode;
  private handleSaturationLightnessKeyDown;
  private handleHueKeyDown;
  render(): any;
}
