import{k as l}from"./lit-element-BIeOw4Bz.js";import{t as n}from"./if-defined-BfYbxOUB.js";import{a as s}from"./index-BMoMLr6o.js";import"./v4-CtRu48qb.js";const p=`# dnn-image-cropper



<!-- Auto Generated Below -->


## Overview

Allows cropping an image in-browser with the option to enforce a specific final size.
All computation happens in the browser and the final image is emmited
in an event that has a data-url of the image.

## Properties

| Property            | Attribute            | Description                                                                                                                                 | Type                            | Default     |
| ------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ----------- |
| \`height\`            | \`height\`             | Sets the desired final image height.                                                                                                        | \`number \\| undefined\`           | \`undefined\` |
| \`name\`              | \`name\`               | The name of the control when used in a form.                                                                                                | \`string \\| undefined\`           | \`undefined\` |
| \`preventUndersized\` | \`prevent-undersized\` | When set to true, prevents cropping an image smaller than the required size, which would blow pixel and make the final picture look blurry. | \`boolean\`                       | \`false\`     |
| \`quality\`           | \`quality\`            | Sets the output quality of the cropped image (number between 0 and 1).                                                                      | \`number\`                        | \`0.8\`       |
| \`resx\`              | \`resx\`               | Can be used to customize controls text. Some values support tokens, see default values for examples.                                        | \`ImageCropperResx \\| undefined\` | \`undefined\` |
| \`width\`             | \`width\`              | Sets the desired final image width.                                                                                                         | \`number \\| undefined\`           | \`undefined\` |


## Events

| Event                  | Description                                                                                                                                                                                                          | Type                  |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| \`imageCropChanged\`     | When the image crop changes, emits the dataurl for the new cropped image.                                                                                                                                            | \`CustomEvent<string>\` |
| \`imageFileCropChanged\` | Emits both when a file is initially select and when the crop has changed. Compared to imageCropChanged, this event emits the file itself, which can be useful for uploading the file to a server including its name. | \`CustomEvent<File>\`   |


## Methods

### \`clear() => Promise<void>\`

Clears the current image and crop (resets the component).

#### Returns

Type: \`Promise<void>\`




## Dependencies

### Used by

 - [dnn-example-form](../examples/dnn-example-form)

### Depends on

- [dnn-dropzone](../dnn-dropzone)
- [dnn-modal](../dnn-modal)

### Graph
\`\`\`mermaid
graph TD;
  dnn-image-cropper --> dnn-dropzone
  dnn-image-cropper --> dnn-modal
  dnn-example-form --> dnn-image-cropper
  style dnn-image-cropper fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`,y={title:"Elements/Image Cropper",component:"dnn-image-cropper",tags:["autodocs"],parameters:{docs:{description:{component:p}}},argTypes:{width:{control:"number"},height:{control:"number"},allowedExtensions:{control:"text"},quality:{options:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],control:"number"},preventUndersized:{control:"boolean"}}};s("imageCropChanged");let i="";const m={capture:"Capture",dragAndDropFile:"Drag and drop an image",or:"or",takePicture:"Take a picture",uploadFile:"Upload an image",imageTooSmall:"The image you are attempting to upload does not meet the minimum size requirement of {width} pixels by {height} pixels. Please upload a larger image.",modalCloseText:"Close"},c=e=>l`
        <dnn-image-cropper id="cropper"
            .resx=${e.resx}
            width=${n(e.width)}
            height=${n(e.height)}
            allowed-extensions=${n(e.allowedExtensions)}
            quality=${n(e.captureQuality)}
            ?prevent-undersized=${n(e.preventUndersized)}
            @imageCropChanged = ${d=>{i=d.detail}}>
        </dnn-image-cropper>
        <div style = ${"display:grid; place-items:center"}>

            <button id="confirmCrop" style=${"margin:10px;"} @click=${()=>{document.querySelector("#cropper").style.display="none",document.querySelector("#confirmCrop").style.display="none",document.querySelector("#PostConfirmCrop").style.display="flex",document.querySelector("#displayImg").src=i,document.querySelector("#link").href=i}}>Confirm crop</button>
            
            
        </div>
        <!-- displayed after clicking Confirm Crop -->
        <div style=${"display:none; flex-direction:column;align-items: center; "} id="PostConfirmCrop">
            <img id="displayImg" style="margin:10px;" /> 
            <button style=${"margin:10px;"} @click=${()=>{window.location.reload()}}            
            >Change</button>         
            <a style=${"margin:10px;"} download="fakeImage.jpeg" id="link" >download</a>
        </div>
    `,t=c.bind({});t.args={width:600,height:600,allowedExtensions:"jpg,jpeg,png,gif",quality:.8,preventUndersized:!1,resx:m};var o,r,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => html\`
        <dnn-image-cropper id="cropper"
            .resx=\${args.resx}
            width=\${ifDefined(args.width)}
            height=\${ifDefined(args.height)}
            allowed-extensions=\${ifDefined(args.allowedExtensions)}
            quality=\${ifDefined(args.captureQuality)}
            ?prevent-undersized=\${ifDefined(args.preventUndersized)}
            @imageCropChanged = \${e => {
  image = e.detail;
}}>
        </dnn-image-cropper>
        <div style = \${"display:grid; place-items:center"}>

            <button id="confirmCrop" style=\${"margin:10px;"} @click=\${() => {
  (document.querySelector("#cropper") as HTMLDivElement).style.display = "none";
  (document.querySelector("#confirmCrop") as HTMLButtonElement).style.display = "none";
  (document.querySelector("#PostConfirmCrop") as HTMLDivElement).style.display = "flex";
  (document.querySelector("#displayImg") as HTMLImageElement).src = image;
  (document.querySelector("#link") as HTMLAnchorElement).href = image;
}}>Confirm crop</button>
            
            
        </div>
        <!-- displayed after clicking Confirm Crop -->
        <div style=\${"display:none; flex-direction:column;align-items: center; "} id="PostConfirmCrop">
            <img id="displayImg" style="margin:10px;" /> 
            <button style=\${"margin:10px;"} @click=\${() => {
  window.location.reload();
}}            
            >Change</button>         
            <a style=\${"margin:10px;"} download="fakeImage.jpeg" id="link" >download</a>
        </div>
    \``,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const C=["ImageCropper"];export{t as ImageCropper,C as __namedExportsOrder,y as default};
