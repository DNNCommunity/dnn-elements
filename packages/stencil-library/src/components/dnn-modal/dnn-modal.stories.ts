import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { actions } from '@storybook/addon-actions';
import readme from "./readme.md";

const meta: Meta = {
    title: 'Elements/Modal',
    component: 'dnn-modal',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
              component: readme,
            }
          }
    },
    argTypes: {
        backdropDismiss: {
            control: 'boolean',
        },
        closeText: {
            control: 'text',
        },
        showCloseButton: {
          control: 'boolean',
        },
        visible: {
            control: 'boolean',
        }
      },
} 

export default meta;

const eventsFromNames = actions('dismissed',);

const Template = (args) =>
    html`
        <dnn-modal
            ?backdrop-dismiss=${ifDefined(args.backdropDismiss)}
            close-text=${ifDefined(args.closeText)}
            ?show-close-button=${ifDefined(args.showCloseButton)}
            ?visible=${ifDefined(args.visible)}>
            ${unsafeHTML(args.slot)}
        </dnn-modal>
    `;

type Story = StoryObj;

export const Modal: Story = Template.bind({});
Modal.args = {
    backdropDismiss: true,
    closeText: 'Close modal',
    showCloseButton: true,
    visible: true,
    slot: `<h1>Welcome to the DNN Modal</h1>
        <p>This is a modal component that can be used to display content to the user.</p>`
};