import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { actions } from '@storybook/addon-actions';
import readme from "./readme.md";


const meta: Meta = {
    title: 'Elements/Vertical Splitview',
    component: 'dnn-vertical-splitview',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
              component: readme,
            }
        }
    },
    argTypes: {
        splitterWidth: {
            control: 'number',
        },
        splitWidthPercentage: {
            control: 'number',
        },
        leftPaneBackgroundColor: {
            control: 'color',
        },
        rightPaneBackgroundColor: {
            control: 'color',
        },
    }
}
export default meta;

const eventsFromNames = actions('widthChanged', );

const Template = (args: {
    splitterWidth: number,
    splitWidthPercentage: number,
}, context) => 
    html`
<dnn-vertical-splitview
    id="split-view-demo"
    splitter-width=${ifDefined(args.splitterWidth)}
    split-width-percentage=${ifDefined(args.splitWidthPercentage)}
    @setSplitWidthPercentage>
    <div style="height: 100%;
        display: flex;
        align-items: center;
        box-shadow: inset 8px 0 8px -8px grey;
        position: absolute;
        top:0;">
        <button
            id="vertical-splitview-button"
            style="margin: 0;
            padding: 0;
            width: 24px;
            height: 24px;
            border: 1px solid lightgray;
            border-radius: 50%;
            background-color: white;
            box-shadow: 2px 2px 4px rgb(0 0 0 / 20%);
            position: relative;
            left: -12px;"
        >
        &lt;&gt;
    </button>
    </div>
    <div slot="left" style="padding: 1em;">
        <p>Laboris velit ullamco reprehenderit incididunt culpa id do voluptate non. Do et officia ad ullamco et. Aliqua dolor nostrud velit ex duis adipisicing sit consectetur ea id nostrud sit labore. Voluptate culpa ut anim pariatur.</p>
        <p>Officia tempor anim nulla irure elit excepteur velit ea mollit non minim ad duis. Mollit in et sint adipisicing in tempor et fugiat. Laborum id pariatur ut deserunt anim esse ullamco officia dolor labore proident esse. Reprehenderit adipisicing eu irure officia labore sint velit. Anim consequat incididunt tempor excepteur dolor consequat eiusmod dolore adipisicing consectetur. Incididunt aliqua eiusmod sint proident nisi nostrud minim quis mollit tempor.</p>
        <p>Anim aute duis excepteur ipsum mollit. Ea officia elit amet qui labore reprehenderit pariatur laboris amet exercitation eu et. Ad Lorem aute exercitation amet. Est excepteur occaecat id consequat consequat.</p>
    </div>
    <div slot="right" style="padding: 1em;">
    <p>Deserunt occaecat incididunt ipsum consectetur ullamco nulla qui sunt nostrud. Laborum incididunt enim culpa exercitation nisi dolore duis do sit deserunt cillum ullamco. Et incididunt nisi consectetur et cillum proident consectetur dolor cupidatat mollit magna. Ut Lorem incididunt sit consequat culpa mollit do officia. Amet eu proident non enim eu id mollit et occaecat. Ut dolor consectetur Lorem minim Lorem culpa quis nostrud elit reprehenderit labore sint. Officia dolore dolore ullamco tempor cupidatat est amet.</p>
    <p>Consequat cillum ex elit pariatur laborum ullamco qui est nisi tempor ullamco. Dolor proident ipsum cupidatat culpa quis est amet exercitation veniam proident nulla consequat quis anim. Lorem exercitation incididunt aliqua sit nisi.</p>
    <p>Consectetur elit tempor Lorem nostrud non cillum aliquip. Culpa culpa eu est est id deserunt exercitation elit occaecat enim in velit. Reprehenderit nostrud reprehenderit ex cillum pariatur enim. Amet minim elit quis excepteur exercitation eiusmod amet labore. Officia culpa exercitation do eu in ad id qui eiusmod aliqua id ex. Aliqua ullamco fugiat ex magna ex dolore fugiat consectetur mollit consequat consequat nulla et. Ea eu Lorem non officia pariatur nostrud.</p>
    </div>
</dnn-vertical-splitview>
    `;

type Story = StoryObj;

export const VerticalSplitview: StoryObj = Template.bind({});
VerticalSplitview.args = {
    splitterWidth: 16,
    splitWidthPercentage: 30,
};