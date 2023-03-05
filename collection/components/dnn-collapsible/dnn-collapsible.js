import { Host, h } from '@stencil/core';
export class DnnCollapsible {
  constructor() {
    this.expanded = false;
    this.transitionDuration = 150;
  }
  handleHeightChanged() {
    requestAnimationFrame(() => {
      this.updateSize();
    });
  }
  /**
   * Updates the component height, use to update after a slot content changes.
   */
  async updateSize() {
    if (this.expanded) {
      requestAnimationFrame(() => {
        this.container.style.maxHeight = `${this.container.scrollHeight}px`;
      });
      setTimeout(() => {
        this.container.style.maxHeight = "none";
      }, this.transitionDuration);
    }
  }
  handledExpandedChanged(expanded) {
    if (expanded) {
      this.updateSize();
    }
    else {
      requestAnimationFrame(() => {
        this.container.style.maxHeight = `${this.container.scrollHeight}px`;
        requestAnimationFrame(() => {
          this.container.style.maxHeight = "0px";
        });
      });
    }
    setTimeout(() => {
      requestAnimationFrame(() => {
        this.dnnCollapsibleHeightChanged.emit();
      });
    }, this.transitionDuration);
  }
  componentDidLoad() {
    this.container.style.transition = `max-height ${this.transitionDuration}ms ease-in-out`;
  }
  render() {
    return (h(Host, null, h("div", { id: "container", class: this.expanded && "expanded", ref: el => this.container = el, style: { transition: `max-height ${this.transitionDuration}ms ease-in-out` } }, h("slot", null))));
  }
  static get is() { return "dnn-collapsible"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dnn-collapsible.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dnn-collapsible.css"]
    };
  }
  static get properties() {
    return {
      "expanded": {
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
          "text": "Defines if the panel is expanded or not."
        },
        "attribute": "expanded",
        "reflect": true,
        "defaultValue": "false"
      },
      "transitionDuration": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Defines the transition time in ms, defaults to 150ms"
        },
        "attribute": "transition-duration",
        "reflect": false,
        "defaultValue": "150"
      }
    };
  }
  static get events() {
    return [{
        "method": "dnnCollapsibleHeightChanged",
        "name": "dnnCollapsibleHeightChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fires whenever the collapsible height has changed"
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "updateSize": {
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
          "text": "Updates the component height, use to update after a slot content changes.",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "expanded",
        "methodName": "handledExpandedChanged"
      }];
  }
  static get listeners() {
    return [{
        "name": "dnnCollapsibleHeightChanged",
        "method": "handleHeightChanged",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=dnn-collapsible.js.map
