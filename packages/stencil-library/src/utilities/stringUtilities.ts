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

/** Takes an html encoded string and converts it to actual decoded html. */
export function decodeHtml(html: string) : string {
  if (!html){
    return '';
  }

  const txt = document.createElement('textarea')
  txt.innerHTML = html
  return txt.value
}

export function generateRandomId(length: number = 16){
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  const array = new Uint8Array(length);
  
  window.crypto.getRandomValues(array);

  for (let i = 0; i < length; i++) {
    const randomValue = array[i];
    result += characters.charAt(randomValue % charactersLength);
  }

  return result;
}