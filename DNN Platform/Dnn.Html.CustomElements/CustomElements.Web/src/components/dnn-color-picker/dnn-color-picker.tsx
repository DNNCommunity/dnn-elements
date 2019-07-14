/** Reusable DNN UI component to pick a color
 * @copyright Copyright (c) .NET Foundation. All rights reserved.
 * @license MIT 
 */

import { Component, h, State, Element } from "@stencil/core";
import { ColorInfo } from '../../utils/ColorInfo';

/** Color Picker for Dnn */
@Component({
    tag: 'dnn-color-picker',
    styleUrl: 'dnn-color-picker.scss',
    shadow: true
})
export class DnnColorPicker {

    private saturationLightnessBox?: HTMLDivElement;

    @Element() el: HTMLElement;

    @State() color: ColorInfo;
    @State() rgbDisplay: string = "flex";
    @State() hslDisplay: string = "none";
    @State() hexDisplay: string = "none";

    

    componentWillLoad() {
        this.color = new ColorInfo();
    }

    
    getHex() {
       return this.getDoublet(this.color.red) + this.getDoublet(this.color.green) + this.getDoublet(this.color.blue);
    }

    getDoublet(value: number){
        const valueString = value.toString(16).toUpperCase();
        if (valueString.length === 1){
            return '0' + valueString;
        }
        return valueString;
    }

    handleSaturationLightnessMouseDown = (e) => {
        e.preventDefault();
        this.handleDragLightnessSaturation(e);
        window.addEventListener('mousemove', this.handleDragLightnessSaturation);
        window.addEventListener('mouseup', this.handleSaturationLightnessMouseUp);
    }

    handleDragLightnessSaturation = (e) => {
        const rect = this.saturationLightnessBox.getBoundingClientRect();        

        let x = e.clientX - rect.left;        
        if (x < 0) { x = 0}
        if (x > rect.width) { x = rect.width}
        x = x/rect.width;

        let y = e.clientY - rect.top;
        if (y < 0) { y = 0}
        if (y > rect.height) { y = rect.height}
        y = 1 - (y/rect.height);

        const newColor = new ColorInfo();
        newColor.hue = this.color.hue;
        newColor.saturation = x;
        newColor.lightness = y;
        this.color = newColor;
    }

    handleSaturationLightnessMouseUp = () => {
        window.removeEventListener('mousemove', this.handleDragLightnessSaturation);
        window.removeEventListener('mouseup', this.handleSaturationLightnessMouseUp);
    }

    switchColorMode(e) {
        switch(e.target.id) {
            case "rgb-switch":
                this.rgbDisplay = "none";
                this.hslDisplay = "none";
                this.hexDisplay = "flex";
                break;
            case "hex-switch":
                this.rgbDisplay = "none";
                this.hslDisplay = "flex";
                this.hexDisplay = "none";
                break;
            case "hsl-switch":
                this.rgbDisplay = "flex";
                this.hslDisplay = "none";
                this.hexDisplay = "none";
                break;
            default:
                this.rgbDisplay = "flex";
                this.hslDisplay = "none";
                this.hexDisplay = "none";
            }
    }

    render() {
        console.log(this.color)
        const hue = this.color.hue;
        const saturation = this.color.saturation;
        const lightness = this.color.lightness;
        const red = this.color.red;
        const green = this.color.green;
        const blue = this.color.blue;
        const contrastColor = "#" + this.color.contrastColor;
        return (
            <div class="dnn-color-picker">
                <div class="dnn-color-sliders">
                    <div class="dnn-color-s-b" ref={(element) => this.saturationLightnessBox = element as HTMLDivElement}
                        style={{backgroundColor: `hsl(${hue},100%,50%)`}}
                        onMouseDown={this.handleSaturationLightnessMouseDown.bind(this)}
                    >
                        <button class="dnn-s-b-picker"                            
                            style={{
                                left: Math.round(saturation * 100)  + "%",
                                bottom: Math.round(lightness * 100)  + "%"
                            }}
                        />
                    </div>
                    <div class="dnn-color-hue">
                        <button class="dnn-hue-picker"
                            style={{left: (hue/359*100).toString() + "%"}}
                        />
                    </div>
                </div>
                <div class="dnn-color-fields">
                    <div class="dnn-rgb-color-fields" style={{display: this.rgbDisplay}}>
                        <div class="dnn-rgb-color-field">
                            <label>R</label>
                            <input type="number" min="0" max="255" step="1" class="red" value={red} />
                        </div>
                        <div class="dnn-rgb-color-field">
                            <label>G</label>
                            <input type="number" min="0" max="255" class="green" value={green} />
                        </div>
                        <div class="dnn-rgb-color-field">
                            <label>B</label>
                            <input type="number" min="0" max="255" class="blue" value={blue} />
                        </div>
                        <div class="dnn-color-mode-switch">
                            <button id="rgb-switch" onClick={this.switchColorMode.bind(this)}>&#8597;</button>
                        </div>
                    </div>
                    <div class="dnn-hsl-color-fields" style={{display: this.hslDisplay}}>
                        <div class="dnn-hsl-color-field">
                            <label>H</label>
                            <input type="number" min="0" max="259" value={hue} />
                        </div>
                        <div class="dnn-hsl-color-field">
                            <label>S</label>
                            <input type="number" min="0" max="100" value={saturation} />
                        </div>
                        <div class="dnn-hsl-color-field">
                            <label>L</label>
                            <input type="number" min="0" max="100" value={lightness} />
                        </div>
                        <div class="dnn-color-mode-switch">
                            <button id="hsl-switch" onClick={this.switchColorMode.bind(this)}>&#8597;</button>
                        </div>
                    </div>
                    <div class="dnn-hex-color-fields" style={{display: this.hexDisplay}}>
                        <div class="dnn-hex-color-field">
                            <label>HEX</label>
                            <input type="text" value={this.getHex()} />
                        </div>
                        <div class="dnn-color-mode-switch">
                            <button id="hex-switch" onClick={this.switchColorMode.bind(this)}>&#8597;</button>
                        </div>
                    </div>
                    <div class="string">
                        <input type="text" 
                            value={this.getHex()}
                            style={{backgroundColor: "#" + this.getHex(), color: contrastColor}}
                        />
                        <i class="symbol" style={{color: contrastColor}}>#</i>
                        <button class="copy" style={{color: contrastColor}}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="copy" class="svg-inline--fa fa-copy fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path></svg>
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}