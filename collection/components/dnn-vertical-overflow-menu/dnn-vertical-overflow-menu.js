import { Host, h } from '@stencil/core';
export class DnnVerticalOverflowMenu {
  constructor() {
    this.previousMenuWidth = 0;
    this.showDropdownButton = false;
    this.showDropdownMenu = false;
  }
  componentDidRender() {
    requestAnimationFrame(() => {
      this.moveItemsToDropDownIfNecessery();
      this.resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          if (entry.contentRect.width < this.previousMenuWidth) {
            this.moveItemsToDropDownIfNecessery();
          }
          if (this.previousMenuWidth > 0 && entry.contentRect.width > this.previousMenuWidth) {
            this.moveItemsToMenuIfPossible();
          }
          this.previousMenuWidth = entry.contentRect.width;
        }
      });
      this.resizeObserver.observe(this.element);
    });
  }
  moveItemsToDropDownIfNecessery() {
    const menuItems = Array.from(this.menu.querySelector("slot").assignedElements());
    const availableWidth = this.menu.getBoundingClientRect().width;
    let neededWidth = parseFloat(getComputedStyle(this.element).fontSize) * 2;
    menuItems.forEach(item => neededWidth += this.getFullWidth(item));
    neededWidth += (menuItems.length - 1) * parseFloat(getComputedStyle(this.element).fontSize);
    if (neededWidth > availableWidth) {
      this.showDropdownButton = true;
      var lastItem = menuItems[menuItems.length - 1];
      if (this.dropdown == undefined) {
        return;
      }
      lastItem.slot = "dropdown";
      this.moveItemsToDropDownIfNecessery();
    }
  }
  moveItemsToMenuIfPossible() {
    if (this.dropdown == undefined || !this.dropdown.hasChildNodes()) {
      return;
    }
    const menuItems = Array.from(this.menu.querySelector("slot").assignedElements());
    const availableWidth = this.menu.getBoundingClientRect().width;
    let neededWidth = parseFloat(getComputedStyle(this.element).fontSize) * 2;
    neededWidth += (menuItems.length - 1) * parseFloat(getComputedStyle(this.element).fontSize);
    menuItems.forEach(item => neededWidth += this.getFullWidth(item));
    const firstItem = this.dropdown.querySelector("slot").assignedElements()[0];
    if (firstItem != undefined) {
      neededWidth += this.getFullWidth(firstItem);
    }
    if (neededWidth < availableWidth) {
      if (firstItem != undefined) {
        firstItem.slot = "";
      }
      if (firstItem == undefined) {
        this.dropdown.classList.remove("visible");
        this.showDropdownMenu = false;
        this.showDropdownButton = false;
      }
    }
  }
  getFullWidth(item) {
    var width = item.getBoundingClientRect().width;
    var styles = getComputedStyle(item);
    width += parseFloat(styles.marginLeft);
    width += parseFloat(styles.marginRight);
    width += parseFloat(styles.paddingLeft);
    width += parseFloat(styles.paddingRight);
    return width;
  }
  toggleOverflowMenu() {
    this.showDropdownMenu = !this.showDropdownMenu;
    if (this.showDropdownMenu) {
      this.dropdown.classList.add("visible");
      let contentHeight = 0;
      const items = Array.from(this.dropdown.querySelector("slot").assignedElements());
      items.forEach(item => contentHeight += item.getBoundingClientRect().height);
      const emHeight = parseFloat(getComputedStyle(this.dropdown).fontSize);
      const gapsHeight = emHeight * (this.dropdown.children.length - 1) / 2;
      contentHeight += gapsHeight;
      const marginHeight = emHeight * 2;
      contentHeight += marginHeight;
      this.dropdown.style.height = `${contentHeight}px`;
      const dismissMenu = (e) => {
        const buttonRect = this.button.getBoundingClientRect();
        if (e.clientX < buttonRect.left ||
          e.clientX > buttonRect.right ||
          e.clientY < buttonRect.top ||
          e.clientY > buttonRect.bottom) {
          this.toggleOverflowMenu();
        }
        document.removeEventListener("click", dismissMenu);
      };
      setTimeout(() => {
        document.addEventListener("click", dismissMenu, false);
      }, 100);
    }
    else {
      this.dropdown.classList.remove("visible");
      this.dropdown.style.height = "0px";
    }
  }
  render() {
    return (h(Host, null, h("div", { class: "menu-container" }, h("div", { class: "menu", ref: el => this.menu = el }, h("slot", null)), this.showDropdownButton &&
      h("div", { class: "overflow" }, h("button", { ref: el => this.button = el, class: "icon", onClick: () => this.toggleOverflowMenu() }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000" }, h("path", { d: "M0 0h24v24H0z", fill: "none" }), h("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }))), h("div", { class: "dropdown", ref: el => this.dropdown = el }, h("slot", { name: "dropdown" }))))));
  }
  static get is() { return "dnn-vertical-overflow-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dnn-vertical-overflow-menu.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dnn-vertical-overflow-menu.css"]
    };
  }
  static get states() {
    return {
      "showDropdownButton": {},
      "showDropdownMenu": {}
    };
  }
  static get elementRef() { return "element"; }
}
//# sourceMappingURL=dnn-vertical-overflow-menu.js.map
