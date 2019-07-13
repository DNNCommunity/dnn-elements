/** Reusable DNN UI component to pick a color
 * @copyright Copyright (c) .NET Foundation. All rights reserved.
 * @license MIT 
 */

import { Component, h, State } from "@stencil/core";
import { ColorInfo } from '../../utils/ColorInfo';

/** Color Picker for Dnn */
@Component({
    tag: 'dnn-color-picker',
    styleUrl: 'dnn-color-picker.scss',
    shadow: true
})
export class DnnColorPicker {

    @State() color: ColorInfo;

    componentWillLoad() {
        this.color = new ColorInfo();
    }

    getHex() {
       return this.getDoublet(this.color.red) + this.getDoublet(this.color.green) + this.getDoublet(this.color.blue);
    }

    getDoublet(value: number){
        const valueString = value.toString(16).toUpperCase();
        if (valueString.length === 1){
            return valueString + valueString;
        }
        return valueString;
    }

    handleSaturationLighnessDrag(e){
        console.log(e.target);
    }

    render() {
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
                    <div class="dnn-color-s-b" style={{backgroundColor: `hsl(${hue},100%,50%)`}}>
                        <button class="dnn-s-b-picker" 
                            draggable
                            onDragStart={this.handleSaturationLighnessDrag.bind(this)}
                            style={{
                                left: saturation + "%",
                                bottom: lightness + "%"
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
                    <input type="number" min="0" max="255" step="1" class="red" value={red}></input>
                    <input type="number" min="0" max="255" class="green" value={green}></input>
                    <input type="number" min="0" max="255" class="blue" value={blue}></input>
                    H: <input type="number" min="0" max="259" value={hue}></input>
                    S: <input type="number" min="0" max="100" value={saturation}></input>
                    L: <input type="number" min="0" max="100" value={lightness}></input>
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