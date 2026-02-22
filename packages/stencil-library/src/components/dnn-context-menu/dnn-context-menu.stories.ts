import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import readme from "./readme.md?raw";

const meta: Meta = {
  title: 'Elements/ContextMenu',
  component: 'dnn-context-menu',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
  argTypes: {
    closeOnClick: { control: 'boolean' },
  },
};
export default meta;

const Template = (args) => html`
  <div style="height:240px; display:flex; align-items:center; justify-content:center;">
    <button id="target" style="padding:12px 18px;">Right click or press Enter/Space</button>

    <dnn-context-menu id="menu" .closeOnClick=${args.closeOnClick}>
      <div role="menuitem" style="padding:8px 12px; cursor:pointer;">Action 1</div>
      <div role="menuitem" style="padding:8px 12px; cursor:pointer;">Action 2</div>
      <div role="menuitem" style="padding:8px 12px; cursor:pointer;">Action 3</div>
    </dnn-context-menu>
  </div>

  <script>
    // Attach handlers after the story renders
    setTimeout(() => {
      const target = document.getElementById('target');
      const menu = document.getElementById('menu');

      if (!target || !menu) return;

      target.addEventListener('contextmenu', e => {
        e.preventDefault();
        menu.open(e);
      });

    }, 0);
  </script>
`;

type Story = StoryObj;

export const Primary: Story = Template.bind({});
Primary.args = {
  closeOnClick: true,
};
