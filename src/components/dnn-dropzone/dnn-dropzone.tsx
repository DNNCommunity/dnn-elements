import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import uploadIcon from "@material-design-icons/svg/filled/upload.svg";
import photoCameraIcon from "@material-design-icons/svg/filled/photo_camera.svg";

@Component({
  tag: 'dnn-dropzone',
  styleUrl: 'dnn-dropzone.scss',
  shadow: true,
})
export class DnnDropzone {
  /** Localization strings */
  @Prop() resx:{
    dragAndDropFile: string;
    capture: string;
    or: string;
    takePicture: string;
    uploadFile: string;
  } = {
    dragAndDropFile: "Drag and drop a file",
    capture: "Capture",
    or: "or",
    takePicture: "Take a picture",
    uploadFile: "Upload a file",
  }

  /** A list of allowed file extensions.
   * If not specified, any file is allowed.
   * Ex: ["jpg", "jped", "gif", "png"]
   */
  @Prop() allowedExtensions: string[];

  /**
   * If true, will allow the user to take a snapshot
   * using the device camera. (only works over https).
   */
  @Prop() allowCameraMode: boolean = false;

  /**
   * Specifies the jpeg quality for when the device
   * camera is used to generate a picture.
   * Needs to be a number between 0 and 1 and defaults to 0.8
   */
  @Prop() captureQuality: number = 0.8;

  /** Fires when file were selected. */
  @Event() filesSelected: EventEmitter<File[]>;
  
  @State() canTakeSnapshots: boolean = false;

  @State() takingPicture: boolean = false;
  
  private dropzone: HTMLElement;
  private fileInput: HTMLInputElement;
  private videoPreview: HTMLVideoElement;
  private videoSettings!: MediaTrackSettings;


  componentDidLoad() {
    if (this.allowCameraMode){
      this.checkIfBrowserCanTakeSnapshots()
      .then(result => this.canTakeSnapshots = result);
    }
    if (this.allowedExtensions != undefined && this.allowedExtensions.length > 0){
      var extensionsWithDots = this.allowedExtensions.map(e => `.${e}`);
      var extensionsList = extensionsWithDots.join(",");
      this.fileInput.accept = extensionsList;
    }
  }

  private checkIfBrowserCanTakeSnapshots(): Promise<boolean> {
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

  private getFilesFromFileList(files: FileList) : File[] {
    var fileList: File[] = [];
    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      fileList.push(file);
    }

    return fileList;
  }

  private handleUploadButton(element: HTMLInputElement): void {
    let files = this.getFilesFromFileList(element.files);

    this.filesSelected.emit(files);
  }

  private handleDragOver = (event: DragEvent) => 
  {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    this.dropzone.classList.add("dropping");
  };

  private hasInvalidExtensions(files: FileList): boolean{
    var hasInvalid = false;
    for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
      const file = files[fileIndex];
      var regex = /(?:\.([^.]+))?$/;
      const fileExtension = regex.exec(file.name)[1];
      if (fileExtension == undefined){
        hasInvalid = true;
      }

      if (this.allowedExtensions != undefined && !this.allowedExtensions.includes(fileExtension)){
        hasInvalid = true;
      }

      return hasInvalid;
    }
  }

  private handleDrop = (dropEvent: DragEvent) => {
    dropEvent.stopPropagation();
    dropEvent.preventDefault();
    const files = dropEvent.dataTransfer.files;

    if (this.hasInvalidExtensions(files)){
      return;
    }
    var fileList = this.getFilesFromFileList(files);
    this.filesSelected.emit(fileList);
  };

  private takeSnapshot(): void {
    this.takingPicture = true;
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(stream => {
      stream
      this.videoPreview.srcObject = stream;
      this.videoPreview.play()
      .then(() => {
        this.videoSettings = stream.getVideoTracks()[0].getSettings();
      });
    })
    .catch(error => alert(error));
  }

  private applySnapshot(): void {
    var canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = this.videoSettings.width;
    canvas.height = this.videoSettings.height;
    context.drawImage(this.videoPreview, 0, 0);
    canvas.toBlob(blob => {
      var file = new File([blob], "image.jpeg", {type:"image/jpeg"});
      this.takingPicture = false;
      
      var fileList = [file];
      this.filesSelected.emit(fileList)
    }, "image/jpeg", this.captureQuality);
  }
  
  render() {
    return (
      <Host
        ref={e => this.dropzone = e}
        class="dropzone"
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
        onDragLeave={() => this.dropzone.classList.remove("dropping")}
      >
        {!this.takingPicture &&
          [
            <p>{this.resx?.dragAndDropFile}</p>
          ,
            <p>- {this.resx?.or} -</p>
          ,
            <label class="upload-file">
              <input
                type="file"
                ref={el => this.fileInput = el}
                onChange={e => this.handleUploadButton(e.target as HTMLInputElement)}
              >
              </input>
              <span innerHTML={uploadIcon} />&nbsp;
              {this.resx?.uploadFile}
            </label>
            ,
            this.canTakeSnapshots &&
              [
                <p>- {this.resx?.or} -</p>
                ,
                <button
                  onClick={() => this.takeSnapshot()}
                >
                  <span innerHTML={photoCameraIcon} />&nbsp;
                  {this.resx?.takePicture}
                </button>
              ]
          ]
        }
        {this.takingPicture &&
          <div class="video-preview">
            <video ref={e => this.videoPreview = e} />
            <button
              onClick={() => this.applySnapshot()}
            >
              <span innerHTML={photoCameraIcon} />              
              {this.resx?.capture}
            </button>
          </div>
        }
      </Host>
    );
  }

}
