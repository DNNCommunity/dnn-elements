import { Component, Host, h, State, Prop, Event, EventEmitter } from '@stencil/core';
import { CornerType } from './CornerType';

/**
 * Allows cropping an image in-browser with the option to enforce a specific final size.
 * All computation happens in the browser and the final image is emmited
 * in an event that has a data-url of the image.
 */
@Component({
  tag: 'dnn-image-cropper',
  styleUrl: 'dnn-image-cropper.scss',
  shadow: true,
})
export class DnnImageCropper {
  /** Sets the desired final image width. */
  @Prop() width: number = 600;

  /** Sets the desired final image height. */
  @Prop() height: number = 600;

  /** Can be used to customize controls text. */
  @Prop() resx: {
    capture: string;
    dragAndDropFile: string;
    or: string;
    takePicture: string;
    uploadFile: string;
  } = {
    capture: "Capture",
    dragAndDropFile: "Drag and drop an image",
    or: "or",
    takePicture: "Take a picture",
    uploadFile: "Upload an image",
  }

  /** Sets the output quality of the corpped image (number between 0 and 1). */
  @Prop() quality: number = 0.8;

  /** When the image crop changes, emits the dataurl for the new cropped image. */
  @Event() imageCropChanged: EventEmitter<string>;

  @State() view: IComponentInterfaces["View"];
  
  private host: HTMLElement;
  private hasPictureView: HTMLDivElement;
  private noPictureView: HTMLDivElement;
  private canvas: HTMLCanvasElement;
  private image: HTMLImageElement;
  private crop: HTMLDivElement;
  private previousTouch: Touch;

  componentDidLoad() {
    this.setView("noPictureView");
  }

  private setView(newView: IComponentInterfaces["View"]){
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

  private initCrop(){
    var wantedRatio = this.width / this.height;
    var imageRect = this.image.getBoundingClientRect();
    var imageRatio = imageRect.width / imageRect.height;
    
    if (wantedRatio > imageRatio){
        var wantedHeight = imageRect.width / wantedRatio;
        var diff = imageRect.height - wantedHeight;
        this.crop.style.top = Math.round(diff/2).toString() + "px";
        this.crop.style.height = Math.round(wantedHeight).toString() + "px";
    }
    else{
      var wantedWidth = imageRect.height * wantedRatio;
      var diff = imageRect.width - wantedWidth;
        this.crop.style.left = Math.round(diff/2).toString() + "px";
        this.crop.style.width = Math.round(wantedWidth).toString() + "px";
    }
  }

  private setImage(){
    this.image.addEventListener('load', () => {
      this.initCrop();
      this.emitImage();
    })
    this.image.src = this.canvas.toDataURL();
  }

  private handleNewFile(file: File): void {
    if (file.type.split('/')[0] != "image"){
      return;
    }
    
    var reader = new FileReader();
    reader.onload = readerLoadEvent => {
      var img = new Image();
      img.onload = () => {
        this.canvas.width = img.width;
        this.canvas.height = img.height;
        var ctx = this.canvas.getContext("2d");
        ctx.drawImage(img,0,0);
        this.setView("hasPictureView");
        this.setImage();
      }
      img.src = readerLoadEvent.target.result.toString();
    }
    reader.readAsDataURL(file);
  }

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

    var dataUrl = this.generateCroppedImage(x, y, width, height, this.width, this.height);
    this.imageCropChanged.emit(dataUrl);
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
    if (!this.isMouseStillInTarget(event)){
      return;
    }
    
    let {left, top} = this.getCornerLeftTop(corner);
    let newWidth = 0;
    let newHeight = 0;
    let orientation: "horizontal" | "vertical" = "horizontal";
    const wantedRatio = this.width / this.height;
    const cropRect = this.crop.getBoundingClientRect();
    const imageRect = this.image.getBoundingClientRect();
    let { movementX, movementY } = this.getMouvementFromEvent(event);
    if (Math.abs(movementX) < Math.abs(movementY)){
      orientation = "vertical";
    }

    if (orientation == "horizontal"){
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
    } else{
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
        if (left < 0) left = 0;
        if (left > imageRect.width) left = imageRect.width;
        if (top < 0) top = 0;
        if (top > imageRect.height) top = imageRect.height;
        if (left + newWidth > imageRect.width) newWidth = imageRect.width - left;
        if (top + newHeight > imageRect.height) newHeight = imageRect.height - top;
        break;
      case CornerType.ne:
      case CornerType.se:
        if (top < 0) top = 0;
        if (top > imageRect.height) top = imageRect.height;
        if (left + newWidth > imageRect.width) newWidth = imageRect.width - left;
        if (top + newHeight > imageRect.height) newHeight = imageRect.height - top;
        break;
      default:
        break;
    }

    if (newWidth / newHeight != wantedRatio){
      return;
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
  }

  private getCornerLeftTop(corner: CornerType): { left: number; top: number; } {
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
    return {top, left};
  }

  private handleCropDrag = (ev: MouseEvent | TouchEvent) => {
    if (!this.isMouseStillInTarget(ev)){
      return;
    }
    let {movementX, movementY} = this.getMouvementFromEvent(ev);
    let newLeft = this.crop.offsetLeft + movementX;
    let newTop = this.crop.offsetTop + movementY;
    var imageRect = this.image.getBoundingClientRect();
    var cropRect = this.crop.getBoundingClientRect();
    if (newLeft < 0){
      newLeft = 0;
    }
    if (newTop < 0){
      newTop = 0;
    }
    if (newLeft + cropRect.width > imageRect.width){
      newLeft = this.crop.offsetLeft;
    }
    if (newTop + cropRect.height > imageRect.height){
      newTop = this.crop.offsetTop;
    }
    this.crop.style.left = newLeft + "px";
    this.crop.style.top = newTop + "px";
  };
  
  private getMouvementFromEvent(event: MouseEvent | TouchEvent) {
    let movementX = 0;
    let movementY = 0;
    if (event instanceof MouseEvent) {
      movementX = event.movementX;
      movementY = event.movementY;
    }
    if (typeof TouchEvent !== "undefined"){
      if (event instanceof TouchEvent) {
        let touch = event.touches[0];
        if (this.previousTouch != undefined) {
          movementX = touch.pageX - this.previousTouch.pageX;
          movementY = touch.pageY - this.previousTouch.pageY;
        }
        this.previousTouch = touch;
      }
    }
    return { movementX, movementY };
  }

  private isMouseStillInTarget(event: MouseEvent | TouchEvent) {
    let mouseX: number;
    let mouseY: number;
    const imageRect = this.image.getBoundingClientRect();
    
    if (event instanceof MouseEvent){
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    if (typeof TouchEvent !== "undefined"){
      if (event instanceof TouchEvent){
        var touch = event.touches[0];
        mouseX = touch.clientX;
        mouseY = touch.clientY;
      }
    }
    
    if (
      mouseX < imageRect.x ||
      mouseY < imageRect.y ||
      mouseX > imageRect.left + imageRect.width ||
      mouseY > imageRect.top + imageRect.height)
    {
      return false;
    }

    return true;
  }

  render() {
    return (
      <Host ref={el => this.host = el}>
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
              resx={
                {
                  capture: this.resx.capture,
                  dragAndDropFile: this.resx.dragAndDropFile,
                  or: this.resx.or,
                  takePicture: this.resx.takePicture,
                  uploadFile: this.resx.uploadFile,
                }
              }
            />
        </div>
      </Host>
    );
  }
}

interface IComponentInterfaces
{
  View: "noPictureView" | "takingPictureView" | "hasPictureView" | "hasCroppedPictureView";
}