/** Color utility class with hsl and rgb converters
 * based on math at https://en.wikipedia.org/wiki/HSL_and_HSV
 * @copyright Copyright (c) .NET Foundation. All rights reserved.
 * @license MIT 
 */

export class ColorInfo{
    
    private _hue: number = 0;
    /** gets the color hue
     * @returns a number between 0 and 359, could contain decimals
     */
    get hue() { return this._hue; }
    set hue(value: number){
        if (value < 0) { value = 0; }
        if (value > 359) { value = 359; }
        this._hue = value;
    }

    private _saturation: number = 0;
    /** gets the color saturation
     * @returns a number between 0 and 100, could contain decimals
    */
    get saturation() { return this._saturation; }
    set saturation(value: number) {
        if (value < 0) { value = 0; }
        if (value > 100) { value = 100; }
        this._saturation = value;
    }

    private _lightness: number = 0;
    /** gets the color lightness
     * @returns a number between 0 and 100, could contain decimals
     */
    get lightness() { return this._lightness; }
    set lightness(value: number) {
        if (value < 0) { value = 0; }
        if (value > 100) { value = 100; }
        this._lightness = value;
    }

    /** gets or sets the red component 
     * @returns an integer between 0 and 255
    */
    get red() {
        return this.getRGB().red;
    }
    set red(value) {
        this.setHSL(value, this.green, this.blue);
    }

    /** gets or sets the green component
     * @returns an integer between 0 and 255
     */
    get green() {
        return this.getRGB().green;
    }
    set green(value: number) {
        this.setHSL(this.red, value, this.blue);
    }

    /** gets or sets the blue component
     * @returns an integer between 0 and 255
     */
    get blue() {
        return this.getRGB().blue;
    }
    set blue(value: number) {
        this.setHSL(this.red, this.green, value);
    }

    /** gets white or black color that is a good oposite to the current color
     * @returns - "000000" or "FFFFFF"
     */
    get contrastColor() {
        const brightness = (this.red*299 + this.green*587 + this.blue*114) / 1000
        if (brightness > 127){
            return "000000";
        }
        return "FFFFFF";
    }

    private getRGB() {
        const chroma = this.getChroma();
        // find the quandrant of the hue
        const quadrant = this._hue / 60;
        // calculate the offset from the quandrant center
        const offset = chroma * (1 - Math.abs(quadrant % 2 - 1));

        // Apply the chroma to the primary component and the offset to the 2nd most important component
        let r = 0, g = 0, b = 0;
        if (0 <= quadrant && quadrant < 1) {
            r = chroma; g = offset; // red to yellow
        } else if (1 <= quadrant && quadrant <= 2) {
            g = chroma; r = offset; // yellow to green
        } else if (2 <= quadrant && quadrant <= 3) {
            g = chroma; b = offset; // green to cyan
        } else if (3 <= quadrant && quadrant <= 4) {
            b = chroma; g = offset; // cyan to blue
        } else if (4 <= quadrant && quadrant <= 5) {
            b = chroma; r = offset; // blue to magenta
        } else if (5 <= quadrant && quadrant <= 6) {
            r = chroma; b = offset; // magenta to red
        }
        // calculate the bias to add to all channels to match the lightness
        const bias = (this._lightness / 100) - (chroma / 2);

        return {
            red: Math.round((r + bias) * 255),
            green: Math.round((g + bias) * 255),
            blue: Math.round((b + bias) * 255)
        }
    }

    private setHSL(red: number, green: number, blue: number) {
        // GENERAL DATA
        // all math is based on values from 0 to 1
        const r = red/255, g = green/255, b = blue/255;
        // we need to max, min and the difference between them to derive hsl
        const min = Math.min(r, g, b);
        const max = Math.max(r, g, b);
        const diff = max - min;
        let h = 0, s = 0, l = 0;

        // HUE
        if (diff === 0) { // neutral
            h = 0;
        } else if (max === r) { // red (magenta to yellow range)
            h = 60 * ((g - b) / diff);
        } else if (max === g) { // green (yellow to cyan range)
            h = 60 * (2 + ((b - r) / diff));
        } else if (max === b) { // blue (cyan to magenta range)
            h = 60 * (4 + ((r - g) / diff));
        }
        if (h < 0) { h = h + 360} // ensures positive hues only
        if (h > 359) { h = 359} // ensures we never return 360 for simplicity since it is the same as 0

        // LIGHTNESS
        l = (max + min) / 2;

        // SATURATION
        if (max === 0 || min === 1) { // pure black or white have no saturation
            s = 0;
        } else {
            s = (max - l) / (Math.min(l, 1 - l));
        }

        this._hue = h;
        this._saturation = s * 100;
        this._lightness =l * 100;
    }

    private getChroma() {
        return (1 - Math.abs((2 * (this._lightness / 100)) - 1));
    }
}