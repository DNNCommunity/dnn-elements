/** Creates a file object with only a dataUrl and a filename.*/
export function dataURLtoFile(dataUrl: string, filename: string): File
{
    // A dataUrl has metadate before the coma and the data after.
    let dataUrlParts = dataUrl.split(',');
    let mime = dataUrlParts[0].match(/:(.*?);/)[1]; // Extract mime type
    let binaryString = atob(dataUrlParts[1]); // Decode base64 (convert ascii to binary)
    let length = binaryString.length;
    
    // Assign binary data to typed array
    let u8arr = new Uint8Array(length); // Create an 8-bit unsigned array
    while (length > 0) {
        length--;
        u8arr[length] = binaryString.charCodeAt(length);
    }

    // Create a blob from the typed array and specify the MIME type
    let blob = new Blob([u8arr], { type: mime });

    // Return a File object based on the Blob
    return new File([blob], filename, { type: mime });
}