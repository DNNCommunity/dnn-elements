/**
* Formats a number (in bytes) to a human readable file size.
*/
export function getReadableFileSizeString (fileSizeInBytes: number) : string {
    let i = -1
    const byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB']
    if (fileSizeInBytes === 0) return `0${byteUnits[0]}`
    do {
      fileSizeInBytes = fileSizeInBytes / 1024
      i++
    } while (fileSizeInBytes > 1024)

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i]
};