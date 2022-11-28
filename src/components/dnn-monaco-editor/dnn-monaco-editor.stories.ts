import { html } from "lit-html";
//import { ifDefined } from 'lit-html/directives/if-defined';
//import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { Meta } from "@storybook/web-components";
import readme from './readme.md';

export default {
    title: 'Elements/Monaco Editor',
    component: 'dnn-monaco-editor',
    parameters: {
        actions: {
            handles: [],
        },
        notes:  readme,
    },
    argTypes: {},
} as Meta;

const Template = () =>
    html`
<script>
    self.MonacoEnvironment = {
        getWorkerUrl: function (_moduleId, label) {
            if (label === 'json') {
                return './dnn/json.worker.js';
            }
            if (label === 'css' || label === 'scss' || label === 'less') {
                return './dnn/css.worker.js';
            }
            if (label === 'html' || label === 'handlebars' || label === 'razor') {
                return './dnn/html.worker.js';
            }
            if (label === 'typescript' || label === 'javascript') {
                return './dnn/ts.worker.js';
            }
            return './dnn/editor.worker.js';
        }
    };
</script>
<dnn-monaco-editor>
    <code>
export interface Employee{
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName : "jane",
  lastName: "doe",
  fullName(): string{
    return this.firstName + " " + this.lastName;
  }
}

console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.fullName());
    </code>
</dnn-monaco-editor>
    `;

export const MonacoEditor = Template.bind({});
MonacoEditor.args = {};
