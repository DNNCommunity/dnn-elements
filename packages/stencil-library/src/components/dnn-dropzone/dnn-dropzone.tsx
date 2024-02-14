import { Component, Host, h, Prop, State, Event, EventEmitter, Watch } from '@stencil/core';
import { getReadableFileSizeString } from '../../utilities/stringUtilities';
import { DropzoneResx } from './types';

@Component({
  tag: 'dnn-dropzone',
  styleUrl: 'dnn-dropzone.scss',
  shadow: true,
})
export class DnnDropzone {
  /** Localization strings */
  @Prop() resx:DropzoneResx;

  /** A list of allowed file extensions.
   * If not specified, any file is allowed.
   * Ex: ["jpg", "jpeg", "gif", "png"]
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

  /**
   * Max file size in bytes.
   */
  @Prop() maxFileSize?: number;

  /** Fires when file were selected. */
  @Event() filesSelected: EventEmitter<File[]>;
  
  @State() canTakeSnapshots: boolean = false;

  @State() takingPicture: boolean = false;

  @State() fileTooLarge: boolean = false;

  @State() invalidExtension: boolean = false;

  @State() localResx: DropzoneResx;
  

  private dropzone: HTMLElement;
  private fileInput: HTMLInputElement;
  private videoPreview: HTMLVideoElement;
  private videoSettings!: MediaTrackSettings;
  private defaultResx: DropzoneResx = {
    dragAndDropFile: "Drag and drop a file",
    capture: "Capture",
    or: "or",
    takePicture: "Take a picture",
    uploadFile: "Upload a file",
    uploadSizeTooLarge: "The file you tried to upload is too large.",
    fileSizeLimit: "The maximum size is {0}",
    invalidExtension: "The file you tried to upload has an invalid extension.",
    allowedFileExtensions: "Allowed file extensions: {0}",
  }

  componentWillLoad() {
    this.mergeResx();
  }

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

  @Watch('resx')
  resxChanged() {
    this.mergeResx();
  }

  private mergeResx(): void {
    this.localResx = {...this.defaultResx, ...this.resx};
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

  private isAnyFileLargerThanAllowed (files:File[]) : boolean {
    if (this.maxFileSize == undefined || this.maxFileSize <= 0) {
      return false;
    } 

    if ( files.some(file => file.size > this.maxFileSize )) {
      return true;
    }

    return false;
  }

  private handleUploadButton(element: HTMLInputElement): void {
    this.fileTooLarge = false;
    this.invalidExtension = false;
    let files = this.getFilesFromFileList(element.files);
    
    if (this.isAnyFileLargerThanAllowed(files)) {
      this.fileTooLarge = true;
      return;
    }

    if (this.hasInvalidExtensions(files)){
      this.invalidExtension = true;
      return;
    }

    this.filesSelected.emit(files);
  }

  private handleDragOver = (event: DragEvent) => 
  {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    this.dropzone.classList.add("dropping");
  };

  private hasInvalidExtensions(files: File[]): boolean{
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
    this.invalidExtension = false;
    this.fileTooLarge = false;
    dropEvent.stopPropagation();
    dropEvent.preventDefault();
    const files = dropEvent.dataTransfer.files;

    if (this.hasInvalidExtensions(Array.from(files))){
      this.invalidExtension = true;
      return;
    }

    if (this.isAnyFileLargerThanAllowed(Array.from(files))) {
      this.fileTooLarge = true;
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

  private getInvalidExtensionsMessage() {
    var message = this.localResx.allowedFileExtensions;
    var message = message.replace("{0}", this.allowedExtensions.join(", "));
    return message;
  }
  
  render() {
    return (
      <Host
        ref={e => this.dropzone = e}
        class="dropzone"
        onDragOver={e => this.handleDragOver(e)}
        onDrop={e => this.handleDrop(e)}
        onDragLeave={() => this.dropzone.classList.remove("dropping")}
      >
        {!this.takingPicture &&
          [
            <p>{this.localResx?.dragAndDropFile}</p>
          ,
            <p>- {this.localResx?.or} -</p>
          ,
            <label class="upload-file">
              <input
                type="file"
                ref={el => this.fileInput = el}
                onChange={e => this.handleUploadButton(e.target as HTMLInputElement)}
              >
              </input>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M5,20h14v-2H5V20z M5,10h4v6h6v-6h4l-7-7L5,10z"/></g></svg>
              </span>
              &nbsp;
              {this.localResx?.uploadFile}
            </label>
            ,
            this.canTakeSnapshots &&
              [
                <p>- {this.localResx?.or} -</p>
                ,
                <button
                  onClick={() => this.takeSnapshot()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="3.2"/><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>
                  {this.localResx?.takePicture}
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
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="3.2"/><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>&nbsp;
              {this.localResx?.capture}
            </button>
          </div>
        }
        { this.fileTooLarge && 
          <div class='error'>
              <p>
                {this.localResx.uploadSizeTooLarge}
                <br/>
                {this.localResx.fileSizeLimit.replace("{0}", getReadableFileSizeString(this.maxFileSize)) } 
              </p>
          </div>
        }
        { this.invalidExtension &&
          <div class='error'>
            <p>
              {this.localResx.invalidExtension}
              <br/>
              {this.getInvalidExtensionsMessage()}
            </p>
          </div>
        }
      </Host>
    );
  }
}
