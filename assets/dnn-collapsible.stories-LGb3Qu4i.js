import{x as t}from"./lit-element-BTykW0Pr.js";import{o as r}from"./if-defined-rEY2lmWu.js";import{a as c}from"./index-BMoMLr6o.js";import"./v4-CtRu48qb.js";const d=`# dnn-collapsible



<!-- Auto Generated Below -->


## Usage

### HTML

\`\`\`html
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
        <dnn-chevron id="dnn-chevron1" expanded="false"></dnn-chevron>
    <strong>Collapsible Panel</strong>
    </div>
    <dnn-collapsible id="dnn-collapsible1" expanded="false" transition-duration="300">
        <div id="collapsible-slot-content" style="padding: 15px;">
            <h2>Details</h2>
            <p>
                Spicy jalapeno bacon ipsum dolor amet bresaola kielbasa doner ham hock biltong, swine shoulder leberkas cupim. Sausage capicola buffalo, tongue jerky frankfurter biltong pork swine landjaeger. Porchetta alcatra burgdoggen beef ribs short ribs corned beef, biltong flank bresaola kielbasa. Ham hock beef kielbasa, cupim cow beef ribs doner. T-bone cow shoulder chuck pastrami. Alcatra pig filet mignon shank. Pancetta shankle meatloaf sausage meatball cupim.
            </p>
        </div>
    </dnn-collapsible>
</div>
\`\`\`


### JSX-TSX

\`\`\`tsx
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
        <dnn-chevron id="dnn-chevron1" expanded="false"></dnn-chevron>
    <strong>Collapsible Panel</strong>
    </div>
    <dnn-collapsible id="dnn-collapsible1" expanded="false" transitionDuration="300">
        <div id="collapsible-slot-content" style="padding: 15px;">
            <h2>Details</h2>
            <p>
                Spicy jalapeno bacon ipsum dolor amet bresaola kielbasa doner ham hock biltong, swine shoulder leberkas cupim. Sausage capicola buffalo, tongue jerky frankfurter biltong pork swine landjaeger. Porchetta alcatra burgdoggen beef ribs short ribs corned beef, biltong flank bresaola kielbasa. Ham hock beef kielbasa, cupim cow beef ribs doner. T-bone cow shoulder chuck pastrami. Alcatra pig filet mignon shank. Pancetta shankle meatloaf sausage meatball cupim.
            </p>
        </div>
    </dnn-collapsible>
</div>
\`\`\`



## Properties

| Property             | Attribute             | Description                                          | Type                  | Default |
| -------------------- | --------------------- | ---------------------------------------------------- | --------------------- | ------- |
| \`expanded\`           | \`expanded\`            | Defines if the panel is expanded or not.             | \`boolean\`             | \`false\` |
| \`transitionDuration\` | \`transition-duration\` | Defines the transition time in ms, defaults to 150ms | \`number \\| undefined\` | \`150\`   |


## Events

| Event                         | Description                                       | Type                |
| ----------------------------- | ------------------------------------------------- | ------------------- |
| \`dnnCollapsibleHeightChanged\` | Fires whenever the collapsible height has changed | \`CustomEvent<void>\` |


## Methods

### \`updateSize() => Promise<void>\`

Updates the component height, use to update after a slot content changes.

#### Returns

Type: \`Promise<void>\`




## Dependencies

### Used by

 - [dnn-permissions-grid](../dnn-permissions-grid)
 - [dnn-treeview-item](../dnn-treeview-item)

### Graph
\`\`\`mermaid
graph TD;
  dnn-permissions-grid --> dnn-collapsible
  dnn-treeview-item --> dnn-collapsible
  style dnn-collapsible fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`,f={title:"Elements/Collapsible",component:"dnn-collapsible",tags:["autodocs"],parameters:{docs:{description:{component:d}}},argTypes:{expanded:{type:"boolean"},transitionDuration:{type:"number",control:"number"}}};c("dnnCollapsibleHeightChanged");const p=n=>(document.querySelector("#dnn-chevron1"),t`
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
                <dnn-chevron @changed=${i=>{const a=document.querySelector("#dnn-collapsible1");console.log(a),a.expanded=i.detail}} expanded=${n.expanded} id="dnn-chevron1"></dnn-chevron>
                <strong>Collapsible Panel</strong>
            </div>
            <dnn-collapsible ?expanded=${r(n.expanded)} id="dnn-collapsible1" transition-duration="300">
                <div id="collapsible-slot-content" style="padding: 15px;">
                    <h2>Details</h2>
                    <p>
                        Spicy jalapeno bacon ipsum dolor amet bresaola kielbasa doner ham hock biltong, swine shoulder leberkas cupim. Sausage capicola buffalo, tongue jerky frankfurter biltong pork swine landjaeger. Porchetta alcatra burgdoggen beef ribs short ribs corned beef, biltong flank bresaola kielbasa. Ham hock beef kielbasa, cupim cow beef ribs doner. T-bone cow shoulder chuck pastrami. Alcatra pig filet mignon shank. Pancetta shankle meatloaf sausage meatball cupim.
                    </p>
                </div>
            </div>
            </dnn-collapsible>
        </div>
    `),e=p.bind({});e.args={expanded:!1,transitionDuration:150};var l,o,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`(args: {
  expanded: boolean;
  transitionDuration: number;
}) => {
  const chevronOne = document.querySelector('#dnn-chevron1');
  const clickHandler = (e: MouseEvent) => {
    const collapsibleOne = document.querySelector('#dnn-collapsible1');
    console.log(collapsibleOne);
    (collapsibleOne as any).expanded = e.detail;
  };
  return html\`
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
                <dnn-chevron @changed=\${clickHandler} expanded=\${args.expanded} id="dnn-chevron1"></dnn-chevron>
                <strong>Collapsible Panel</strong>
            </div>
            <dnn-collapsible ?expanded=\${ifDefined(args.expanded)} id="dnn-collapsible1" transition-duration="300">
                <div id="collapsible-slot-content" style="padding: 15px;">
                    <h2>Details</h2>
                    <p>
                        Spicy jalapeno bacon ipsum dolor amet bresaola kielbasa doner ham hock biltong, swine shoulder leberkas cupim. Sausage capicola buffalo, tongue jerky frankfurter biltong pork swine landjaeger. Porchetta alcatra burgdoggen beef ribs short ribs corned beef, biltong flank bresaola kielbasa. Ham hock beef kielbasa, cupim cow beef ribs doner. T-bone cow shoulder chuck pastrami. Alcatra pig filet mignon shank. Pancetta shankle meatloaf sausage meatball cupim.
                    </p>
                </div>
            </div>
            </dnn-collapsible>
        </div>
    \`;
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const k=["Collapsible"];export{e as Collapsible,k as __namedExportsOrder,f as default};
