export interface ImageCropperResx {
    /** The text of the capture button. */
    capture?: string;

    /** The text of the Drag and Drop button. */
    dragAndDropFile?: string;

    /** The word "or" shown between the controls. */
    or?: string;

    /** The text of the button to take a picture. */
    takePicture?: string;

    /** The text of the button to upload an image. */
    uploadFile?: string;

    /** The text shown when an image is smaller than the minimum size supported.
     * {width} and {height} will be replaced by the minimum width and height. 
     */
    imageTooSmall?: string;

    /** The text of the Close button. */
    modalCloseText?: string;
};