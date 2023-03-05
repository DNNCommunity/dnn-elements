import { EventEmitter } from '../../stencil-public-runtime';
export declare class DnnDropzone {
  /** Localization strings */
  resx: {
    dragAndDropFile: string;
    capture: string;
    or: string;
    takePicture: string;
    uploadFile: string;
  };
  /** A list of allowed file extensions.
   * If not specified, any file is allowed.
   * Ex: ["jpg", "jped", "gif", "png"]
   */
  allowedExtensions: string[];
  /**
   * If true, will allow the user to take a snapshot
   * using the device camera. (only works over https).
   */
  allowCameraMode: boolean;
  /**
   * Specifies the jpeg quality for when the device
   * camera is used to generate a picture.
   * Needs to be a number between 0 and 1 and defaults to 0.8
   */
  captureQuality: number;
  /** Fires when file were selected. */
  filesSelected: EventEmitter<File[]>;
  canTakeSnapshots: boolean;
  takingPicture: boolean;
  private dropzone;
  private fileInput;
  private videoPreview;
  private videoSettings;
  componentDidLoad(): void;
  private checkIfBrowserCanTakeSnapshots;
  private getFilesFromFileList;
  private handleUploadButton;
  private handleDragOver;
  private hasInvalidExtensions;
  private handleDrop;
  private takeSnapshot;
  private applySnapshot;
  render(): any;
}
