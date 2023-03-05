import { Host, h } from '@stencil/core';
export class DnnSortIcon {
  constructor() {
    this.sortDirection = "none";
  }
  changeSort() {
    switch (this.sortDirection) {
      case "asc":
        this.sortDirection = "desc";
        break;
      case "desc":
        this.sortDirection = "asc";
        break;
      case "none":
        this.sortDirection = "asc";
        break;
      default:
        break;
    }
    this.sortChanged.emit(this.sortDirection);
  }
  render() {
    return (h(Host, null, h("button", { class: { "active": this.sortDirection != "none" }, onClick: () => this.changeSort() }, this.sortDirection == "none" &&
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 12 16" }, h("path", { d: "M 0 7 H 12 L 6 0 Z M 0 9 H 12 L 6 16 Z" })), this.sortDirection == "asc" &&
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 12 16" }, h("path", { d: "M 0 7 H 12 L 6 0 Z" })), this.sortDirection == "desc" &&
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 12 16" }, h("path", { d: "M 0 9 H 12 L 6 16 Z" })))));
  }
  static get is() { return "dnn-sort-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dnn-sort-icon.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dnn-sort-icon.css"]
    };
  }
  static get properties() {
    return {
      "sortDirection": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "\"asc\" | \"desc\" | \"none\"",
          "resolved": "\"asc\" | \"desc\" | \"none\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines the current sort direction"
        },
        "attribute": "sort-direction",
        "reflect": false,
        "defaultValue": "\"none\""
      }
    };
  }
  static get events() {
    return [{
        "method": "sortChanged",
        "name": "sortChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the sort is changed."
        },
        "complexType": {
          "original": "\"asc\"|\"desc\"|\"none\"",
          "resolved": "\"asc\" | \"desc\" | \"none\"",
          "references": {}
        }
      }];
  }
}
//# sourceMappingURL=dnn-sort-icon.js.map
