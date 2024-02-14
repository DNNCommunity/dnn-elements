export interface ImageCropperResx {
    /** The text of the capture button. */
    capture?: string,

    /** The text of the Drag and Drop button. */
    dragAndDropFile: "Drag and drop an image",

    /** The word "or" shown between the controls. */
    or: "or",

    /** The text of the button to take a picture. */
    takePicture: "Take a picture",

    /** The text of the button to upload an image. */
    uploadFile: "Upload an image",

    /** The text shown when an image is smaller than the minimum size supported.
     * {width} and {height} will be replaced by the minimum width and height. 
     */
    imageTooSmall: "The image you are attempting to upload does not meet the minimum size requirement of {width} pixels by {height} pixels. Please upload a larger image.",

    /** The text of the Close button. */
    modalCloseText: "Close",
};