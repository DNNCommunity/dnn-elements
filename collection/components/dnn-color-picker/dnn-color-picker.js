/** Reusable DNN UI component to pick a color
 * @copyright Copyright (c) .NET Foundation. All rights reserved.
 * @license MIT
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h } from "@stencil/core";
import { ColorInfo } from '../../utilities/colorInfo';
import { Debounce } from "../../utilities/debounce";
/** Color Picker for Dnn */
export class DnnColorPicker {
  constructor() {
    this.handleSaturationLightnessMouseDown = (e) => {
      e.preventDefault();
      this.handleDragLightnessSaturation(e);
      window.addEventListener('mousemove', this.handleDragLightnessSaturation);
      window.addEventListener('mouseup', this.handleSaturationLightnessMouseUp);
    };
    this.handleDragLightnessSaturation = (e) => {
      const rect = this.saturationLightnessBox.getBoundingClientRect();
      let x = e.clientX - rect.left;
      if (x < 0) {
        x = 0;
      }
      if (x > rect.width) {
        x = rect.width;
      }
      x = x / rect.width;
      let y = e.clientY - rect.top;
      if (y < 0) {
        y = 0;
      }
      if (y > rect.height) {
        y = rect.height;
      }
      y = 1 - (y / rect.height);
      const newColor = new ColorInfo();
      newColor.hue = this.currentColor.hue;
      newColor.saturation = x;
      newColor.lightness = y;
      this.currentColor = newColor;
    };
    this.handleSaturationLightnessMouseUp = () => {
      window.removeEventListener('mousemove', this.handleDragLightnessSaturation);
      window.removeEventListener('mouseup', this.handleSaturationLightnessMouseUp);
    };
    this.handleHueMouseDown = (e) => {
      e.preventDefault();
      this.handleDragHue(e);
      window.addEventListener('mousemove', this.handleDragHue);
      window.addEventListener('mouseup', this.handleHueMouseUp);
    };
    this.handleHueMouseUp = () => {
      window.removeEventListener('mousemove', this.handleDragHue);
      window.removeEventListener('mouseup', this.handleHueMouseUp);
    };
    this.handleDragHue = (e) => {
      const rect = this.hueRange.getBoundingClientRect();
      let x = e.clientX - rect.left;
      if (x < 0) {
        x = 0;
      }
      if (x > rect.width) {
        x = rect.width;
      }
      x = x / rect.width * 360;
      const newColor = new ColorInfo();
      newColor.hue = x;
      newColor.saturation = this.currentColor.saturation;
      newColor.lightness = this.currentColor.lightness;
      this.currentColor = newColor;
    };
    this.handleComponentValueChange = (e, channel) => {
      let value = parseInt(e.target.value);
      if (isNaN(value)) {
        return;
      }
      const newColor = new ColorInfo();
      if (value < 0) {
        value = 0;
      }
      if (value > 255) {
        value = 255;
      }
      let r = this.currentColor.red;
      let g = this.currentColor.green;
      let b = this.currentColor.blue;
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
          break;
      }
      newColor.green = g;
      newColor.red = r;
      newColor.blue = b;
      this.currentColor = newColor;
    };
    this.handleHSLChange = (e, component) => {
      let value = parseInt(e.target.value);
      if (isNaN(value)) {
        return;
      }
      const newColor = new ColorInfo();
      if (value != null) {
        let h = this.currentColor.hue;
        let s = this.currentColor.saturation;
        let l = this.currentColor.lightness;
        switch (component) {
          case "hue":
            if (value < 0) {
              value = 0;
            }
            if (value > 359) {
              value = 0;
            }
            h = value;
            break;
          case "saturation":
            if (value < 0) {
              value = 0;
            }
            if (value > 100) {
              value = 100;
            }
            s = value / 100;
            break;
          case "lightness":
            if (value < 0) {
              value = 0;
            }
            if (value > 100) {
              value = 100;
            }
            l = value / 100;
            break;
          default:
            break;
        }
        newColor.hue = h;
        newColor.saturation = s;
        newColor.lightness = l;
        this.currentColor = newColor;
      }
    };
    this.handleSaturationLightnessKeyDown = (e) => {
      let newColor = new ColorInfo();
      newColor.hue = this.currentColor.hue;
      newColor.saturation = this.currentColor.saturation;
      newColor.lightness = this.currentColor.lightness;
      let value = 0.01;
      if (e.shiftKey) {
        value = 0.1;
      }
      switch (e.key) {
        case "ArrowUp":
          newColor.lightness += value;
          break;
        case "ArrowDown":
          newColor.lightness -= value;
          break;
        case "ArrowLeft":
          newColor.saturation -= value;
          break;
        case "ArrowRight":
          newColor.saturation += value;
        default:
          break;
      }
      this.currentColor = newColor;
    };
    this.handleHueKeyDown = (e) => {
      let newColor = new ColorInfo();
      newColor.hue = this.currentColor.hue;
      newColor.saturation = this.currentColor.saturation;
      newColor.lightness = this.currentColor.lightness;
      let value = 1;
      if (e.shiftKey) {
        value = 10;
      }
      switch (e.key) {
        case "ArrowLeft":
          newColor.hue -= value;
          break;
        case "ArrowRight":
          newColor.hue += value;
        default:
          break;
      }
      this.currentColor = newColor;
    };
    this.color = "FFFFFF";
    this.colorBoxHeight = "50%";
    this.currentColor = undefined;
    this.rgbDisplay = "flex";
    this.hslDisplay = "none";
    this.hexDisplay = "none";
  }
  colorChangedHandler(color) {
    this.colorChanged.emit(color);
  }
  handeCurrentColorChanged(newValue) {
    this.colorChangedHandler(newValue);
  }
  componentWillLoad() {
    this.handleHexChange(this.color);
  }
  componentDidLoad() {
    this.el.style.setProperty("--color-box-height", this.colorBoxHeight.toString());
  }
  getHex() {
    return this.getDoublet(this.currentColor.red) + this.getDoublet(this.currentColor.green) + this.getDoublet(this.currentColor.blue);
  }
  getContrast() {
    return this.currentColor.contrastColor;
  }
  getDoublet(value) {
    const valueString = value.toString(16).toUpperCase();
    if (valueString.length === 1) {
      return '0' + valueString;
    }
    return valueString;
  }
  handleHexChange(value) {
    const newColor = new ColorInfo();
    if (value.match(/^(?:[\da-f]{3}|[\da-f]{6})$/i).length > 0) {
      if (value.length === 3) {
        let expanded = value[0] + value[0] + value[1] + value[1] + value[2] + value[2];
        value = expanded;
      }
      newColor.red = parseInt(value.substr(0, 2), 16);
      newColor.green = parseInt(value.substr(2, 2), 16);
      newColor.blue = parseInt(value.substr(4, 2), 16);
    }
    else {
      newColor.red = this.currentColor.red;
      newColor.green = this.currentColor.green;
      newColor.blue = this.currentColor.blue;
    }
    this.currentColor = newColor;
  }
  switchColorMode(e) {
    switch (e.target.id) {
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
    const hue = this.currentColor.hue;
    const saturation = this.currentColor.saturation;
    const lightness = this.currentColor.lightness;
    const red = this.currentColor.red;
    const green = this.currentColor.green;
    const blue = this.currentColor.blue;
    return (h("div", { class: "dnn-color-picker" }, h("div", { class: "dnn-color-sliders" }, h("div", { class: "dnn-color-s-b", ref: (element) => this.saturationLightnessBox = element, style: { backgroundColor: `hsl(${hue},100%,50%)` }, onMouseDown: this.handleSaturationLightnessMouseDown.bind(this) }, h("button", { class: "dnn-s-b-picker", "aria-label": "Press up or down to adjust lightness, left or right to adjust saturation, hold shift to move by 10%", role: "slider", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuetext": `Saturation: ${Math.round(this.currentColor.saturation * 100)}%, Lightness: ${Math.round(this.currentColor.lightness * 100)}%`, style: {
        left: Math.round(saturation * 100) + "%",
        bottom: Math.round(lightness * 100) + "%"
      }, onKeyDown: (e) => this.handleSaturationLightnessKeyDown(e) })), h("div", { class: "dnn-color-bar" }, h("div", { class: "dnn-color-result", style: {
        backgroundColor: '#' + this.getHex(),
        boxShadow: "0 0 2px 1px " + "#" + this.getContrast()
      } }), h("div", { class: "dnn-color-hue", ref: (element) => this.hueRange = element, onMouseDown: this.handleHueMouseDown.bind(this) }, h("button", { class: "dnn-hue-picker", "aria-label": "Press left or right to adjust hue, hold shift to move by 10 degrees", role: "slider", "aria-valuemin": "0", "aria-valuemax": "359", "aria-valuenow": Math.round(hue), style: { left: (hue / 359 * 100).toString() + "%" }, onKeyDown: (e) => this.handleHueKeyDown(e) })))), h("div", { class: "dnn-color-fields" }, h("div", { class: "dnn-rgb-color-fields", style: { display: this.rgbDisplay } }, h("div", { class: "dnn-rgb-color-field" }, h("label", null, "R"), h("input", { type: "number", min: "0", max: "255", step: "1", class: "red", value: red, "aria-label": "red value", onChange: (e) => this.handleComponentValueChange(e, 'red') })), h("div", { class: "dnn-rgb-color-field" }, h("label", null, "G"), h("input", { type: "number", min: "0", max: "255", class: "green", value: green, "aria-label": "green value", onChange: (e) => this.handleComponentValueChange(e, 'green') })), h("div", { class: "dnn-rgb-color-field" }, h("label", null, "B"), h("input", { type: "number", min: "0", max: "255", class: "blue", value: blue, "aria-label": "blue value", onChange: (e) => this.handleComponentValueChange(e, 'blue') })), h("div", { class: "dnn-color-mode-switch" }, h("button", { id: "rgb-switch", onClick: this.switchColorMode.bind(this), "aria-label": "switch to hexadecimal value entry" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000" }, h("path", { d: "M0 0h24v24H0z", fill: "none" }), h("path", { d: "M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" }))))), h("div", { class: "dnn-hsl-color-fields", style: { display: this.hslDisplay } }, h("div", { class: "dnn-hsl-color-field" }, h("label", null, "H"), h("input", { type: "number", min: "0", max: "359", step: 1, value: Math.round(hue), "aria-label": "Hue", onChange: (e) => this.handleHSLChange(e, 'hue') })), h("div", { class: "dnn-hsl-color-field" }, h("label", null, "S"), h("input", { type: "number", min: "0", max: "100", step: 1, value: Math.round(saturation * 100), "aria-label": "Saturation", onChange: (e) => this.handleHSLChange(e, 'saturation') })), h("div", { class: "dnn-hsl-color-field" }, h("label", null, "L"), h("input", { type: "number", min: "0", max: "100", step: 1, value: Math.round(lightness * 100), "aria-label": "Lightness", onChange: (e) => this.handleHSLChange(e, 'lightness') })), h("div", { class: "dnn-color-mode-switch" }, h("button", { id: "hsl-switch", onClick: this.switchColorMode.bind(this), "aria-label": "Switch to red, green, blue entry mode" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000" }, h("path", { d: "M0 0h24v24H0z", fill: "none" }), h("path", { d: "M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" }))))), h("div", { class: "dnn-hex-color-fields", style: { display: this.hexDisplay } }, h("div", { class: "dnn-hex-color-field" }, h("label", null, "HEX"), h("div", { class: "hex-input" }, h("input", { type: "text", "aria-label": "Hexadecimal value", value: this.getHex(), onChange: e => this.handleHexChange(e.target.value) }), h("button", { class: "copy", "aria-label": "copy value" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000" }, h("path", { d: "M0 0h24v24H0z", fill: "none" }), h("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" }))))), h("div", { class: "dnn-color-mode-switch" }, h("button", { id: "hex-switch", onClick: this.switchColorMode.bind(this), "aria-label": "Switch to hue saturation lightness values" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000" }, h("path", { d: "M0 0h24v24H0z", fill: "none" }), h("path", { d: "M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" }))))))));
  }
  static get is() { return "dnn-color-picker"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dnn-color-picker.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dnn-color-picker.css"]
    };
  }
  static get properties() {
    return {
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Sets the initial color, must be a valid 8 character hexadecimal string without the # sign."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "\"FFFFFF\""
      },
      "colorBoxHeight": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "example",
              "text": "100% renders a perfect square"
            }],
          "text": "Sets the width-height ratio of the color picker saturation-lightness box."
        },
        "attribute": "color-box-height",
        "reflect": false,
        "defaultValue": "\"50%\""
      }
    };
  }
  static get states() {
    return {
      "currentColor": {},
      "rgbDisplay": {},
      "hslDisplay": {},
      "hexDisplay": {}
    };
  }
  static get events() {
    return [{
        "method": "colorChanged",
        "name": "colorChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "see",
              "text": ".. /../utilities/colorInfo.ts"
            }],
          "text": "Fires up when the color is changed and emits a ColorInfo object"
        },
        "complexType": {
          "original": "ColorInfo",
          "resolved": "ColorInfo",
          "references": {
            "ColorInfo": {
              "location": "import",
              "path": "../../utilities/colorInfo"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "currentColor",
        "methodName": "handeCurrentColorChanged"
      }];
  }
}
__decorate([
  Debounce(100)
], DnnColorPicker.prototype, "colorChangedHandler", null);
//# sourceMappingURL=dnn-color-picker.js.map
