import { EventEmitter } from '../../stencil-public-runtime';
/**
 * Allows cropping an image in-browser with the option to enforce a specific final size.
 * All computation happens in the browser and the final image is emmited
 * in an event that has a data-url of the image.
 */
export declare class DnnImageCropper {
  /** Sets the desired final image width. */
  width: number;
  /** Sets the desired final image height. */
  height: number;
  /** Can be used to customize controls text.
   * Some values support tokens, see default values for examples.
  */
  resx: {
    capture: string;
    dragAndDropFile: string;
    or: string;
    takePicture: string;
    uploadFile: string;
    imageTooSmall: string;
    modalCloseText: string;
  };
  /** Sets the output quality of the corpped image (number between 0 and 1). */
  quality: number;
  /** When set to true, prevents cropping an image smaller than the required size, which would blow pixel and make the final picture look blurry. */
  preventUndersized: boolean;
  /** When the image crop changes, emits the dataurl for the new cropped image. */
  imageCropChanged: EventEmitter<string>;
  view: IComponentInterfaces["View"];
  private host;
  private hasPictureView;
  private noPictureView;
  private canvas;
  private image;
  private crop;
  private previousTouch;
  private imageTooSmallModal;
  componentDidLoad(): void;
  private setView;
  private initCrop;
  private setImage;
  private handleNewFile;
  private handleCropMouseDown;
  private handleImageCropFinished;
  private emitImage;
  private generateCroppedImage;
  private handleNwMouseMove;
  private handleNeMouseMove;
  private handleSeMouseMove;
  private handleSwMouseMove;
  private handleCornerDrag;
  private getCornerLeftTop;
  private handleCropDrag;
  private isMouseStillInTarget;
  render(): any;
}
interface IComponentInterfaces {
  View: "noPictureView" | "takingPictureView" | "hasPictureView" | "hasCroppedPictureView";
}
export {};
