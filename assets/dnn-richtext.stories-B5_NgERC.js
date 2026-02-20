import{b as r}from"./iframe-tJFx2K52.js";import"./preload-helper-PPVm8Dsz.js";const l=""+new URL("readme-D95PQHoY.md",import.meta.url).href,{actions:u}=__STORYBOOK_MODULE_ACTIONS__,i={title:"Elements/Richtext",component:"dnn-richtext",tags:["autodocs"],parameters:{docs:{description:{component:l}}},argTypes:{value:{control:"text"},options:{control:"object"}}},s=u("onValueChange","onValueInput"),t=o=>r`
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
`};const n=t.bind({});n.args={...e.args,options:{buttons:"bold,italic,underline,strikethrough,eraser,ul,ol,paragraph,superscript,subscript,spellcheck,cut,copy,paste,selectall,copyformat,hr,link"}};const a=t.bind({});a.args={...e.args,options:{buttons:"bold,italic,underline,"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => html\`
    <dnn-richtext
        value=\${args.value}
        .options=\${args.options}
        @valueChange=\${eventsFromNames.onValueChange}
        @valueInput=\${eventsFromNames.onValueInput}
    />
    \``,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => html\`
    <dnn-richtext
        value=\${args.value}
        .options=\${args.options}
        @valueChange=\${eventsFromNames.onValueChange}
        @valueInput=\${eventsFromNames.onValueInput}
    />
    \``,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => html\`
    <dnn-richtext
        value=\${args.value}
        .options=\${args.options}
        @valueChange=\${eventsFromNames.onValueChange}
        @valueInput=\${eventsFromNames.onValueInput}
    />
    \``,...a.parameters?.docs?.source}}};const m=["Default","Basic","Minimal"];export{n as Basic,e as Default,a as Minimal,m as __namedExportsOrder,i as default};
