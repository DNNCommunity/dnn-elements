import{k as n}from"./lit-element-BIeOw4Bz.js";import{t}from"./if-defined-BfYbxOUB.js";const r=`# dnn-tab

\`dnn-tab\` should only be used as part of \`dnn-tabs\` in order to define the title and content of each of the tabs.

<!-- Auto Generated Below -->


## Overview

Represents a single tab and must be used inside a dnn-tabs element.

## Usage

### HTML

\`\`\`html
<dnn-tabs>
    <dnn-tab tab-title="First Tab">
        <p>Content of the first tab.</p>
    </dnn-tab>
    <dnn-tab tab-title="Second Tab">
        <p>This is the second tab</p>
    </dnn-tab>
</dnn-tabs>
\`\`\`


### JSX-TSX

\`\`\`tsx
<dnn-tabs>
    <dnn-tab tabTitle="First Tab">
        <p>Content of the first tab.</p>
    </dnn-tab>
    <dnn-tab tabTitle="Second Tab">
        <p>This is the second tab</p>
    </dnn-tab>
</dnn-tabs>
\`\`\`



## Properties

| Property                | Attribute   | Description            | Type     | Default     |
| ----------------------- | ----------- | ---------------------- | -------- | ----------- |
| \`tabTitle\` _(required)_ | \`tab-title\` | Defines the tab title. | \`string\` | \`undefined\` |


## Methods

### \`hide() => Promise<void>\`

Hides the modal

#### Returns

Type: \`Promise<void>\`



### \`show() => Promise<void>\`

Shows the tab.

#### Returns

Type: \`Promise<void>\`




## Dependencies

### Used by

 - [dnn-color-input](../dnn-color-input)

### Graph
\`\`\`mermaid
graph TD;
  dnn-color-input --> dnn-tab
  style dnn-tab fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`,m={title:"Elements/Tab",component:"dnn-tab",tags:["autodocs"],parameters:{docs:{description:{component:r}}},argTypes:{"tab-title":{control:"text"}}},l=i=>n`
    <dnn-tabs >
      <dnn-tab tab-title=${t(i.tabTitle)+" 1"}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit nisl vel aliquam cursus. Fusce tincidunt vitae mi a malesuada. Praesent eros mi, semper ut orci quis, faucibus viverra felis. Cras non lacus vehicula, fermentum felis id, dictum diam. Proin congue urna est, ac viverra ligula sagittis eu. Proin diam libero, vulputate egestas dui at, molestie dictum dolor. Fusce varius ex vitae massa pulvinar, ut hendrerit enim molestie. Aliquam volutpat facilisis ipsum, nec mollis elit dapibus eu. Donec scelerisque interdum tristique. Aliquam accumsan sem urna, vel posuere dui faucibus et. Mauris quis rutrum massa.</p>
        <p>Curabitur nisl tortor, egestas a lacus eu, consectetur ornare erat. Praesent auctor ante gravida rutrum dictum. Praesent congue in enim sed ornare. In at ultrices mauris. Donec vulputate ante vel lectus ullamcorper varius. Nullam ac dui velit. Quisque porttitor, eros id interdum posuere, turpis nisi convallis ex, quis venenatis massa eros sit amet ex. Donec sem quam, consectetur at consectetur quis, suscipit sit amet ligula. Morbi nec lectus iaculis, dapibus lorem eget, molestie dui. Sed porttitor lacus ut hendrerit vulputate. Cras efficitur nec ligula ut lobortis. Cras aliquam, magna ac condimentum ullamcorper, sapien dolor varius sapien, sed volutpat lorem felis et nulla.</p>
      </dnn-tab>
      <dnn-tab tab-title=${t(i.tabTitle)+" 2"}>
        <p> Consectetur adipiscing elit. Nulla hendrerit nisl vel aliquam cursus. Fusce tincidunt vitae mi a malesuada. Praesent eros mi, semper ut orci quis, faucibus viverra felis. Cras non lacus vehicula, fermentum felis id, dictum diam. Proin congue urna est, ac viverra ligula sagittis eu. Proin diam libero, vulputate egestas dui at, molestie dictum dolor. Fusce varius ex vitae massa pulvinar, ut hendrerit enim molestie. Aliquam volutpat facilisis ipsum, nec mollis elit dapibus eu. Donec scelerisque interdum tristique. Aliquam accumsan sem urna, vel posuere dui faucibus et. Mauris quis rutrum massa.</p>
        <p> Egestas a lacus eu, consectetur ornare erat. Praesent auctor ante gravida rutrum dictum. Praesent congue in enim sed ornare. In at ultrices mauris. Donec vulputate ante vel lectus ullamcorper varius. Nullam ac dui velit. Quisque porttitor, eros id interdum posuere, turpis nisi convallis ex, quis venenatis massa eros sit amet ex. Donec sem quam, consectetur at consectetur quis, suscipit sit amet ligula. Morbi nec lectus iaculis, dapibus lorem eget, molestie dui. Sed porttitor lacus ut hendrerit vulputate. Cras efficitur nec ligula ut lobortis. Cras aliquam, magna ac condimentum ullamcorper, sapien dolor varius sapien, sed volutpat lorem felis et nulla.</p>
      </dnn-tab>
      <dnn-tab tab-title=${t(i.tabTitle)+" 3"}>
        <p> Fidunt vitae mi a malesuada. Praesent eros mi, semper ut orci quis, faucibus viverra felis. Cras non lacus vehicula, fermentum felis id, dictum diam. Proin congue urna est, ac viverra ligula sagittis eu. Proin diam libero, vulputate egestas dui at, molestie dictum dolor. Fusce varius ex vitae massa pulvinar, ut hendrerit enim molestie. Aliquam volutpat facilisis ipsum, nec mollis elit dapibus eu. Donec scelerisque interdum tristique. Aliquam accumsan sem urna, vel posuere dui faucibus et. Mauris quis rutrum massa.</p>
        <p> Gravida rutrum dictum. Praesent congue in enim sed ornare. In at ultrices mauris. Donec vulputate ante vel lectus ullamcorper varius. Nullam ac dui velit. Quisque porttitor, eros id interdum posuere, turpis nisi convallis ex, quis venenatis massa eros sit amet ex. Donec sem quam, consectetur at consectetur quis, suscipit sit amet ligula. Morbi nec lectus iaculis, dapibus lorem eget, molestie dui. Sed porttitor lacus ut hendrerit vulputate. Cras efficitur nec ligula ut lobortis. Cras aliquam, magna ac condimentum ullamcorper, sapien dolor varius sapien, sed volutpat lorem felis et nulla.</p>
      </dnn-tab>
    </dnn-tabs>

    `,e=l.bind({});e.args={tabTitle:"Tab"};var a,s,u;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => html\`
    <dnn-tabs >
      <dnn-tab tab-title=\${ifDefined(args.tabTitle) + " 1"}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit nisl vel aliquam cursus. Fusce tincidunt vitae mi a malesuada. Praesent eros mi, semper ut orci quis, faucibus viverra felis. Cras non lacus vehicula, fermentum felis id, dictum diam. Proin congue urna est, ac viverra ligula sagittis eu. Proin diam libero, vulputate egestas dui at, molestie dictum dolor. Fusce varius ex vitae massa pulvinar, ut hendrerit enim molestie. Aliquam volutpat facilisis ipsum, nec mollis elit dapibus eu. Donec scelerisque interdum tristique. Aliquam accumsan sem urna, vel posuere dui faucibus et. Mauris quis rutrum massa.</p>
        <p>Curabitur nisl tortor, egestas a lacus eu, consectetur ornare erat. Praesent auctor ante gravida rutrum dictum. Praesent congue in enim sed ornare. In at ultrices mauris. Donec vulputate ante vel lectus ullamcorper varius. Nullam ac dui velit. Quisque porttitor, eros id interdum posuere, turpis nisi convallis ex, quis venenatis massa eros sit amet ex. Donec sem quam, consectetur at consectetur quis, suscipit sit amet ligula. Morbi nec lectus iaculis, dapibus lorem eget, molestie dui. Sed porttitor lacus ut hendrerit vulputate. Cras efficitur nec ligula ut lobortis. Cras aliquam, magna ac condimentum ullamcorper, sapien dolor varius sapien, sed volutpat lorem felis et nulla.</p>
      </dnn-tab>
      <dnn-tab tab-title=\${ifDefined(args.tabTitle) + " 2"}>
        <p> Consectetur adipiscing elit. Nulla hendrerit nisl vel aliquam cursus. Fusce tincidunt vitae mi a malesuada. Praesent eros mi, semper ut orci quis, faucibus viverra felis. Cras non lacus vehicula, fermentum felis id, dictum diam. Proin congue urna est, ac viverra ligula sagittis eu. Proin diam libero, vulputate egestas dui at, molestie dictum dolor. Fusce varius ex vitae massa pulvinar, ut hendrerit enim molestie. Aliquam volutpat facilisis ipsum, nec mollis elit dapibus eu. Donec scelerisque interdum tristique. Aliquam accumsan sem urna, vel posuere dui faucibus et. Mauris quis rutrum massa.</p>
        <p> Egestas a lacus eu, consectetur ornare erat. Praesent auctor ante gravida rutrum dictum. Praesent congue in enim sed ornare. In at ultrices mauris. Donec vulputate ante vel lectus ullamcorper varius. Nullam ac dui velit. Quisque porttitor, eros id interdum posuere, turpis nisi convallis ex, quis venenatis massa eros sit amet ex. Donec sem quam, consectetur at consectetur quis, suscipit sit amet ligula. Morbi nec lectus iaculis, dapibus lorem eget, molestie dui. Sed porttitor lacus ut hendrerit vulputate. Cras efficitur nec ligula ut lobortis. Cras aliquam, magna ac condimentum ullamcorper, sapien dolor varius sapien, sed volutpat lorem felis et nulla.</p>
      </dnn-tab>
      <dnn-tab tab-title=\${ifDefined(args.tabTitle) + " 3"}>
        <p> Fidunt vitae mi a malesuada. Praesent eros mi, semper ut orci quis, faucibus viverra felis. Cras non lacus vehicula, fermentum felis id, dictum diam. Proin congue urna est, ac viverra ligula sagittis eu. Proin diam libero, vulputate egestas dui at, molestie dictum dolor. Fusce varius ex vitae massa pulvinar, ut hendrerit enim molestie. Aliquam volutpat facilisis ipsum, nec mollis elit dapibus eu. Donec scelerisque interdum tristique. Aliquam accumsan sem urna, vel posuere dui faucibus et. Mauris quis rutrum massa.</p>
        <p> Gravida rutrum dictum. Praesent congue in enim sed ornare. In at ultrices mauris. Donec vulputate ante vel lectus ullamcorper varius. Nullam ac dui velit. Quisque porttitor, eros id interdum posuere, turpis nisi convallis ex, quis venenatis massa eros sit amet ex. Donec sem quam, consectetur at consectetur quis, suscipit sit amet ligula. Morbi nec lectus iaculis, dapibus lorem eget, molestie dui. Sed porttitor lacus ut hendrerit vulputate. Cras efficitur nec ligula ut lobortis. Cras aliquam, magna ac condimentum ullamcorper, sapien dolor varius sapien, sed volutpat lorem felis et nulla.</p>
      </dnn-tab>
    </dnn-tabs>

    \``,...(u=(s=e.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const d=["Tab"];export{e as Tab,d as __namedExportsOrder,m as default};
