import{b as t}from"./iframe-mofKu0_g.js";import{o}from"./if-defined-BCYi6Oyr.js";import"./preload-helper-PPVm8Dsz.js";const r=`# dnn-dropzone



<!-- Auto Generated Below -->


## Usage

### HTML

### Most basic usage

\`\`\`html
<dnn-dropzone id="dz"></dnn-dropzone>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const dz = document.getElementById('dz');
    dz.addEventListener('filesSelected', e => console.log('files', e.detail));
  });
<\/script>
\`\`\`

Notes:
- \`dnn-dropzone\` emits \`filesSelected\` with the selected FileList.


### JSX-TSX

### JSX / TSX usage

\`\`\`tsx
render() {
  return (
    <dnn-dropzone onFilesSelected={e => console.log(e.detail)} />
  );
}
\`\`\`

Notes:
- Use a framework ref to call methods on the element if needed.



## Properties

| Property            | Attribute           | Description                                                                                                                                   | Type                        | Default     |
| ------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ----------- |
| \`allowCameraMode\`   | \`allow-camera-mode\` | If true, will allow the user to take a snapshot using the device camera. (only works over https).                                             | \`boolean\`                   | \`false\`     |
| \`allowedExtensions\` | --                  | A list of allowed file extensions. If not specified, any file is allowed. Ex: ["jpg", "jpeg", "gif", "png"]                                   | \`string[] \\| undefined\`     | \`undefined\` |
| \`captureQuality\`    | \`capture-quality\`   | Specifies the jpeg quality for when the device camera is used to generate a picture. Needs to be a number between 0 and 1 and defaults to 0.8 | \`number\`                    | \`0.8\`       |
| \`maxFileSize\`       | \`max-file-size\`     | Max file size in bytes.                                                                                                                       | \`number \\| undefined\`       | \`undefined\` |
| \`multiple\`          | \`multiple\`          | If true, allows multiple file selection.                                                                                                      | \`boolean\`                   | \`false\`     |
| \`name\`              | \`name\`              | The name of the field when used in a form.                                                                                                    | \`string \\| undefined\`       | \`undefined\` |
| \`resx\`              | --                  | Localization strings                                                                                                                          | \`DropzoneResx \\| undefined\` | \`undefined\` |


## Events

| Event           | Description                    | Type                  |
| --------------- | ------------------------------ | --------------------- |
| \`filesSelected\` | Fires when file were selected. | \`CustomEvent<File[]>\` |


## CSS Custom Properties

| Name                      | Description                                          |
| ------------------------- | ---------------------------------------------------- |
| \`--border-color\`          | The color of the border.                             |
| \`--border-radius\`         | The radius of the controls borders.                  |
| \`--drop-background-color\` | The color of the background when a file is dropping. |


## Dependencies

### Used by

 - [dnn-example-form](../examples/dnn-example-form)
 - [dnn-image-cropper](../dnn-image-cropper)

### Graph
\`\`\`mermaid
graph TD;
  dnn-example-form --> dnn-dropzone
  dnn-image-cropper --> dnn-dropzone
  style dnn-dropzone fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`,{actions:a}=__STORYBOOK_MODULE_ACTIONS__,c={title:"Elements/Dropzone",component:"dnn-dropzone",tags:["autodocs"],parameters:{docs:{description:{component:r}}},argTypes:{allowedExtensions:{control:"text"},allowCameraMode:{control:"boolean"},captureQuality:{options:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],control:"number"},maxFileSize:{control:"number"}}};a("filesSelected");const i={dragAndDropFile:"Drag and drop a file",capture:"Capture",or:"or",takePicture:"Take a picture",uploadFile:"Upload a file"},l=e=>t`
        <dnn-dropzone
            resx=${e.resx}
            allowed-extensions=${o(e.allowedExtensions)}
            ?allow-camera-mode=${o(e.allCameraMode)}
            capture-quality=${o(e.captureQuality)}
            max-file-size=${o(e.maxFileSize)}>
        </dnn-dropzone>
    `,n=l.bind({});n.args={allowedExtensions:"jpg,jpeg,png,gif",allowCameraMode:!1,captureQuality:.8,resx:i};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => html\`
        <dnn-dropzone
            resx=\${args.resx}
            allowed-extensions=\${ifDefined(args.allowedExtensions)}
            ?allow-camera-mode=\${ifDefined(args.allCameraMode)}
            capture-quality=\${ifDefined(args.captureQuality)}
            max-file-size=\${ifDefined(args.maxFileSize)}>
        </dnn-dropzone>
    \``,...n.parameters?.docs?.source}}};const m=["Dropzone"];export{n as Dropzone,m as __namedExportsOrder,c as default};
