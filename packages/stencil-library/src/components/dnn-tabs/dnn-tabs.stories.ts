import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import readme from "./readme.md";

const meta: Meta = {
    title: 'Elements/Tabs',
    component: 'dnn-tabs',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
              component: readme,
            }
        }
    },
    argTypes: {
        colorBackground: {
            control: 'color'
        },
        colorFocus: {
            control: 'color'
        },
        colorText: {
            control: 'color'
        },
        colorVisible: {
            control: 'color'
        },
        colorVisibleText: {
            control: 'color'
        },
    }
} 
export default meta;

const Template = (args: {}, context) => {
 
    return html`
<style type="text/css">
    dnn-tab p{
        margin: 1em;
    }
</style>
    <dnn-tab tab-title="Lorem Ipsum">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit nisl vel aliquam cursus. Fusce tincidunt vitae mi a malesuada. Praesent eros mi, semper ut orci quis, faucibus viverra felis. Cras non lacus vehicula, fermentum felis id, dictum diam. Proin congue urna est, ac viverra ligula sagittis eu. Proin diam libero, vulputate egestas dui at, molestie dictum dolor. Fusce varius ex vitae massa pulvinar, ut hendrerit enim molestie. Aliquam volutpat facilisis ipsum, nec mollis elit dapibus eu. Donec scelerisque interdum tristique. Aliquam accumsan sem urna, vel posuere dui faucibus et. Mauris quis rutrum massa.</p>
        <p>Curabitur nisl tortor, egestas a lacus eu, consectetur ornare erat. Praesent auctor ante gravida rutrum dictum. Praesent congue in enim sed ornare. In at ultrices mauris. Donec vulputate ante vel lectus ullamcorper varius. Nullam ac dui velit. Quisque porttitor, eros id interdum posuere, turpis nisi convallis ex, quis venenatis massa eros sit amet ex. Donec sem quam, consectetur at consectetur quis, suscipit sit amet ligula. Morbi nec lectus iaculis, dapibus lorem eget, molestie dui. Sed porttitor lacus ut hendrerit vulputate. Cras efficitur nec ligula ut lobortis. Cras aliquam, magna ac condimentum ullamcorper, sapien dolor varius sapien, sed volutpat lorem felis et nulla.</p>
    </dnn-tab>
    <dnn-tab tab-title="Bacon Ipsum">
        <p>Bacon ipsum dolor amet kielbasa kevin prosciutto andouille doner burgdoggen ham. Flank pork belly ham landjaeger venison, cow chicken andouille. Frankfurter pork swine alcatra meatloaf drumstick capicola. Sausage landjaeger strip steak swine ribeye kielbasa. Kevin tongue andouille drumstick landjaeger shank porchetta pork beef sirloin fatback. Prosciutto tri-tip burgdoggen, chislic ham flank bresaola shank tenderloin. Capicola pancetta sirloin hamburger cupim, shankle ground round kevin flank landjaeger meatball chuck beef short ribs ball tip.</p>
        <p>Turducken leberkas doner, hamburger venison meatloaf sausage cow pork chop pork strip steak short ribs salami alcatra beef. Pastrami tenderloin sausage turkey hamburger pork sirloin pork belly burgdoggen spare ribs bacon jowl. Tail spare ribs filet mignon kevin, swine flank drumstick jerky pork loin beef ribs pork belly fatback ground round. Short ribs tail jowl jerky kevin, cow burgdoggen pancetta. Corned beef tri-tip pastrami pork chop bresaola chuck.</p>
    </dnn-tab>
    <dnn-tab tab-title="CupCake Ipsum">
        <p>Candy cookie pie caramels soufflé danish. Wafer cake gummies soufflé biscuit dragée cheesecake cheesecake. Cookie tart fruitcake oat cake bear claw macaroon jelly beans. Sesame snaps sugar plum sugar plum halvah shortbread chocolate bar pastry. Wafer caramels cake marzipan oat cake apple pie cake halvah cake. Lollipop muffin gummies jujubes lollipop topping bonbon pastry.</p>
        <p>Gingerbread sesame snaps toffee cake cheesecake gummies cake. Danish cake sweet sweet roll oat cake gummi bears shortbread bear claw. Croissant gummi bears cake danish tart gingerbread tootsie roll carrot cake jelly beans. Liquorice biscuit pastry cake carrot cake marzipan. Brownie gummies halvah chocolate cake donut. Gummi bears cotton candy jujubes macaroon gingerbread.</p>
    </dnn-tab>
</dnn-tabs>
    `;
}

type Story = StoryObj;

export const Tabs: Story = Template.bind({});