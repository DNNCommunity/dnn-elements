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
    argTypes: {
        language: {
            options: [
                "bat",
                "c",
                "coffeescript",
                "cpp",
                "csharp",
                "css",
                "dockerfile",
                "fsharp",
                "go",
                "handlebars",
                "html",
                "ini",
                "java",
                "javascript",
                "json",
                "less",
                "lua",
                "markdown",
                "msdax",
                "objective-c",
                "php",
                "plaintext",
                "postiats",
                "powershell",
                "pug",
                "python",
                "r",
                "razor",
                "ruby",
                "sb",
                "scss",
                "sol",
                "sql",
                "swift",
                "typescript",
                "vb",
                "xml",
                "yaml",
            ],
            control: {
                type: "select",
            },
        },
        value: {
            control: "text",
        },
    },
};

export default meta;

const eventsFromNames = actions("onContentChanged");

const Template = (args) =>
    html`
    <dnn-monaco-editor
        language=${args.language}
        value=${args.value}
        @contentChanged=${eventsFromNames.onContentChanged}
    />
    `;

export const HTML = Template.bind({});
HTML.args = {
    language: "html",
    value: '<h1>Hello World</h1>\n<div class="card">\n    <p>Some text</p>\n</div>\n',
};

export const Typescript = Template.bind({});
Typescript.args = {
    language: "typescript",
    value:
`/** Defines basic info about a person. */
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
`
};