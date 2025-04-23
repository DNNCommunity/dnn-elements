import{k as v}from"./lit-element-BIeOw4Bz.js";import{a as h}from"./index-BMoMLr6o.js";import"./v4-CtRu48qb.js";const $=""+new URL("readme-Dk8viLYg.md",import.meta.url).href,C={title:"Elements/Richtext",component:"dnn-richtext",tags:["autodocs"],parameters:{docs:{description:{component:$}}},argTypes:{value:{control:"text"},options:{control:"object"}}},s=h("onValueChange","onValueInput"),t=o=>v`
    <dnn-richtext
        value=${o.value}
        .options=${o.options}
        @valueChange=${s.onValueChange}
        @valueInput=${s.onValueInput}
    />
    `,e=t.bind({});e.args={value:`<h1>Hello World</h1>
<div class="card">
    <p>Some text</p>
</div>
`};const a=t.bind({});a.args={...e.args,options:{buttons:"bold,italic,underline,strikethrough,eraser,ul,ol,paragraph,superscript,subscript,spellcheck,cut,copy,paste,selectall,copyformat,hr,link"}};const n=t.bind({});n.args={...e.args,options:{buttons:"bold,italic,underline,"}};var r,l,u;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => html\`
    <dnn-richtext
        value=\${args.value}
        .options=\${args.options}
        @valueChange=\${eventsFromNames.onValueChange}
        @valueInput=\${eventsFromNames.onValueInput}
    />
    \``,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,p,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => html\`
    <dnn-richtext
        value=\${args.value}
        .options=\${args.options}
        @valueChange=\${eventsFromNames.onValueChange}
        @valueInput=\${eventsFromNames.onValueInput}
    />
    \``,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,d,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => html\`
    <dnn-richtext
        value=\${args.value}
        .options=\${args.options}
        @valueChange=\${eventsFromNames.onValueChange}
        @valueInput=\${eventsFromNames.onValueInput}
    />
    \``,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const I=["Default","Basic","Minimal"];export{a as Basic,e as Default,n as Minimal,I as __namedExportsOrder,C as default};
