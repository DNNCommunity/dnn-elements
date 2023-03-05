import { Host, h } from '@stencil/core';
/**
 * @slot - The content of this node.
 * @slot children - The content nested under this node.
*/
export class DnnTreeviewItem {
  constructor() {
    this.expanded = false;
    this.hasChildren = false;
  }
  /** Watch expanded Prop */
  watchExpanded(expanded) {
    if (expanded) {
      this.expander.classList.add("expanded");
      this.collapsible.expanded = true;
      return;
    }
    this.expander.classList.remove("expanded");
    this.collapsible.expanded = false;
  }
  componentDidLoad() {
    requestAnimationFrame(() => {
      const child = this.childElement.children[0];
      const count = child.assignedElements().length;
      if (count > 0) {
        this.hasChildren = true;
      }
      if (this.expanded) {
        this.expander.classList.add("expanded");
        this.collapsible.expanded = false;
        setTimeout(() => {
          this.collapsible.expanded = true;
        }, 300);
      }
    });
  }
  toggleCollapse() {
    this.expanded = !this.expanded;
    if (this.expanded) {
      this.expander.classList.add("expanded");
      this.userExpanded.emit();
      return;
    }
    this.expander.classList.remove("expanded");
    this.userCollapsed.emit();
  }
  render() {
    return (h(Host, null, h("div", { class: "expander", ref: el => this.expander = el }, this.hasChildren &&
      h("button", { onClick: () => this.toggleCollapse() }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000" }, h("path", { d: "M10 17l5-5-5-5v10z" }), h("path", { d: "M0 24V0h24v24H0z", fill: "none" })))), h("div", { class: "item" }, h("div", { class: "item-slot" }, h("slot", null)), h("dnn-collapsible", { ref: el => this.collapsible = el, expanded: this.expanded }, h("div", { ref: el => this.childElement = el }, h("slot", { name: "children" }))))));
  }
  static get is() { return "dnn-treeview-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dnn-treeview-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dnn-treeview-item.css"]
    };
  }
  static get properties() {
    return {
      "expanded": {
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
          "text": "Defines if the current node is expanded."
        },
        "attribute": "expanded",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "hasChildren": {}
    };
  }
  static get events() {
    return [{
        "method": "userExpanded",
        "name": "userExpanded",
        "bubbles": false,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fires when the user expands a node."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "userCollapsed",
        "name": "userCollapsed",
        "bubbles": false,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fires when the user collapses a node."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "expanded",
        "methodName": "watchExpanded"
      }];
  }
}
//# sourceMappingURL=dnn-treeview-item.js.map
