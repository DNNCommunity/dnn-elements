/** Color utility class with hsl and rgb converters
 * based on math at https://en.wikipedia.org/wiki/HSL_and_HSV
 * @copyright Copyright (c) .NET Foundation. All rights reserved.
 * @license MIT
 */
export declare class ColorInfo {
  private _hue;
  /** gets the color hue
   * @returns a number between 0 and 359, could contain decimals
   */
  get hue(): number;
  set hue(value: number);
  private _saturation;
  /** gets the color saturation
   * @returns a number between 0 and 1, could contain decimals
  */
  get saturation(): number;
  set saturation(value: number);
  private _lightness;
  /** gets the color lightness
   * @returns a number between 0 and 1, could contain decimals
   */
  get lightness(): number;
  set lightness(value: number);
  /** gets or sets the red component
   * @returns an integer between 0 and 255
  */
  get red(): number;
  set red(value: number);
  /** gets or sets the green component
   * @returns an integer between 0 and 255
   */
  get green(): number;
  set green(value: number);
  /** gets or sets the blue component
   * @returns an integer between 0 and 255
   */
  get blue(): number;
  set blue(value: number);
  /** gets or sets the hex color value, expresses as 6 hexadecimal characters.
   * @returns hex representation of the color
   */
  get hex(): string;
  set hex(value: string);
  /** gets white or black color that is a good oposite to the current color
   * @returns - "000000" or "FFFFFF"
   */
  get contrastColor(): "000000" | "FFFFFF";
  private getRGB;
  private setHSL;
  private getHex;
}
