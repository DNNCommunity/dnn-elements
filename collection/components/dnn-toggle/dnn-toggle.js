import { h, Host } from "@stencil/core";
export class DnnToggle {
  constructor() {
    this.checked = false;
    this.disabled = false;
  }
  checkedChanged(isChecked) {
    this.checkChanged.emit({ checked: isChecked });
  }
  render() {
    return (h(Host, null, h("button", { disabled: this.disabled, class: { 'checked': this.checked }, onClick: () => {
        if (!this.disabled) {
          this.checked = !this.checked;
        }
      } }, h("div", { class: "handle" }))));
  }
  static get is() { return "dnn-toggle"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dnn-toggle.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dnn-toggle.css"]
    };
  }
  static get properties() {
    return {
      "checked": {
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
          "text": "If 'true' the toggle is checked (on)."
        },
        "attribute": "checked",
        "reflect": false,
        "defaultValue": "false"
      },
      "disabled": {
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
          "text": "If 'true' the toggle is not be interacted with."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "checkChanged",
        "name": "checkChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fires when the toggle changed"
        },
        "complexType": {
          "original": "DnnToggleChangeEventDetail",
          "resolved": "DnnToggleChangeEventDetail",
          "references": {
            "DnnToggleChangeEventDetail": {
              "location": "import",
              "path": "./toggle-interface"
            }
          }
        }
      }];
  }
  static get elementRef() { return "element"; }
  static get watchers() {
    return [{
        "propName": "checked",
        "methodName": "checkedChanged"
      }];
  }
}
//# sourceMappingURL=dnn-toggle.js.map
