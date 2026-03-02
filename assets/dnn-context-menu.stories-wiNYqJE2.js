import{b as r}from"./iframe-mofKu0_g.js";import"./preload-helper-PPVm8Dsz.js";const i=`# dnn-context-menu
Can be used to display a context menu.
The contents of the menu as entirely up to the user.
Items insile of \`dnn-context-menu\` that can be activated should have \`role="menuitem"\` or similar for accessibility reasons.


<!-- Auto Generated Below -->


## Usage

### HTML

### Most basic usage

\`\`\`html
<script type="text/javascript">
    document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('#target');
    const menu = document.querySelector('#menu');

    // Open on right-click or using the keyboard key for context menus.
    target.addEventListener('contextmenu', e => {
        e.preventDefault();
        menu.open(e);
  });
});
<\/script>

<button id="target">Open context menu</button>

<dnn-context-menu
    id="menu"
    close-on-click
>
  <div role="menuitem" tabindex="-1">Action 1</div>
  <div role="menuitem" tabindex="-1">Action 2</div>
  <div role="menuitem" tabindex="-1">Action 3</div>
</dnn-context-menu>
\`\`\`

Notes:
- Use \`menu.open(event)\` to open the menu from a pointer event.
- Use \`menu.close()\` to programatically close the menu if needed.


### JSX-TSX

### Most basic usage (JSX / TSX)

\`\`\`tsx
// In a Stencil / React / Preact environment you can call the component methods
// by querying the element reference and calling \`open\` with a PointerEvent.

private handleOpenMenu(e) {
    e.preventDefault();
    const menu = document.querySelector('#menu') as any;
    menu.open(e as PointerEvent);
}

render() {
  return (
      <button
          id="target"
          closeOnClick
          onContextMenu={e => this.handleOpenMenu }
      >
        <span>Open menu</span>
        <dnn-context-menu id="menu" close-on-click>
            <div>Option 1</div>
            <div>Option 2</div>
        </dnn-context-menu>
    </button>
  );
}
\`\`\`

Notes:
- In frameworks you can also keep a ref to the element instead of querySelector.
- \`close-on-click\` is a convenience boolean that will call \`close()\` when an item is clicked. You can instead call close() yourself if you need programatic control over closing.



## Properties

| Property       | Attribute        | Description                                           | Type      | Default |
| -------------- | ---------------- | ----------------------------------------------------- | --------- | ------- |
| \`closeOnClick\` | \`close-on-click\` | If true, the menu will close when an item is clicked. | \`boolean\` | \`false\` |


## Methods

### \`close() => Promise<void>\`

Closes the menu.

#### Returns

Type: \`Promise<void>\`



### \`open(event: PointerEvent) => Promise<void>\`

Opens the menu using a pointer event.

#### Parameters

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| \`event\` | \`PointerEvent\` |             |

#### Returns

Type: \`Promise<void>\`




## CSS Custom Properties

| Name                 | Description                               |
| -------------------- | ----------------------------------------- |
| \`--color-background\` | The background color of the context menu. |
| \`--color-border\`     | The border color of the context menu.     |
| \`--padding\`          | The padding inside the context menu.      |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`;var t=Object.freeze,c=Object.defineProperty,s=(n,d)=>t(c(n,"raw",{value:t(n.slice())})),o;const m={title:"Elements/ContextMenu",component:"dnn-context-menu",tags:["autodocs"],parameters:{docs:{description:{component:i}}},argTypes:{closeOnClick:{control:"boolean"}}},a=n=>r(o||(o=s([`
  <div style="height:240px; display:flex; align-items:center; justify-content:center;">
    <button id="target" style="padding:12px 18px;">Right click or press Enter/Space</button>

    <dnn-context-menu id="menu" .closeOnClick=`,`>
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
  <\/script>
`])),n.closeOnClick),e=a.bind({});e.args={closeOnClick:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => html\`
  <div style="height:240px; display:flex; align-items:center; justify-content:center;">
    <button id="target" style="padding:12px 18px;">Right click or press Enter/Space</button>

    <dnn-context-menu id="menu" .closeOnClick=\${args.closeOnClick}>
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
  <\/script>
\``,...e.parameters?.docs?.source}}};const p=["Primary"];export{e as Primary,p as __namedExportsOrder,m as default};
