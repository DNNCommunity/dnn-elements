export default {
    // This creates a 'Components' folder and a 'dnn-button' subfolder
    title: 'Compenents/dnn-button',
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