import { Component, Element, Host, h, State, Prop, Event, EventEmitter, Method, Watch, AttachInternals } from '@stencil/core';
import { CornerType } from './CornerType';
import { getMovementFromEvent } from "../../utilities/mouseUtilities";
import { ImageCropperResx } from './types';
import { dataURLtoFile } from '../../utilities/fileUtilities';

/**
 * Allows cropping an image in-browser with the option to enforce a specific final size.
 * All computation happens in the browser and the final image is emmited
 * in an event that has a data-url of the image.
 */
@Component({
  tag: 'dnn-image-cropper',
  styleUrl: 'dnn-image-cropper.scss',
  shadow: true,
  formAssociated: true,
})
export class DnnImageCropper {
  /** Sets the desired final image width. */
  @Prop() width: number;

  /** Sets the desired final image height. */
  @Prop() height: number;

  /** Can be used to customize controls text.
   * Some values support tokens, see default values for examples.
  */
  @Prop() resx: ImageCropperResx;

  /** Sets the output quality of the cropped image (number between 0 and 1). */
  @Prop() quality: number = 0.8;

  /** When set to true, prevents cropping an image smaller than the required size, which would blow pixel and make the final picture look blurry. */
  @Prop() preventUndersized: boolean = false;

  /** The name of the control when used in a form. */
  @Prop() name: string;

  /** When the image crop changes, emits the dataurl for the new cropped image. */
  @Event() imageCropChanged: EventEmitter<string>;

  /** Emits both when a file is initially select and when the crop has changed.
   * Compared to imageCropChanged, this event emits the file itself, which can be useful for uploading the file to a server including its name.
   */
  @Event() imageFileCropChanged: EventEmitter<File>;
  
  /** Clears the current image and crop (resets the component). */
  @Method()
  public async clear(){
    this.setView("noPictureView");
  }
  
  @State() view: IComponentInterfaces["View"];
  @State() localResx: ImageCropperResx;
  @State() fileName: string;

  @Element() host: HTMLDnnImageCropperElement;

  @AttachInternals() internals: ElementInternals;

  private hasPictureView: HTMLDivElement;
  private noPictureView: HTMLDivElement;
  private canvas: HTMLCanvasElement;
  private image: HTMLImageElement;
  private crop: HTMLDivElement;
  private previousTouch: Touch;
  private imageTooSmallModal!: HTMLDnnModalElement;
  private defaultResx: ImageCropperResx = {
    capture: "Capture",
    dragAndDropFile: "Drag and drop an image",
    or: "or",
    takePicture: "Take a picture",
    uploadFile: "Upload an image",
    imageTooSmall: "The image you are attempting to upload does not meet the minimum size requirement of {width} pixels by {height} pixels. Please upload a larger image.",
    modalCloseText: "Close",
  }

  componentWillLoad() {
    this.mergeResx();
  }

  componentDidLoad() {
    requestAnimationFrame(() => {
      this.setView("noPictureView");
    })
  }

  @Watch("resx")
  resxChanged() {
    this.mergeResx();
  }

  // eslint-disable-next-line @stencil-community/own-methods-must-be-private
  formResetCallback(){
    this.clear();
    this.internals.setValidity({});
    this.internals.setFormValue("");
  }

  private mergeResx(): void {
    this.localResx = {...this.defaultResx, ...this.resx};
  }

  private setView(newView: IComponentInterfaces["View"]) {
    const views = this.host.shadowRoot.querySelectorAll(".view");
    views.forEach(v =>
      v.classList.remove("visible"));
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

  private initCrop() {

    /** Force full size to prevent a Firefox timing issue */
    this.crop.style.top = "0px";
    this.crop.style.left = "0px";
    this.crop.style.width = "100%";
    this.crop.style.height = "100%";

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

  private setImage() {
    this.image.addEventListener('load', () => {
      this.initCrop();
      this.emitImage();
    })
    this.image.src = this.canvas.toDataURL();
  }

  private handleNewFile(file: File): void {
    if (file.type.split('/')[0] != "image") {
      return;
    }

    this.fileName = file.name;

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
        requestAnimationFrame(() => {
          this.setView("hasPictureView");
        });
        requestAnimationFrame(() => {
          this.setImage();
        });
        requestAnimationFrame(() => {
          this.initializeCropBox();
        })
      }
      img.src = readerLoadEvent.target.result.toString();
    }
    reader.readAsDataURL(file);
  }

  private initializeCropBox = () => {
    const imageRect = this.image.getBoundingClientRect();
    const wantedRatio = this.width / this.height;
  
    // Calculate initial dimensions of the crop box.
    let newWidth: number, newHeight: number;
  
    // Determine if the width or the height is the limiting dimension.
    if (imageRect.width / imageRect.height > wantedRatio) {
      // Image is wider than the wanted ratio, so height is the limiting factor.
      newHeight = imageRect.height;
      newWidth = newHeight * wantedRatio;
    } else {
      // Image is taller than the wanted ratio, so width is the limiting factor.
      newWidth = imageRect.width;
      newHeight = newWidth / wantedRatio;
    }
  
    // Calculate initial position of the crop box.
    const newTop = (imageRect.height - newHeight) / 2;
    const newLeft = (imageRect.width - newWidth) / 2;
  
    // Apply initial dimensions and position.
    this.crop.style.top = `${Math.round(newTop)}px`;
    this.crop.style.left = `${Math.round(newLeft)}px`;
    this.crop.style.width = `${Math.round(newWidth)}px`;
    this.crop.style.height = `${Math.round(newHeight)}px`;
  };

  private handleCropMouseDown = (event: MouseEvent | TouchEvent) => {
    event.stopPropagation();
    event.preventDefault();
    const element = event.target as HTMLElement;
    const className = element.classList[0];

    document.addEventListener("mouseup", this.handleImageCropFinished, false);
    document.addEventListener("touchend", this.handleImageCropFinished, false);
    switch (className) {
      case "crop":
        document.addEventListener("mousemove", this.handleCropDrag, false);
        document.addEventListener("touchmove", this.handleCropDrag, false)
        document.addEventListener("mouseup", () => document.removeEventListener("mousemove", this.handleCropDrag));
        document.addEventListener("touchend", () => document.removeEventListener("touchmove", this.handleCropDrag));
        break;
      case "nw":
        document.addEventListener("mousemove", this.handleNwMouseMove, false);
        document.addEventListener("touchmove", this.handleNwMouseMove, false)
        document.addEventListener("mouseup", () => document.removeEventListener("mousemove", this.handleNwMouseMove));
        document.addEventListener("touchend", () => document.removeEventListener("touchmove", this.handleNwMouseMove));
        break;
      case "ne":
        document.addEventListener("mousemove", this.handleNeMouseMove, false);
        document.addEventListener("touchmove", this.handleNeMouseMove, false)
        document.addEventListener("mouseup", () => document.removeEventListener("mousemove", this.handleNeMouseMove));
        document.addEventListener("touchend", () => document.removeEventListener("touchmove", this.handleNeMouseMove));
        break
      case "se":
        document.addEventListener("mousemove", this.handleSeMouseMove, false);
        document.addEventListener("touchmove", this.handleSeMouseMove, false)
        document.addEventListener("mouseup", () => document.removeEventListener("mousemove", this.handleSeMouseMove));
        document.addEventListener("touchend", () => document.removeEventListener("touchmove", this.handleSeMouseMove));
        break;
      case "sw":
        document.addEventListener("mousemove", this.handleSwMouseMove, false);
        document.addEventListener("touchmove", this.handleSwMouseMove, false)
        document.addEventListener("mouseup", () => document.removeEventListener("mousemove", this.handleSwMouseMove));
        document.addEventListener("touchend", () => document.removeEventListener("touchmove", this.handleSwMouseMove));
        break;
      default:
        break;
    }
  };

  private handleImageCropFinished = (_ev: MouseEvent) => {
    this.emitImage();
    document.removeEventListener("mouseup", this.handleImageCropFinished);
    this.previousTouch = undefined;
  }

  private emitImage() {
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

    var dataUrl = this.generateCroppedImage(x, y, width, height, this.width ?? width, this.height ?? height);
    this.imageCropChanged.emit(dataUrl);
    var file = dataURLtoFile(dataUrl, this.fileName);
    this.imageFileCropChanged.emit(file);
    if (this.name != undefined) {
      var data = new FormData();
      data.append(this.name, file);
      this.internals.setFormValue(data);
    }
  }

  private generateCroppedImage(x: number, y: number, width: number, height: number, desiredWidth: number, desiredHeight: number) {
    this.canvas.width = desiredWidth;
    this.canvas.height = desiredHeight;
    const context = this.canvas.getContext("2d");
    context.clearRect(0, 0, desiredWidth, desiredHeight);
    context.drawImage(this.image, x, y, width, height, 0, 0, desiredWidth, desiredHeight);

    return this.canvas.toDataURL("image/jpeg", this.quality);
  }

  private handleNwMouseMove = (event: MouseEvent | TouchEvent) => {
    this.handleCornerDrag(event, CornerType.nw);
  }

  private handleNeMouseMove = (event: MouseEvent | TouchEvent) => {
    this.handleCornerDrag(event, CornerType.ne);
  }

  private handleSeMouseMove = (event: MouseEvent | TouchEvent) => {
    this.handleCornerDrag(event, CornerType.se);
  }

  private handleSwMouseMove = (event: MouseEvent | TouchEvent) => {
    this.handleCornerDrag(event, CornerType.sw);
  }

  private handleCornerDrag = (event: MouseEvent | TouchEvent, corner: CornerType) => {
    const wantedRatio = this.width / this.height;
    const cropRect = this.crop.getBoundingClientRect();
    const imageRect = this.image.getBoundingClientRect();

    let { movementX, movementY } = getMovementFromEvent(event, this.previousTouch);

    let newWidth: number, newHeight: number;

    switch (corner) {
      case CornerType.nw:
        newWidth = cropRect.width - movementX;
        newHeight = cropRect.height - movementY;
        break;
      case CornerType.ne:
        newWidth = cropRect.width + movementX;
        newHeight = cropRect.height - movementY;
        break;
      case CornerType.se:
        newWidth = cropRect.width + movementX;
        newHeight = cropRect.height + movementY;
        break;
      case CornerType.sw:
        newWidth = cropRect.width - movementX;
        newHeight = cropRect.height + movementY;
    }

    let newTop: number, newLeft: number;
    if (!isNaN(wantedRatio)) {
      switch (corner) {
        case CornerType.nw:
          newHeight = newWidth / wantedRatio;
          newTop = cropRect.bottom - newHeight;
          break;
        case CornerType.se:
          newWidth = newHeight * wantedRatio;
          break;
        case CornerType.ne:
          newHeight = newWidth / wantedRatio;
          newTop = cropRect.bottom - newHeight;
          break;
        case CornerType.sw:
          newWidth = newHeight * wantedRatio;
          newLeft = cropRect.right - newWidth;
          break;
      }
    }

    switch (corner) {
      case CornerType.nw:
        newTop = this.crop.offsetTop + (cropRect.height - newHeight);
        newLeft = this.crop.offsetLeft + (cropRect.width - newWidth);
        break;
      case CornerType.ne:
        newTop = this.crop.offsetTop + (cropRect.height - newHeight);
        newLeft = this.crop.offsetLeft;
        break;
      case CornerType.se:
        newTop = this.crop.offsetTop;
        newLeft = this.crop.offsetLeft;
        break;
      case CornerType.sw:
        newTop = this.crop.offsetTop;
        newLeft = this.crop.offsetLeft + (cropRect.width - newWidth);
        break;
    }

    if (newLeft < 0) {
      newWidth += newLeft;
      newLeft = 0;
    }
    
    if (newTop < 0) {
      newHeight += newTop;
      newTop = 0;
    }
    
    if (newLeft + newWidth > imageRect.width) {
      newWidth = imageRect.width - newLeft;
    }
    
    if (newTop + newHeight > imageRect.height) {
      newHeight = imageRect.height - newTop;
    }

    // After the boundary checks, recalculate the width and height based on the ratio
    if (!isNaN(wantedRatio)) {
      switch (corner) {
        case CornerType.se:
        case CornerType.sw:
          newWidth = newHeight * wantedRatio;
          if (newLeft + newWidth > imageRect.width) {
              newWidth = imageRect.width - newLeft;
              // Recalculate the height after adjusting the width
              newHeight = newWidth / wantedRatio;
          }
          break;
      }
    }

    if (this.preventUndersized){
      const zoomRatio = this.image.width / this.image.naturalWidth;
      if (newWidth / zoomRatio < this.width || newHeight / zoomRatio < this.height){
        return;
      }
    }

    this.crop.style.top = `${newTop}px`;
    this.crop.style.left = `${newLeft}px`;
    this.crop.style.width = `${newWidth}px`;
    this.crop.style.height = `${newHeight}px`;
  }

  private handleCropDrag = (ev: MouseEvent | TouchEvent) => {
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

  private isMouseStillInTarget(event: MouseEvent | TouchEvent) {
    var inside = false;
    let mouseX: number;
    let mouseY: number;
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

    if (
      mouseX >= imageRect.x &&
      mouseY >= imageRect.y &&
      mouseX <= imageRect.left + imageRect.width &&
      mouseY <= imageRect.top + imageRect.height) {
      inside = true;
    }

    var corners = this.crop.querySelectorAll("div");
    corners.forEach(corner => {
      var cornerRect = corner.getBoundingClientRect();
      if (
        mouseX >= cornerRect.x &&
        mouseY >= cornerRect.y &&
        mouseX <= cornerRect.left + cornerRect.width &&
        mouseY <= cornerRect.top + cornerRect.height) {
        inside = true;
      }
    })

    return inside;
  }

  render() {
    return (
      <Host>
        <canvas ref={el => this.canvas = el} />
        <div
          class="view"
          ref={el => this.hasPictureView = el}
        >
          <div class="cropper">
            <img ref={el => this.image = el} />
            <div class="backdrop" />
            <div
              class="crop"
              ref={e => this.crop = e}
              onMouseDown={this.handleCropMouseDown}
              onTouchStart={this.handleCropMouseDown}
            >
              <div class="nw" />
              <div class="ne" />
              <div class="se" />
              <div class="sw" />
            </div>
          </div>
        </div>
        <div
          class="view"
          ref={el => this.noPictureView = el}>
          <dnn-dropzone
            allowCameraMode
            onFilesSelected={e => this.handleNewFile(e.detail[0])}
            allowedExtensions={['jpg', 'jpeg', 'gif', 'png', 'svg', 'webp', 'bmp' ]}
            resx={
              {
                capture: this.localResx.capture,
                dragAndDropFile: this.localResx.dragAndDropFile,
                or: this.localResx.or,
                takePicture: this.localResx.takePicture,
                uploadFile: this.localResx.uploadFile,
                uploadSizeTooLarge: "The file you tried to upload is too large.",
                fileSizeLimit: "The maximum size is",
              }
            }
          />
        </div>
        <dnn-modal ref={el => this.imageTooSmallModal = el} close-text={this.localResx.modalCloseText}>
          <p>{this.localResx.imageTooSmall.replace("{width}", this.width?.toString()).replace("{height}", this.height?.toString())}</p>
        </dnn-modal>
      </Host>
    );
  }
}

interface IComponentInterfaces {
  View: "noPictureView" | "takingPictureView" | "hasPictureView" | "hasCroppedPictureView";
}