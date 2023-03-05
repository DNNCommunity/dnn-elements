import { html } from "lit-html";
import { ifDefined } from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import readme from './readme.md';
export default {
  title: 'Elements/Modal',
  component: 'dnn-modal',
  parameters: {
    actions: {
      handles: ['dismissed'],
    },
    notes: readme,
  },
  argTypes: {
    'backdrop-dismiss': {
      control: 'boolean',
    },
    'close-text': {
      control: 'text',
    },
    'show-close-button': {
      control: 'boolean',
    },
    'visible': {
      control: 'boolean',
    }
  },
};
const Template = (args) => html `
        <dnn-modal
            ?backdrop-dismiss=${ifDefined(args.backdropDismiss)}
            close-text=${ifDefined(args.closeText)}
            ?show-close-button=${ifDefined(args.showCloseButton)}
            ?visible=${ifDefined(args.visible)}>
            ${unsafeHTML(args.slot)}
        </dnn-modal>
    `;
export const Modal = Template.bind({});
Modal.args = {
  backdropDismiss: true,
  closeText: 'Close modal',
  showCloseButton: true,
  visible: true,
  slot: `<h1>Welcome to the DNN Modal</h1>
        <p>This is a modal component that can be used to display content to the user.</p>`
};
//# sourceMappingURL=dnn-modal.stories.js.map
