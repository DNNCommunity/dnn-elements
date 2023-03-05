import { Host, h } from "@stencil/core";
/** Represents a single tab and must be used inside a dnn-tabs element. */
export class DnnTab {
  constructor() {
    this.tabTitle = undefined;
    this.visible = false;
  }
  /** Shows the tab. */
  async show() {
    this.visible = true;
  }
  /** Hides the modal */
  async hide() {
    this.visible = false;
  }
  render() {
    return (h(Host, null, this.visible &&
      h("slot", null)));
  }
  static get is() { return "dnn-tab"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dnn-tab.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dnn-tab.css"]
    };
  }
  static get properties() {
    return {
      "tabTitle": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines the tab title."
        },
        "attribute": "tab-title",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "visible": {}
    };
  }
  static get methods() {
    return {
      "show": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Shows the tab.",
          "tags": []
        }
      },
      "hide": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Hides the modal",
          "tags": []
        }
      }
    };
  }
}
//# sourceMappingURL=dnn-tab.js.map
