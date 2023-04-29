import { html } from "lit";
import { actions } from '@storybook/addon-actions';
//import { ifDefined } from 'lit-html/directives/if-defined';
//import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import type { Meta, StoryObj } from '@storybook/web-components';
import readme from './readme.md';

const meta: Meta = {
    title: 'Elements/Monaco Editor',
    component: 'dnn-monaco-editor',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
              component: readme,
            }
        }
    },
    argTypes: {},
} 

export default meta;

const eventsFromNames = actions();

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