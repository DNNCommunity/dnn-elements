import type { Meta, StoryObj } from '@storybook/web-components';
import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { actions } from '@storybook/addon-actions';
import readme from "./readme.md";

const meta: Meta = {
  title: 'Elements/AutoComplete',
  component: 'dnn-autocomplete',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    helpText: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    preloadThresholdPixels:{
      control: 'number',
    },
    renderSuggestions: {
      control: 'object',
    },
    required: {
      control: 'boolean',
    },
    suggestions: {
      control: 'object',
    },
    totalSuggestions: {
      control: 'number',
    },
    value: {
      control: 'text',
    },
    onSearchQueryChanged: {
      action: 'onSearchQueryChanged',
    }
  },
};
export default meta;

const eventsFromNames = actions('itemSelected', 'needMoreItems', 'searchQueryChanged', 'valueChange', 'valueInput');

const Template = (args) =>
    html`
    <dnn-autocomplete
        .disabled=${args.disabled}
        .helpText=${args.helpText}
        .label=${args.label}
        .name=${args.name}
        .preloadThresholdPixels=${args.preloadThresholdPixels}
        .renderSuggestions=${args.renderSuggestions}
        .required=${args.required}
        .suggestions=${args.suggestions}
        .totalSuggestions=${args.totalSuggestions}
        .value=${args.value}
        @itemSelected=${e => eventsFromNames.itemSelected(e)}
        @needMoreItems=${e => eventsFromNames.needMoreItems(e)}
        @searchQueryChanged=${args.onSearchQueryChanged ? args.onSearchQueryChanged : e => eventsFromNames.searchQueryChanged(e)}
        @valueChange=${e => eventsFromNames.valueChange(e)}
        @valueInput=${e => eventsFromNames.valueInput(e)}
    >
    </dnn-autocomplete>
    `;


type Story = StoryObj;

export const Primary : Story = Template.bind({});
Primary.args = {
  label: "Autocomplete",
};