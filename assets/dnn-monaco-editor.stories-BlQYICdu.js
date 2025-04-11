import{k as d}from"./lit-element-BIeOw4Bz.js";import{a as p}from"./index-BMoMLr6o.js";import"./v4-CtRu48qb.js";const m=`# dnn-monaco-editor



<!-- Auto Generated Below -->


## Usage

### HTML

\`\`\`html
<dnn-monaco-editor
    language="html"
    value="<h1>Hello World</h1>
        <div class=&quot;card&quot;>
            <p>Some text</p>
        </div>"
>
</dnn-monaco-editor>
\`\`\`


### JSX-TSX

\`\`\`tsx
<dnn-monaco-editor
    language="html"
    value="<h1>Hello World</h1>
        <div class=&quot;card&quot;>
            <p>Some text</p>
        </div>"
>
</dnn-monaco-editor>
\`\`\`



## Properties

| Property   | Attribute  | Description                               | Type                                                                                                                                                                                                                                                                                                                                                                                                                                    | Default     |
| ---------- | ---------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| \`language\` | \`language\` | Defines the language for the editor.      | \`"html" \\| "ruby" \\| "plaintext" \\| "r" \\| "bat" \\| "coffeescript" \\| "c" \\| "cpp" \\| "csharp" \\| "dockerfile" \\| "fsharp" \\| "go" \\| "handlebars" \\| "ini" \\| "pug" \\| "java" \\| "lua" \\| "markdown" \\| "msdax" \\| "objective-c" \\| "postiats" \\| "php" \\| "powershell" \\| "python" \\| "razor" \\| "swift" \\| "sql" \\| "vb" \\| "xml" \\| "less" \\| "scss" \\| "css" \\| "yaml" \\| "sol" \\| "sb" \\| "json" \\| "typescript" \\| "javascript"\` | \`"html"\`    |
| \`name\`     | \`name\`     | The name of the control to use for forms. | \`string \\| undefined\`                                                                                                                                                                                                                                                                                                                                                                                                                   | \`undefined\` |
| \`value\`    | \`value\`    | Sets the code contained in the editor     | \`string\`                                                                                                                                                                                                                                                                                                                                                                                                                                | \`""\`        |


## Events

| Event            | Description                                            | Type                  |
| ---------------- | ------------------------------------------------------ | --------------------- |
| \`contentChanged\` | Emits the new value of the content when it is changed. | \`CustomEvent<string>\` |


## CSS Custom Properties

| Name                     | Description                           |
| ------------------------ | ------------------------------------- |
| \`--monaco-editor-height\` | height of the editor, default is 50vh |
| \`--monaco-editor-width\`  | width of the editor, default is 100%  |


## Dependencies

### Used by

 - [dnn-example-form](../examples/dnn-example-form)

### Graph
\`\`\`mermaid
graph TD;
  dnn-example-form --> dnn-monaco-editor
  style dnn-monaco-editor fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`,v={title:"Elements/Monaco Editor",component:"dnn-monaco-editor",tags:["autodocs"],parameters:{docs:{description:{component:m}}},argTypes:{language:{options:["bat","c","coffeescript","cpp","csharp","css","dockerfile","fsharp","go","handlebars","html","ini","java","javascript","json","less","lua","markdown","msdax","objective-c","php","plaintext","postiats","powershell","pug","python","r","razor","ruby","sb","scss","sol","sql","swift","typescript","vb","xml","yaml"],control:{type:"select"}},value:{control:"text"}}},g=p("onContentChanged"),c=t=>d`
    <dnn-monaco-editor
        language=${t.language}
        value=${t.value}
        @contentChanged=${g.onContentChanged}
    />
    `,n=c.bind({});n.args={language:"html",value:`<h1>Hello World</h1>
<div class="card">
    <p>Some text</p>
</div>
`};const e=c.bind({});e.args={language:"typescript",value:`/** Defines basic info about a person. */
interface Person {

    /** The person's first name. */
    firstName: string;

    /** The person's last name. */
    lastName: string;
}

/** Greets a person. */
const greeter = (person: Person) =>
{
    return "Hello, " + person.firstName + " " + person.lastName;
}

export default greeter;
`};var o,a,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`args => html\`
    <dnn-monaco-editor
        language=\${args.language}
        value=\${args.value}
        @contentChanged=\${eventsFromNames.onContentChanged}
    />
    \``,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var r,i,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => html\`
    <dnn-monaco-editor
        language=\${args.language}
        value=\${args.value}
        @contentChanged=\${eventsFromNames.onContentChanged}
    />
    \``,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const x=["HTML","Typescript"];export{n as HTML,e as Typescript,x as __namedExportsOrder,v as default};
