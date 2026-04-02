import{n as e}from"./chunk-BneVvdWh.js";import{_ as t,b as n}from"./iframe-BqLFqqtI.js";var r,i=e((()=>{r=``+new URL(`readme-B41LPaLV.md`,import.meta.url).href})),a,o,s,c,l,u,d,f;e((()=>{t(),i(),{actions:a}=__STORYBOOK_MODULE_ACTIONS__,o={title:`Elements/Richtext`,component:`dnn-richtext`,tags:[`autodocs`],parameters:{docs:{description:{component:r}}},argTypes:{value:{control:`text`},options:{control:`object`}}},s=a(`onValueChange`,`onValueInput`),c=e=>n`
    <dnn-richtext
        value=${e.value}
        .options=${e.options}
        @valueChange=${s.onValueChange}
        @valueInput=${s.onValueInput}
    />
    `,l=c.bind({}),l.args={value:`<h1>Hello World</h1>
<div class="card">
    <p>Some text</p>
</div>
`},u=c.bind({}),u.args={...l.args,options:{buttons:`bold,italic,underline,strikethrough,eraser,ul,ol,paragraph,superscript,subscript,spellcheck,cut,copy,paste,selectall,copyformat,hr,link`}},d=c.bind({}),d.args={...l.args,options:{buttons:`bold,italic,underline,`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => html\`
    <dnn-richtext
        value=\${args.value}
        .options=\${args.options}
        @valueChange=\${eventsFromNames.onValueChange}
        @valueInput=\${eventsFromNames.onValueInput}
    />
    \``,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => html\`
    <dnn-richtext
        value=\${args.value}
        .options=\${args.options}
        @valueChange=\${eventsFromNames.onValueChange}
        @valueInput=\${eventsFromNames.onValueInput}
    />
    \``,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => html\`
    <dnn-richtext
        value=\${args.value}
        .options=\${args.options}
        @valueChange=\${eventsFromNames.onValueChange}
        @valueInput=\${eventsFromNames.onValueInput}
    />
    \``,...d.parameters?.docs?.source}}},f=[`Default`,`Basic`,`Minimal`]}))();export{u as Basic,l as Default,d as Minimal,f as __namedExportsOrder,o as default};