import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { actions } from '@storybook/addon-actions';
import readme from "./readme.md";

const meta: Meta = {
    title: 'Elements/Image Cropper',
    component: 'dnn-image-cropper',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
              component: readme,
            }
        }
    },
    argTypes: {
        width: {
            control: 'number',
        },
        height: {
            control: 'number',
        },
        allowedExtensions: {
            control: 'text',
        },
        quality: {
            options: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
            control: 'number',
        },
        preventUndersized: {
            control: 'boolean',
          },
        },
} 

export default meta;

const eventsFromNames = actions('imageCropChanged', );
let image:string = "";
let imageShowing:boolean = false;


const resx:{
    capture: string;
    dragAndDropFile: string;
    or: string;
    takePicture: string;
    uploadFile: string;
    imageTooSmall: string;
    modalCloseText: string;
} = {
    capture: "Capture",
    dragAndDropFile: "Drag and drop an image",
    or: "or",
    takePicture: "Take a picture",
    uploadFile: "Upload an image",
    imageTooSmall: "The image you are attempting to upload does not meet the minimum size requirement of {width} pixels by {height} pixels. Please upload a larger image.",
    modalCloseText: "Close",
}

const Template = (args) =>
    html`
        <dnn-image-cropper id="cropper"
            .resx=${args.resx}
            width=${ifDefined(args.width)}
            height=${ifDefined(args.height)}
            allowed-extensions=${ifDefined(args.allowedExtensions)}
            quality=${ifDefined(args.captureQuality)}
            ?prevent-undersized=${ifDefined(args.preventUndersized)}
            @imageCropChanged = ${ (e)=> { 
                image = e.detail 
            }}>
        </dnn-image-cropper>
        <div style = ${"display:grid; place-items:center"}>

            <button id="confirmCrop" style=${"margin:10px;"} @click=${() => {  
                (document.querySelector("#cropper") as HTMLDivElement ).style.display = "none";
                (document.querySelector("#confirmCrop") as HTMLButtonElement ).style.display = "none";
                (document.querySelector("#PostConfirmCrop") as HTMLDivElement ).style.display = "flex";
                (document.querySelector("#displayImg") as HTMLImageElement ).src = image;
                (document.querySelector("#link") as HTMLAnchorElement ).href = image;
            }}>Confirm crop</button>
            
            
        </div>
        <!-- displayed after clicking Confirm Crop -->
        <div style=${"display:none; flex-direction:column;align-items: center; "} id="PostConfirmCrop">
            <img id="displayImg" style="margin:10px;" /> 
            <button style=${"margin:10px;"} @click=${()=> {
                window.location.reload();
            }}            
            >Change</button>         
            <a style=${"margin:10px;"} download="fakeImage.jpeg" id="link" >download</a>
        </div>
    `
    ;

type Story = StoryObj;

export const ImageCropper: Story = Template.bind({});
ImageCropper.args = {
    width: 600,
    height: 600,
    allowedExtensions: 'jpg,jpeg,png,gif',
    quality: 0.8,
    preventUndersized: false,
    resx,
};