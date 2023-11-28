export interface DropzoneResx {
    /** The title of the control text. */
    dragAndDropFile?: string;

    /** The word used for the picture mode capture button. */
    capture?: string;

    //** The word "or" shown between different control options. */
    or?: string;

    /** The text of the button to take a picture.*/
    takePicture?: string;

    /** The text of the control to pick a file. */
    uploadFile?: string;

    /** The text displayed when attempting to upload a file that is too large. */
    uploadSizeTooLarge?: string;

    /** The information displayed about the filesize limit.
     * {0} will be replaced by a human friendly size. (in MB, KB, GB, etc.) */
    fileSizeLimit?: string;

    /** The text displayed when attempting to upload a file type that is not allowed. */
    invalidExtension?: string;

    /** The information displayed about the allowed file extensions.
     * {0} will be replaced by a comma separated list of allowed extensions. */
    allowedFileExtensions?: string;
}