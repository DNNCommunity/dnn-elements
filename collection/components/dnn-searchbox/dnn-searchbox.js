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
import { Host, h } from '@stencil/core';
import { Debounce } from '../../utilities/debounce';
export class DnnSearchbox {
  constructor() {
    this.placeholder = "";
    this.debounced = true;
    this.query = "";
  }
  fireQueryChanged() {
    if (this.debounced) {
      this.debouncedHandleQueryChanged();
    }
    else {
      this.handleQueryChanged();
    }
  }
  handleQueryChanged() {
    this.queryChanged.emit(this.query);
  }
  debouncedHandleQueryChanged() {
    this.handleQueryChanged();
  }
  render() {
    return (h(Host, null, h("input", { type: "text", value: this.query, placeholder: this.placeholder, onInput: e => this.query = e.target.value }), this.query !== "" ?
      h("button", { class: "svg clear", onClick: () => this.query = "" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000" }, h("path", { d: "M0 0h24v24H0z", fill: "none" }), h("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" })))
      :
        h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000" }, h("path", { d: "M0 0h24v24H0z", fill: "none" }), h("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }))));
  }
  static get is() { return "dnn-searchbox"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dnn-searchbox.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dnn-searchbox.css"]
    };
  }
  static get properties() {
    return {
      "placeholder": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Sets the field placeholder text."
        },
        "attribute": "placeholder",
        "reflect": false,
        "defaultValue": "\"\""
      },
      "debounced": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Debounces the queryChanged by 500ms."
        },
        "attribute": "debounced",
        "reflect": false,
        "defaultValue": "true"
      },
      "query": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Sets the query"
        },
        "attribute": "query",
        "reflect": false,
        "defaultValue": "\"\""
      }
    };
  }
  static get events() {
    return [{
        "method": "queryChanged",
        "name": "queryChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fires up each time the search query changes.\r\nThe data passed is the new query."
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "query",
        "methodName": "fireQueryChanged"
      }];
  }
}
__decorate([
  Debounce(500)
], DnnSearchbox.prototype, "debouncedHandleQueryChanged", null);
//# sourceMappingURL=dnn-searchbox.js.map
