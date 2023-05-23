import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { actions } from '@storybook/addon-actions';
import readme from "./readme.md";

const meta: Meta = {
    title: "Elements/Collapsible",
    component: "dnn-collapsible",
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
              component: readme,
            }
        }
    },
    argTypes: {
        expanded: {
            type: "boolean",
        },
        transitionDuration: {
            type: "number",
            control: "number",
        },
    }
} 
export default meta;

const eventsFromNames = actions('dnnCollapsibleHeightChanged');




const Template = (args: { expanded: boolean; transitionDuration: number; }) => {
    const chevronOne = document.querySelector('#dnn-chevron1')
    
    const clickHandler = (e: MouseEvent) => {
        const collapsibleOne = document.querySelector('#dnn-collapsible1');
        console.log(collapsibleOne);
        
        (collapsibleOne as any).expanded = e.detail
    }

    return (
    html`
        <div class="collapse-row">
            <style type="text/css">
                .collapse-row{
                    border: 1px solid grey;
                }
                .collapse-row .collapse-title{
                    display:flex;
                    align-items: center;
                    background-color: whitesmoke;
                }
                .collapse-row .collapse-title>*{
                    margin: 10px;
                }
            </style>
            <div class="collapse-title">
                <dnn-chevron @changed=${clickHandler} expanded=${args.expanded} id="dnn-chevron1"></dnn-chevron>
                <strong>Collapsible Panel</strong>
            </div>
            <dnn-collapsible ?expanded=${ifDefined(args.expanded)} id="dnn-collapsible1" transition-duration="300">
                <div id="collapsible-slot-content" style="padding: 15px;">
                    <h2>Details</h2>
                    <p>
                        Spicy jalapeno bacon ipsum dolor amet bresaola kielbasa doner ham hock biltong, swine shoulder leberkas cupim. Sausage capicola buffalo, tongue jerky frankfurter biltong pork swine landjaeger. Porchetta alcatra burgdoggen beef ribs short ribs corned beef, biltong flank bresaola kielbasa. Ham hock beef kielbasa, cupim cow beef ribs doner. T-bone cow shoulder chuck pastrami. Alcatra pig filet mignon shank. Pancetta shankle meatloaf sausage meatball cupim.
                    </p>
                </div>
            </div>
            </dnn-collapsible>
        </div>
    `);
}

type Story = StoryObj;

export const Collapsible: Story = Template.bind({});
Collapsible.args = {
    expanded: false,
    transitionDuration: 150,
};