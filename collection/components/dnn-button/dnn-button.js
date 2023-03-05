import { Host, h } from '@stencil/core';
/**
 * @slot Content of the button
 */
export class DnnButton {
  constructor() {
    this.type = 'primary';
    this.reversed = false;
    this.size = 'normal';
    this.confirm = false;
    this.confirmYesText = "Yes";
    this.confirmNoText = "No";
    this.confirmMessage = "Are you sure ?";
    this.disabled = false;
    this.modalVisible = false;
  }
  componentDidLoad() {
    this.modal = this.el.shadowRoot.querySelector('dnn-modal');
  }
  handleConfirm() {
    this.modal.hide();
    this.modalVisible = false;
    this.confirmed.emit();
  }
  handleCancel() {
    this.modal.hide();
    this.modalVisible = false;
    this.canceled.emit();
  }
  handleClick() {
    if (this.confirm && !this.modalVisible) {
      this.modal.show();
      this.modalVisible = true;
    }
  }
  getElementClasses() {
    const classes = [];
    classes.push(this.type);
    if (this.reversed) {
      classes.push('reversed');
    }
    if (this.size !== 'normal') {
      classes.push(this.size);
    }
    return classes.join(' ');
  }
  render() {
    return (h(Host, { class: this.getElementClasses(), disabled: this.disabled, style: { 'pointer-events': this.disabled ? 'none' : 'all' } }, h("button", { class: "button", onClick: () => this.handleClick(), disabled: this.disabled }, h("slot", null)), this.confirm &&
      h("dnn-modal", { showCloseButton: false, backdropDismiss: false }, h("p", null, this.confirmMessage), h("div", { style: {
          display: 'flex',
          justifyContent: 'flex-end'
        } }, h("dnn-button", { type: 'primary', style: { margin: '5px' }, onClick: () => this.handleConfirm() }, this.confirmYesText), h("dnn-button", { type: 'secondary', style: { margin: '5px' }, onClick: () => this.handleCancel() }, this.confirmNoText)))));
  }
  static get is() { return "dnn-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dnn-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dnn-button.css"]
    };
  }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'primary' | 'secondary' | 'tertiary'",
          "resolved": "\"primary\" | \"secondary\" | \"tertiary\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Optional button style,\r\ncan be either primary, secondary or tertiary and defaults to primary if not specified"
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'primary'"
      },
      "reversed": {
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
          "text": "Optionally reverses the button style."
        },
        "attribute": "reversed",
        "reflect": false,
        "defaultValue": "false"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'small' | 'normal' | 'large'",
          "resolved": "\"large\" | \"normal\" | \"small\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Optionally sets the button size, small normal or large, defaults to normal"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'normal'"
      },
      "confirm": {
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
          "text": "Optionally add a confirmation dialog before firing the action."
        },
        "attribute": "confirm",
        "reflect": false,
        "defaultValue": "false"
      },
      "confirmYesText": {
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
          "text": "The text of the yes button for confirmation."
        },
        "attribute": "confirm-yes-text",
        "reflect": false,
        "defaultValue": "\"Yes\""
      },
      "confirmNoText": {
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
          "text": "The text of the no button for confirmation."
        },
        "attribute": "confirm-no-text",
        "reflect": false,
        "defaultValue": "\"No\""
      },
      "confirmMessage": {
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
          "text": "The text of the confirmation message;"
        },
        "attribute": "confirm-message",
        "reflect": false,
        "defaultValue": "\"Are you sure ?\""
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
          "text": "Disables the button"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "modalVisible": {}
    };
  }
  static get events() {
    return [{
        "method": "confirmed",
        "name": "confirmed",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fires when confirm is true and the user confirms the action."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "canceled",
        "name": "canceled",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fires when confirm is true and the user cancels the action."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=dnn-button.js.map
