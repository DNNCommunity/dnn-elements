import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { actions } from '@storybook/addon-actions';
import readme from "./readme.md";


const meta: Meta = {
    title: 'Elements/Dropzone',
    component: 'dnn-dropzone',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
              component: readme,
            }
        }
    },
    argTypes: {
        allowedExtensions: {
            control: 'text',
        },
        allowCameraMode: {
            control: 'boolean',
        }
        ,
        captureQuality: {
            options: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
            control: 'number',
         }
    }
}
export default meta;

const eventsFromNames = actions('filesSelected', )

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

type Story = StoryObj;

export const Dropzone: Story = Template.bind({});
Dropzone.args = {
    allowedExtensions: 'jpg,jpeg,png,gif',
    allowCameraMode: false,
    captureQuality: 0.8,
    resx,
};