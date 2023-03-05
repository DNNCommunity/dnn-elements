import { Host, h } from '@stencil/core';
import { getMovementFromEvent } from "../../utilities/mouseUtilities";
/**
 * @slot default - The split divider control you want to use.
 * @slot left - The content of the left pane.
 * @slot right - The content of the right pane.
 */
export class DnnVerticalSplitview {
  constructor() {
    this.splitterWidth = 16;
    this.splitWidthPercentage = 30;
    this.leftWidth = 0;
    this.rightWidth = 0;
  }
  /** Sets the width percentage of the divider */
  async setSplitWidthPercentage(newWidth) {
    const panes = this.element.shadowRoot.querySelectorAll(".pane");
    requestAnimationFrame(() => {
      panes.forEach(pane => pane.classList.add("transition"));
      this.splitter.classList.add("transition");
      requestAnimationFrame(() => {
        const fullWidth = this.element.getBoundingClientRect().width;
        let newLeft = fullWidth * newWidth / 100;
        if (newLeft < 0) {
          newLeft = 0;
        }
        if (newLeft > fullWidth) {
          newLeft = fullWidth;
        }
        this.leftWidth = newLeft;
        this.rightWidth = fullWidth - newLeft;
        setTimeout(() => {
          panes.forEach(pane => pane.classList.remove("transition"));
          this.splitter.classList.remove("transition");
        }, 300);
      });
    });
  }
  /** Gets the current divider position percentage. */
  async getSplitWidthPercentage() {
    const fullWidth = this.element.getBoundingClientRect().width;
    return this.leftWidth / fullWidth;
  }
  componentDidLoad() {
    requestAnimationFrame(() => {
      this.resizeObserver = new ResizeObserver(() => {
        const fullWidth = this.element.getBoundingClientRect().width;
        this.leftWidth = fullWidth * this.splitWidthPercentage / 100;
        this.rightWidth = fullWidth - this.leftWidth;
        this.widthChanged.emit(this.splitWidthPercentage);
      });
      this.resizeObserver.observe(this.element);
    });
  }
  handleMouseDown(event) {
    event.preventDefault();
    const handleDrag = (ev) => {
      requestAnimationFrame(() => {
        let fullWidth = this.element.getBoundingClientRect().width;
        let { movementX } = getMovementFromEvent(ev, this.previousTouch);
        let newLeft = this.leftWidth + movementX;
        if (newLeft < 0) {
          newLeft = 0;
        }
        if (newLeft > fullWidth) {
          newLeft = fullWidth;
        }
        this.leftWidth = newLeft;
        this.rightWidth = fullWidth - newLeft;
        this.splitWidthPercentage = this.leftWidth / fullWidth * 100;
      });
    };
    const handleDragFinished = () => {
      document.removeEventListener("mousemove", handleDrag);
      document.removeEventListener("touchmove", handleDrag);
      const fullWidth = this.element.getBoundingClientRect().width;
      const newPercentage = this.leftWidth / fullWidth * 100;
      this.widthChanged.emit(newPercentage);
    };
    document.addEventListener("mouseup", handleDragFinished);
    document.addEventListener("touchend", handleDragFinished);
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("touchmove", handleDrag);
  }
  handleKeyDown(e) {
    let movementX = 0;
    switch (e.key) {
      case "ArrowLeft":
        movementX = -10;
        break;
      case "ArrowRight":
        movementX = 10;
        break;
      default:
        return;
    }
    if (e.shiftKey) {
      movementX = movementX * 10;
    }
    const fullWidth = this.element.getBoundingClientRect().width;
    let newLeft = this.leftWidth + movementX;
    if (newLeft < 0) {
      newLeft = 0;
    }
    if (newLeft > fullWidth) {
      newLeft = fullWidth;
    }
    this.leftWidth = newLeft;
    this.rightWidth = fullWidth - this.leftWidth;
  }
  render() {
    return (h(Host, null, h("div", { class: "left pane", style: {
        width: `${this.leftWidth}px`,
      } }, h("slot", { name: "left" })), h("button", { onMouseDown: e => this.handleMouseDown(e), onTouchStart: e => this.handleMouseDown(e), onKeyDown: e => this.handleKeyDown(e), ref: el => this.splitter = el, style: {
        minWidth: `${this.splitterWidth.toString()}px`,
        left: `${this.leftWidth - 2}px`,
      } }, h("slot", null)), h("div", { class: "right pane", style: {
        width: `${this.rightWidth}px`,
      } }, h("slot", { name: "right" }))));
  }
  static get is() { return "dnn-vertical-splitview"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dnn-vertical-splitview.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dnn-vertical-splitview.css"]
    };
  }
  static get properties() {
    return {
      "splitterWidth": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The width of the splitter area."
        },
        "attribute": "splitter-width",
        "reflect": false,
        "defaultValue": "16"
      },
      "splitWidthPercentage": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The percentage position of the splitter in the container."
        },
        "attribute": "split-width-percentage",
        "reflect": false,
        "defaultValue": "30"
      }
    };
  }
  static get states() {
    return {
      "leftWidth": {},
      "rightWidth": {}
    };
  }
  static get events() {
    return [{
        "method": "widthChanged",
        "name": "widthChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fires when the width of the divider changes."
        },
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "setSplitWidthPercentage": {
        "complexType": {
          "signature": "(newWidth: number) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Sets the width percentage of the divider",
          "tags": []
        }
      },
      "getSplitWidthPercentage": {
        "complexType": {
          "signature": "() => Promise<number>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<number>"
        },
        "docs": {
          "text": "Gets the current divider position percentage.",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "element"; }
}
//# sourceMappingURL=dnn-vertical-splitview.js.map
