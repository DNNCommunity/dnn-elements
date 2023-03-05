import { Host, h } from '@stencil/core';
export class DnnDropzone {
  constructor() {
    this.handleDragOver = (event) => {
      event.stopPropagation();
      event.preventDefault();
      event.dataTransfer.dropEffect = "copy";
      this.dropzone.classList.add("dropping");
    };
    this.handleDrop = (dropEvent) => {
      dropEvent.stopPropagation();
      dropEvent.preventDefault();
      const files = dropEvent.dataTransfer.files;
      if (this.hasInvalidExtensions(files)) {
        return;
      }
      var fileList = this.getFilesFromFileList(files);
      this.filesSelected.emit(fileList);
    };
    this.resx = {
      dragAndDropFile: "Drag and drop a file",
      capture: "Capture",
      or: "or",
      takePicture: "Take a picture",
      uploadFile: "Upload a file",
    };
    this.allowedExtensions = undefined;
    this.allowCameraMode = false;
    this.captureQuality = 0.8;
    this.canTakeSnapshots = false;
    this.takingPicture = false;
  }
  componentDidLoad() {
    if (this.allowCameraMode) {
      this.checkIfBrowserCanTakeSnapshots()
        .then(result => this.canTakeSnapshots = result);
    }
    if (this.allowedExtensions != undefined && this.allowedExtensions.length > 0) {
      var extensionsWithDots = this.allowedExtensions.map(e => `.${e}`);
      var extensionsList = extensionsWithDots.join(",");
      this.fileInput.accept = extensionsList;
    }
  }
  checkIfBrowserCanTakeSnapshots() {
    return new Promise((resolve) => {
      const mediaDevices = navigator.mediaDevices;
      if (mediaDevices == undefined || mediaDevices.enumerateDevices == undefined) {
        resolve(false);
      }
      mediaDevices.enumerateDevices()
        .then(devices => {
        var result = devices.some(device => device.kind == "videoinput");
        resolve(result);
      });
    });
  }
  getFilesFromFileList(files) {
    var fileList = [];
    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      fileList.push(file);
    }
    return fileList;
  }
  handleUploadButton(element) {
    let files = this.getFilesFromFileList(element.files);
    this.filesSelected.emit(files);
  }
  hasInvalidExtensions(files) {
    var hasInvalid = false;
    for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
      const file = files[fileIndex];
      var regex = /(?:\.([^.]+))?$/;
      const fileExtension = regex.exec(file.name)[1];
      if (fileExtension == undefined) {
        hasInvalid = true;
      }
      if (this.allowedExtensions != undefined && !this.allowedExtensions.includes(fileExtension)) {
        hasInvalid = true;
      }
      return hasInvalid;
    }
  }
  takeSnapshot() {
    this.takingPicture = true;
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then(stream => {
      stream;
      this.videoPreview.srcObject = stream;
      this.videoPreview.play()
        .then(() => {
        this.videoSettings = stream.getVideoTracks()[0].getSettings();
      });
    })
      .catch(error => alert(error));
  }
  applySnapshot() {
    var canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = this.videoSettings.width;
    canvas.height = this.videoSettings.height;
    context.drawImage(this.videoPreview, 0, 0);
    canvas.toBlob(blob => {
      var file = new File([blob], "image.jpeg", { type: "image/jpeg" });
      this.takingPicture = false;
      var fileList = [file];
      this.filesSelected.emit(fileList);
    }, "image/jpeg", this.captureQuality);
  }
  render() {
    var _a, _b, _c, _d, _e, _f;
    return (h(Host, { ref: e => this.dropzone = e, class: "dropzone", onDragOver: this.handleDragOver, onDrop: this.handleDrop, onDragLeave: () => this.dropzone.classList.remove("dropping") }, !this.takingPicture &&
      [
        h("p", null, (_a = this.resx) === null || _a === void 0 ? void 0 : _a.dragAndDropFile),
        h("p", null, "- ", (_b = this.resx) === null || _b === void 0 ? void 0 :
          _b.or, " -"),
        h("label", { class: "upload-file" }, h("input", { type: "file", ref: el => this.fileInput = el, onChange: e => this.handleUploadButton(e.target) }), h("span", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", "enable-background": "new 0 0 24 24", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000" }, h("g", null, h("rect", { fill: "none", height: "24", width: "24" })), h("g", null, h("path", { d: "M5,20h14v-2H5V20z M5,10h4v6h6v-6h4l-7-7L5,10z" })))), "\u00A0", (_c = this.resx) === null || _c === void 0 ? void 0 :
          _c.uploadFile),
        this.canTakeSnapshots &&
          [
            h("p", null, "- ", (_d = this.resx) === null || _d === void 0 ? void 0 :
              _d.or, " -"),
            h("button", { onClick: () => this.takeSnapshot() }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000" }, h("path", { d: "M0 0h24v24H0z", fill: "none" }), h("circle", { cx: "12", cy: "12", r: "3.2" }), h("path", { d: "M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" })), (_e = this.resx) === null || _e === void 0 ? void 0 :
              _e.takePicture)
          ]
      ], this.takingPicture &&
      h("div", { class: "video-preview" }, h("video", { ref: e => this.videoPreview = e }), h("button", { onClick: () => this.applySnapshot() }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000" }, h("path", { d: "M0 0h24v24H0z", fill: "none" }), h("circle", { cx: "12", cy: "12", r: "3.2" }), h("path", { d: "M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" })), "\u00A0", (_f = this.resx) === null || _f === void 0 ? void 0 :
        _f.capture))));
  }
  static get is() { return "dnn-dropzone"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dnn-dropzone.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dnn-dropzone.css"]
    };
  }
  static get properties() {
    return {
      "resx": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "{\r\n    dragAndDropFile: string;\r\n    capture: string;\r\n    or: string;\r\n    takePicture: string;\r\n    uploadFile: string;\r\n  }",
          "resolved": "{ dragAndDropFile: string; capture: string; or: string; takePicture: string; uploadFile: string; }",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Localization strings"
        },
        "defaultValue": "{\r\n    dragAndDropFile: \"Drag and drop a file\",\r\n    capture: \"Capture\",\r\n    or: \"or\",\r\n    takePicture: \"Take a picture\",\r\n    uploadFile: \"Upload a file\",\r\n  }"
      },
      "allowedExtensions": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "string[]",
          "resolved": "string[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "A list of allowed file extensions.\r\nIf not specified, any file is allowed.\r\nEx: [\"jpg\", \"jped\", \"gif\", \"png\"]"
        }
      },
      "allowCameraMode": {
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
          "text": "If true, will allow the user to take a snapshot\r\nusing the device camera. (only works over https)."
        },
        "attribute": "allow-camera-mode",
        "reflect": false,
        "defaultValue": "false"
      },
      "captureQuality": {
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
          "text": "Specifies the jpeg quality for when the device\r\ncamera is used to generate a picture.\r\nNeeds to be a number between 0 and 1 and defaults to 0.8"
        },
        "attribute": "capture-quality",
        "reflect": false,
        "defaultValue": "0.8"
      }
    };
  }
  static get states() {
    return {
      "canTakeSnapshots": {},
      "takingPicture": {}
    };
  }
  static get events() {
    return [{
        "method": "filesSelected",
        "name": "filesSelected",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fires when file were selected."
        },
        "complexType": {
          "original": "File[]",
          "resolved": "File[]",
          "references": {
            "File": {
              "location": "global"
            }
          }
        }
      }];
  }
}
//# sourceMappingURL=dnn-dropzone.js.map
