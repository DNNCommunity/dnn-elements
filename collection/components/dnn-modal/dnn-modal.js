import { Host, h } from '@stencil/core';
export class DnnModal {
  constructor() {
    this.backdropDismiss = true;
    this.closeText = "Close modal";
    this.showCloseButton = true;
    this.visible = false;
  }
  /**
   * Shows the modal
   */
  async show() {
    this.visible = true;
  }
  /**
   * Hides the modal
   */
  async hide() {
    this.visible = false;
  }
  handleDismiss() {
    this.visible = false;
    this.dismissed.emit();
  }
  handleBackdropClick(e) {
    const element = e.target;
    if (element.id === "backdrop" && this.backdropDismiss) {
      this.handleDismiss();
    }
  }
  render() {
    return (h(Host, null, h("div", { id: "backdrop", class: this.visible ? 'overlay visible' : 'overlay', onClick: e => this.handleBackdropClick(e) }, h("div", { class: "modal" }, this.showCloseButton &&
      h("button", { class: "close", "aria-label": this.closeText, onClick: () => this.handleDismiss() }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000" }, h("path", { d: "M0 0h24v24H0z", fill: "none" }), h("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" }))), h("div", { class: "content" }, h("slot", null))))));
  }
  static get is() { return "dnn-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dnn-modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dnn-modal.css"]
    };
  }
  static get properties() {
    return {
      "backdropDismiss": {
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
          "text": "Pass false to remove the backdrop click auto-dismiss feature."
        },
        "attribute": "backdrop-dismiss",
        "reflect": false,
        "defaultValue": "true"
      },
      "closeText": {
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
          "text": "Optionally pass the aria-label text for the close button.\r\nDefaults to \"Close modal\" if not provided."
        },
        "attribute": "close-text",
        "reflect": false,
        "defaultValue": "\"Close modal\""
      },
      "showCloseButton": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Optionally you can pass false to not show the close button.\r\nIf you decide to do so, you should either not also prevent dismissal by clicking the backdrop\r\nor provide your own dismissal logic in the modal content."
        },
        "attribute": "show-close-button",
        "reflect": false,
        "defaultValue": "true"
      },
      "visible": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Reflects the visible state of the modal."
        },
        "attribute": "visible",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "dismissed",
        "name": "dismissed",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fires when the modal is dismissed."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
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
          "text": "Shows the modal",
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
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=dnn-modal.js.map
