/** Reusable DNN UI component to pick a color
 * @copyright Copyright (c) .NET Foundation. All rights reserved.
 * @license MIT 
 */

import { Component, h, State, Element, Prop } from "@stencil/core";
import { ColorInfo } from '../../utils/ColorInfo';

/** Color Picker for Dnn */
@Component({
    tag: 'dnn-color-picker',
    styleUrl: 'dnn-color-picker.scss',
    shadow: true
})
export class DnnColorPicker {

    @Element() el: HTMLElement;

    private saturationLightnessBox?: HTMLDivElement;
    private hueRange?: HTMLDivElement;
    private something: string;

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

    handleHueMouseDown = (e) => {
        e.preventDefault();
        this.handleDragHue(e);
        window.addEventListener('mousemove', this.handleDragHue);
        window.addEventListener('mouseup', this.handleHueMouseUp);        
    }

    handleHueMouseUp = () => {
        window.removeEventListener('mousemove', this.handleDragHue);
        window.removeEventListener('mouseup', this.handleHueMouseUp); 
    }

    handleDragHue = (e) => {
        const rect = this.hueRange.getBoundingClientRect();        

        let x = e.clientX - rect.left;
        if (x < 0) { x = 0}
        if (x > rect.width) { x = rect.width}
        x = x/rect.width*360;        

        const newColor = new ColorInfo();
        newColor.hue = x;
        newColor.saturation = this.color.saturation;
        newColor.lightness = this.color.lightness;
        this.color = newColor;
    }

    handleComponentValueChange = (e, channel) => {
        let value = parseInt(e.target.value);
        if (isNaN(value)) { return }
        const newColor = new ColorInfo();
        if (value){
            if (value < 0) { value = 0; }
            if (value > 255) { value = 255; }
        }
        let r = this.color.red;
        let g = this.color.green;
        let b = this.color.blue;
        switch (channel) {
            case 'red':
                r = value;
                break;
            case 'green':
                g = value;
                break;
            case 'blue':
                b = value;
                break;
            default:
                this.rgbDisplay = "flex";
                this.hslDisplay = "none";
                this.hexDisplay = "none";
                break;
        }
        newColor.green = g;
        newColor.red = r;
        newColor.blue = b;
        this.color = newColor;
    }

    handleHSLChange = (e, component) => {        
        let value = parseInt(e.target.value);
        if (isNaN(value)) {return}
        const newColor = new ColorInfo();
        if (value) {            
            let h = this.color.hue;
            let s = this.color.saturation;
            let l = this.color.lightness;
            switch (component) {
                case "hue":
                    if (value < 0) { value = 0}
                    if (value > 359) { value = 0}
                    h = value;
                    break;
                case "saturation":
                    if (value < 0) { value = 0}
                    if (value > 100) { value = 100}
                    s = value / 100;
                    break;
                case "lightness":
                    if (value < 0) { value = 0}
                    if (value > 100) { value = 100}
                    l = value / 100;
                    break;            
                default:
                    break;                
            }
            newColor.hue = h;
            newColor.saturation = s;
            newColor.lightness = l;
            this.color = newColor;
        }
    }

    handleHexChange(e){
        let value: string = e.target.value;
        const newColor = new ColorInfo();
        if (value.match(/^(?:[\da-f]{3}|[\da-f]{6})$/i)) {
            if (value.length === 3){
                let expanded = value[0] + value[0] + value[1] + value[1] + value[2] + value [2];
                value = expanded;
            }
            newColor.red = parseInt(value.substr(0,2), 16);
            newColor.green = parseInt(value.substr(2,2), 16);
            newColor.blue = parseInt(value.substr(4,2), 16);
        }
        else{
            newColor.red = this.color.red;
            newColor.green = this.color.green;
            newColor.blue = this.color.blue;
        }
        this.color = newColor;
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
                    <div class="dnn-color-bar">
                        <div class="dnn-color-result" style={{backgroundColor: '#' + this.getHex()}}></div>
                        <div class="dnn-color-hue">
                            <button class="dnn-hue-picker"
                                style={{left: (hue/359*100).toString() + "%"}}
                            />
                        </div>
                    </div>
                </div>
                <div class="dnn-color-fields">
                    <input type="number" min="0" max="255" step="1" class="red" value={red} 
                        onChange={(e) => this.handleComponentValueChange(e, 'red')}
                    />
                    <input type="number" min="0" max="255" step="1" class="green" value={green} 
                        onChange={(e) => this.handleComponentValueChange(e, 'green')}
                    />
                    <input type="number" min="0" max="255" step="1" class="blue" value={blue} 
                        onChange={(e) => this.handleComponentValueChange(e, 'blue')}
                    />
                    H: <input type="number" min="0" max="359" value={Math.round(hue)}                         
                        onChange={(e) => this.handleHSLChange(e, 'hue')}
                    />
                    S: <input type="number" min="0" max="100" value={Math.round(saturation*100)} 
                        onChange={(e) => this.handleHSLChange(e, 'saturation')}
                    />
                    L: <input type="number" min="0" max="100" value={Math.round(lightness*100)} 
                        onChange={(e) => this.handleHSLChange(e, 'lightness')}
                    />
                    <div class="string">
                        <input type="text" 
                            value={this.getHex()}
                            style={{backgroundColor: "#" + this.getHex(), color: contrastColor}}
                            onChange={(e) => this.handleHexChange(e)}
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