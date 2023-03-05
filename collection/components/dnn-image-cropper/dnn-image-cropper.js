import { Host, h } from '@stencil/core';
import { CornerType } from './CornerType';
import { getMovementFromEvent } from "../../utilities/mouseUtilities";
/**
 * Allows cropping an image in-browser with the option to enforce a specific final size.
 * All computation happens in the browser and the final image is emmited
 * in an event that has a data-url of the image.
 */
export class DnnImageCropper {
  constructor() {
    this.handleCropMouseDown = (event) => {
      event.stopPropagation();
      event.preventDefault();
      const element = event.target;
      const className = element.classList[0];
      document.addEventListener("mouseup", this.handleImageCropFinished, false);
      document.addEventListener("touchend", this.handleImageCropFinished, false);
      switch (className) {
        case "crop":
          document.addEventListener("mousemove", this.handleCropDrag, false);
          document.addEventListener("touchmove", this.handleCropDrag, false);
          document.addEventListener("mouseup", () => document.removeEventListener("mousemove", this.handleCropDrag));
          document.addEventListener("touchend", () => document.removeEventListener("touchmove", this.handleCropDrag));
          break;
        case "nw":
          document.addEventListener("mousemove", this.handleNwMouseMove, false);
          document.addEventListener("touchmove", this.handleNwMouseMove, false);
          document.addEventListener("mouseup", () => document.removeEventListener("mousemove", this.handleNwMouseMove));
          document.addEventListener("touchend", () => document.removeEventListener("touchmove", this.handleNwMouseMove));
          break;
        case "ne":
          document.addEventListener("mousemove", this.handleNeMouseMove, false);
          document.addEventListener("touchmove", this.handleNeMouseMove, false);
          document.addEventListener("mouseup", () => document.removeEventListener("mousemove", this.handleNeMouseMove));
          document.addEventListener("touchend", () => document.removeEventListener("touchmove", this.handleNeMouseMove));
          break;
        case "se":
          document.addEventListener("mousemove", this.handleSeMouseMove, false);
          document.addEventListener("touchmove", this.handleSeMouseMove, false);
          document.addEventListener("mouseup", () => document.removeEventListener("mousemove", this.handleSeMouseMove));
          document.addEventListener("touchend", () => document.removeEventListener("touchmove", this.handleSeMouseMove));
          break;
        case "sw":
          document.addEventListener("mousemove", this.handleSwMouseMove, false);
          document.addEventListener("touchmove", this.handleSwMouseMove, false);
          document.addEventListener("mouseup", () => document.removeEventListener("mousemove", this.handleSwMouseMove));
          document.addEventListener("touchend", () => document.removeEventListener("touchmove", this.handleSwMouseMove));
          break;
        default:
          break;
      }
    };
    this.handleImageCropFinished = (_ev) => {
      this.emitImage();
      document.removeEventListener("mouseup", this.handleImageCropFinished);
      this.previousTouch = undefined;
    };
    this.handleNwMouseMove = (event) => {
      this.handleCornerDrag(event, CornerType.nw);
    };
    this.handleNeMouseMove = (event) => {
      this.handleCornerDrag(event, CornerType.ne);
    };
    this.handleSeMouseMove = (event) => {
      this.handleCornerDrag(event, CornerType.se);
    };
    this.handleSwMouseMove = (event) => {
      this.handleCornerDrag(event, CornerType.sw);
    };
    this.handleCornerDrag = (event, corner) => {
      if (!this.isMouseStillInTarget(event)) {
        return;
      }
      let { left, top } = this.getCornerLeftTop(corner);
      let newWidth = 0;
      let newHeight = 0;
      let orientation = "horizontal";
      const wantedRatio = this.width / this.height;
      const cropRect = this.crop.getBoundingClientRect();
      const imageRect = this.image.getBoundingClientRect();
      let { movementX, movementY } = getMovementFromEvent(event, this.previousTouch);
      if (Math.abs(movementX) < Math.abs(movementY)) {
        orientation = "vertical";
      }
      if (orientation == "horizontal") {
        switch (corner) {
          case CornerType.nw:
          case CornerType.sw:
            newWidth = cropRect.width - movementX;
            newHeight = newWidth / wantedRatio;
            break;
          case CornerType.ne:
          case CornerType.se:
            newWidth = cropRect.width + movementX;
            newHeight = newWidth / wantedRatio;
            break;
          default:
            break;
        }
      }
      else {
        switch (corner) {
          case CornerType.nw:
          case CornerType.ne:
            newHeight = cropRect.height - movementY;
            newWidth = newHeight * wantedRatio;
            break;
          case CornerType.se:
          case CornerType.sw:
            newHeight = cropRect.height + movementY;
            newWidth = newHeight * wantedRatio;
            break;
          default:
            break;
        }
      }
      switch (corner) {
        case CornerType.ne:
        case CornerType.nw:
          const topOffset = cropRect.height - newHeight;
          top = this.crop.offsetTop + topOffset;
        default:
          break;
      }
      switch (corner) {
        case CornerType.nw:
        case CornerType.sw:
          const leftOffset = cropRect.width - newWidth;
          left = this.crop.offsetLeft + leftOffset;
          if (left < 0)
            left = 0;
          if (left > imageRect.width)
            left = imageRect.width;
          if (top < 0)
            top = 0;
          if (top > imageRect.height)
            top = imageRect.height;
          if (left + newWidth > imageRect.width)
            newWidth = imageRect.width - left;
          if (top + newHeight > imageRect.height)
            newHeight = imageRect.height - top;
          break;
        case CornerType.ne:
        case CornerType.se:
          if (top < 0)
            top = 0;
          if (top > imageRect.height)
            top = imageRect.height;
          if (left + newWidth > imageRect.width)
            newWidth = imageRect.width - left;
          if (top + newHeight > imageRect.height)
            newHeight = imageRect.height - top;
          break;
        default:
          break;
      }
      if (newWidth / newHeight != wantedRatio) {
        return;
      }
      if (this.preventUndersized) {
        const zoomRatio = this.image.width / this.image.naturalWidth;
        if (newWidth / zoomRatio < this.width || newHeight / zoomRatio < this.height) {
          return;
        }
      }
      switch (corner) {
        case CornerType.ne:
          this.crop.style.top = `${top}px`;
          this.crop.style.width = `${newWidth}px`;
          this.crop.style.height = `${newHeight}px`;
          break;
        case CornerType.nw:
          this.crop.style.left = `${left}px`;
          this.crop.style.top = `${top}px`;
          this.crop.style.width = `${newWidth}px`;
          this.crop.style.height = `${newHeight}px`;
          break;
        case CornerType.se:
          this.crop.style.width = `${newWidth}px`;
          this.crop.style.height = `${newHeight}px`;
          break;
        case CornerType.sw:
          this.crop.style.left = `${left}px`;
          this.crop.style.width = `${newWidth}px`;
          this.crop.style.height = `${newHeight}px`;
          break;
        default:
          break;
      }
    };
    this.handleCropDrag = (ev) => {
      if (!this.isMouseStillInTarget(ev)) {
        return;
      }
      let { movementX, movementY } = getMovementFromEvent(ev, this.previousTouch);
      let newLeft = this.crop.offsetLeft + movementX;
      let newTop = this.crop.offsetTop + movementY;
      var imageRect = this.image.getBoundingClientRect();
      var cropRect = this.crop.getBoundingClientRect();
      if (newLeft < 0) {
        newLeft = 0;
      }
      if (newTop < 0) {
        newTop = 0;
      }
      if (newLeft + cropRect.width > imageRect.width) {
        newLeft = this.crop.offsetLeft;
      }
      if (newTop + cropRect.height > imageRect.height) {
        newTop = this.crop.offsetTop;
      }
      this.crop.style.left = newLeft + "px";
      this.crop.style.top = newTop + "px";
    };
    this.width = 600;
    this.height = 600;
    this.resx = {
      capture: "Capture",
      dragAndDropFile: "Drag and drop an image",
      or: "or",
      takePicture: "Take a picture",
      uploadFile: "Upload an image",
      imageTooSmall: "The image you are attempting to upload does not meet the minimum size requirement of {width} pixels by {height} pixels. Please upload a larger image.",
      modalCloseText: "Close",
    };
    this.quality = 0.8;
    this.preventUndersized = false;
    this.view = undefined;
  }
  componentDidLoad() {
    requestAnimationFrame(() => {
      this.setView("noPictureView");
    });
  }
  setView(newView) {
    const views = this.host.shadowRoot.querySelectorAll(".view");
    views.forEach(v => v.classList.remove("visible"));
    switch (newView) {
      case "noPictureView":
        this.noPictureView.classList.add("visible");
        break;
      case "hasPictureView":
        this.hasPictureView.classList.add("visible");
        break;
      default:
        break;
    }
    this.view = newView;
  }
  initCrop() {
    var wantedRatio = this.width / this.height;
    var imageRect = this.image.getBoundingClientRect();
    var imageRatio = imageRect.width / imageRect.height;
    if (wantedRatio > imageRatio) {
      var wantedHeight = imageRect.width / wantedRatio;
      var diff = imageRect.height - wantedHeight;
      this.crop.style.top = Math.round(diff / 2).toString() + "px";
      this.crop.style.height = Math.round(wantedHeight).toString() + "px";
    }
    else {
      var wantedWidth = imageRect.height * wantedRatio;
      var diff = imageRect.width - wantedWidth;
      this.crop.style.left = Math.round(diff / 2).toString() + "px";
      this.crop.style.width = Math.round(wantedWidth).toString() + "px";
    }
  }
  setImage() {
    this.image.addEventListener('load', () => {
      this.initCrop();
      this.emitImage();
    });
    this.image.src = this.canvas.toDataURL();
  }
  handleNewFile(file) {
    if (file.type.split('/')[0] != "image") {
      return;
    }
    var reader = new FileReader();
    reader.onload = readerLoadEvent => {
      var img = new Image();
      img.onload = () => {
        this.canvas.width = img.width;
        this.canvas.height = img.height;
        if (this.preventUndersized && (img.width < this.width || img.height < this.height)) {
          this.imageTooSmallModal.show();
          return;
        }
        var ctx = this.canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        this.setView("hasPictureView");
        this.setImage();
      };
      img.src = readerLoadEvent.target.result.toString();
    };
    reader.readAsDataURL(file);
  }
  emitImage() {
    var x = this.crop.offsetLeft / this.image.width * this.image.naturalWidth;
    var y = this.crop.offsetTop / this.image.height * this.image.naturalHeight;
    var cropRect = this.crop.getBoundingClientRect();
    var width = cropRect.width / this.image.width * this.image.naturalWidth;
    var height = cropRect.height / this.image.height * this.image.naturalHeight;
    if (x < 0)
      x = 0;
    if (x > this.image.naturalWidth)
      x = this.image.naturalWidth;
    if (y < 0)
      y = 0;
    if (y > this.image.naturalWidth)
      y = this.image.naturalWidth;
    if (width > this.image.naturalWidth)
      width = this.image.naturalWidth;
    if (height > this.image.naturalHeight)
      height = this.image.naturalHeight;
    var dataUrl = this.generateCroppedImage(x, y, width, height, this.width, this.height);
    this.imageCropChanged.emit(dataUrl);
  }
  generateCroppedImage(x, y, width, height, desiredWidth, desiredHeight) {
    this.canvas.width = desiredWidth;
    this.canvas.height = desiredHeight;
    const context = this.canvas.getContext("2d");
    context.clearRect(0, 0, desiredWidth, desiredHeight);
    context.drawImage(this.image, x, y, width, height, 0, 0, desiredWidth, desiredHeight);
    return this.canvas.toDataURL("image/jpeg", this.quality);
  }
  getCornerLeftTop(corner) {
    let left = 0;
    let top = 0;
    switch (corner) {
      case CornerType.se:
        left = this.crop.offsetLeft;
        top = this.crop.offsetTop;
        break;
      case CornerType.sw:
        top = this.crop.offsetTop;
        break;
      default:
        break;
    }
    return { top, left };
  }
  isMouseStillInTarget(event) {
    var inside = false;
    let mouseX;
    let mouseY;
    const imageRect = this.image.getBoundingClientRect();
    if (event instanceof MouseEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }
    if (typeof TouchEvent !== "undefined") {
      if (event instanceof TouchEvent) {
        var touch = event.touches[0];
        mouseX = touch.clientX;
        mouseY = touch.clientY;
      }
    }
    if (mouseX >= imageRect.x &&
      mouseY >= imageRect.y &&
      mouseX <= imageRect.left + imageRect.width &&
      mouseY <= imageRect.top + imageRect.height) {
      inside = true;
    }
    var corners = this.crop.querySelectorAll("div");
    corners.forEach(corner => {
      var cornerRect = corner.getBoundingClientRect();
      if (mouseX >= cornerRect.x &&
        mouseY >= cornerRect.y &&
        mouseX <= cornerRect.left + cornerRect.width &&
        mouseY <= cornerRect.top + cornerRect.height) {
        inside = true;
      }
    });
    return inside;
  }
  render() {
    return (h(Host, { ref: el => this.host = el }, h("canvas", { ref: el => this.canvas = el }), h("div", { class: "view", ref: el => this.hasPictureView = el }, h("div", { class: "cropper" }, h("img", { ref: el => this.image = el }), h("div", { class: "backdrop" }), h("div", { class: "crop", ref: e => this.crop = e, onMouseDown: this.handleCropMouseDown, onTouchStart: this.handleCropMouseDown }, h("div", { class: "nw" }), h("div", { class: "ne" }), h("div", { class: "se" }), h("div", { class: "sw" })))), h("div", { class: "view", ref: el => this.noPictureView = el }, h("dnn-dropzone", { allowCameraMode: true, onFilesSelected: e => this.handleNewFile(e.detail[0]), resx: {
        capture: this.resx.capture,
        dragAndDropFile: this.resx.dragAndDropFile,
        or: this.resx.or,
        takePicture: this.resx.takePicture,
        uploadFile: this.resx.uploadFile,
      } })), h("dnn-modal", { ref: el => this.imageTooSmallModal = el, "close-text": this.resx.modalCloseText }, h("p", null, this.resx.imageTooSmall.replace("{width}", this.width.toString()).replace("{height}", this.height.toString())))));
  }
  static get is() { return "dnn-image-cropper"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dnn-image-cropper.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dnn-image-cropper.css"]
    };
  }
  static get properties() {
    return {
      "width": {
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
          "text": "Sets the desired final image width."
        },
        "attribute": "width",
        "reflect": false,
        "defaultValue": "600"
      },
      "height": {
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
          "text": "Sets the desired final image height."
        },
        "attribute": "height",
        "reflect": false,
        "defaultValue": "600"
      },
      "resx": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "{\r\n    capture: string;\r\n    dragAndDropFile: string;\r\n    or: string;\r\n    takePicture: string;\r\n    uploadFile: string;\r\n    imageTooSmall: string;\r\n    modalCloseText: string;\r\n  }",
          "resolved": "{ capture: string; dragAndDropFile: string; or: string; takePicture: string; uploadFile: string; imageTooSmall: string; modalCloseText: string; }",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Can be used to customize controls text.\r\nSome values support tokens, see default values for examples."
        },
        "defaultValue": "{\r\n    capture: \"Capture\",\r\n    dragAndDropFile: \"Drag and drop an image\",\r\n    or: \"or\",\r\n    takePicture: \"Take a picture\",\r\n    uploadFile: \"Upload an image\",\r\n    imageTooSmall: \"The image you are attempting to upload does not meet the minimum size requirement of {width} pixels by {height} pixels. Please upload a larger image.\",\r\n    modalCloseText: \"Close\",\r\n  }"
      },
      "quality": {
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
          "text": "Sets the output quality of the corpped image (number between 0 and 1)."
        },
        "attribute": "quality",
        "reflect": false,
        "defaultValue": "0.8"
      },
      "preventUndersized": {
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
          "text": "When set to true, prevents cropping an image smaller than the required size, which would blow pixel and make the final picture look blurry."
        },
        "attribute": "prevent-undersized",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "view": {}
    };
  }
  static get events() {
    return [{
        "method": "imageCropChanged",
        "name": "imageCropChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "When the image crop changes, emits the dataurl for the new cropped image."
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
}
//# sourceMappingURL=dnn-image-cropper.js.map
