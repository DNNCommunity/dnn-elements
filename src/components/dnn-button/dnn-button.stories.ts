import readme from './readme.md';

export default {
    title: 'Components/dnn-button',
    component: 'dnn-button',
    parameters: {
        notes:  readme,
    }
};

const Template = (args) => `<dnn-button type=${args.type} reversed=${args.reversed} size=${args.size} confirm=${args.confirm} confirmYesText=${args.confirmYesText} confirmNoText=${args.confirmNoText} confirmMessage=${args.confirmMessage} disabled=${args.disabled}>Click Me</dnn-button>`;

export const Example = Template.bind({});
Example.args = {
    type: 'primary',
    reversed: false,
    size: 'medium',
    confirm: false,
    confirmYesText: 'Yes',
    confirmNoText: 'No',
    confirmMessage: 'Are you sure?',
    disabled: false,
};