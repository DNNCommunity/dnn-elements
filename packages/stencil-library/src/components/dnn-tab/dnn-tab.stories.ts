import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import readme from "./readme.md";


const meta: Meta = {
    title: 'Elements/Tab',
    component: 'dnn-tab',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
              component: readme,
            }
        }
    },
    argTypes: {
        'tab-title': {
            control: 'text',
        },
    }
} 
export default meta;

const Template = (args) =>
    html`
    <dnn-tabs >
      <dnn-tab tab-title=${ifDefined(args.tabTitle) + " 1"}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit nisl vel aliquam cursus. Fusce tincidunt vitae mi a malesuada. Praesent eros mi, semper ut orci quis, faucibus viverra felis. Cras non lacus vehicula, fermentum felis id, dictum diam. Proin congue urna est, ac viverra ligula sagittis eu. Proin diam libero, vulputate egestas dui at, molestie dictum dolor. Fusce varius ex vitae massa pulvinar, ut hendrerit enim molestie. Aliquam volutpat facilisis ipsum, nec mollis elit dapibus eu. Donec scelerisque interdum tristique. Aliquam accumsan sem urna, vel posuere dui faucibus et. Mauris quis rutrum massa.</p>
        <p>Curabitur nisl tortor, egestas a lacus eu, consectetur ornare erat. Praesent auctor ante gravida rutrum dictum. Praesent congue in enim sed ornare. In at ultrices mauris. Donec vulputate ante vel lectus ullamcorper varius. Nullam ac dui velit. Quisque porttitor, eros id interdum posuere, turpis nisi convallis ex, quis venenatis massa eros sit amet ex. Donec sem quam, consectetur at consectetur quis, suscipit sit amet ligula. Morbi nec lectus iaculis, dapibus lorem eget, molestie dui. Sed porttitor lacus ut hendrerit vulputate. Cras efficitur nec ligula ut lobortis. Cras aliquam, magna ac condimentum ullamcorper, sapien dolor varius sapien, sed volutpat lorem felis et nulla.</p>
      </dnn-tab>
      <dnn-tab tab-title=${ifDefined(args.tabTitle) + " 2"}>
        <p> Consectetur adipiscing elit. Nulla hendrerit nisl vel aliquam cursus. Fusce tincidunt vitae mi a malesuada. Praesent eros mi, semper ut orci quis, faucibus viverra felis. Cras non lacus vehicula, fermentum felis id, dictum diam. Proin congue urna est, ac viverra ligula sagittis eu. Proin diam libero, vulputate egestas dui at, molestie dictum dolor. Fusce varius ex vitae massa pulvinar, ut hendrerit enim molestie. Aliquam volutpat facilisis ipsum, nec mollis elit dapibus eu. Donec scelerisque interdum tristique. Aliquam accumsan sem urna, vel posuere dui faucibus et. Mauris quis rutrum massa.</p>
        <p> Egestas a lacus eu, consectetur ornare erat. Praesent auctor ante gravida rutrum dictum. Praesent congue in enim sed ornare. In at ultrices mauris. Donec vulputate ante vel lectus ullamcorper varius. Nullam ac dui velit. Quisque porttitor, eros id interdum posuere, turpis nisi convallis ex, quis venenatis massa eros sit amet ex. Donec sem quam, consectetur at consectetur quis, suscipit sit amet ligula. Morbi nec lectus iaculis, dapibus lorem eget, molestie dui. Sed porttitor lacus ut hendrerit vulputate. Cras efficitur nec ligula ut lobortis. Cras aliquam, magna ac condimentum ullamcorper, sapien dolor varius sapien, sed volutpat lorem felis et nulla.</p>
      </dnn-tab>
      <dnn-tab tab-title=${ifDefined(args.tabTitle) + " 3"}>
        <p> Fidunt vitae mi a malesuada. Praesent eros mi, semper ut orci quis, faucibus viverra felis. Cras non lacus vehicula, fermentum felis id, dictum diam. Proin congue urna est, ac viverra ligula sagittis eu. Proin diam libero, vulputate egestas dui at, molestie dictum dolor. Fusce varius ex vitae massa pulvinar, ut hendrerit enim molestie. Aliquam volutpat facilisis ipsum, nec mollis elit dapibus eu. Donec scelerisque interdum tristique. Aliquam accumsan sem urna, vel posuere dui faucibus et. Mauris quis rutrum massa.</p>
        <p> Gravida rutrum dictum. Praesent congue in enim sed ornare. In at ultrices mauris. Donec vulputate ante vel lectus ullamcorper varius. Nullam ac dui velit. Quisque porttitor, eros id interdum posuere, turpis nisi convallis ex, quis venenatis massa eros sit amet ex. Donec sem quam, consectetur at consectetur quis, suscipit sit amet ligula. Morbi nec lectus iaculis, dapibus lorem eget, molestie dui. Sed porttitor lacus ut hendrerit vulputate. Cras efficitur nec ligula ut lobortis. Cras aliquam, magna ac condimentum ullamcorper, sapien dolor varius sapien, sed volutpat lorem felis et nulla.</p>
      </dnn-tab>
    </dnn-tabs>

    `;

type Story = StoryObj;

export const Tab: Story = Template.bind({});
Tab.args = {
    tabTitle: 'Tab',
};