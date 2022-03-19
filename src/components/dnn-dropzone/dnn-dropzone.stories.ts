import { html } from "lit-html";
import { ifDefined } from 'lit-html/directives/if-defined';
import { Meta } from "@storybook/web-components";
import readme from './readme.md';

export default {
    title: 'Elements/Dropzone',
    component: 'dnn-dropzone',
    parameters: {
        actions: {
            handles: ['filesSelected'],
        },
        notes:  readme,
    },
    argTypes: {
        'allowedExtensions': {
            control: 'text',
        },
        'allowCameraMode': {
            control: 'boolean',
          },
        },
        'captureQuality': {
            options: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
            control: 'number',
        }
} as Meta;

const resx:{
    dragAndDropFile: string;
    capture: string;
    or: string;
    takePicture: string;
    uploadFile: string;
} = {
    dragAndDropFile: "Drag and drop a file",
    capture: "Capture",
    or: "or",
    takePicture: "Take a picture",
    uploadFile: "Upload a file",
};

const Template = (args) =>
    html`
        <dnn-dropzone
            .resx=${args.resx}
            allowed-extensions=${ifDefined(args.allowedExtensions)}
            ?allow-camera-mode=${ifDefined(args.allCameraMode)}
            capture-quality=${ifDefined(args.captureQuality)}>
        </dnn-dropzone>
    `;

export const Dropzone = Template.bind({});
Dropzone.args = {
    allowedExtensions: 'jpg,jpeg,png,gif',
    allowCameraMode: false,
    captureQuality: 0.8,
    resx,
};
