import type { Preview } from "@storybook/web-components";
import { setCustomElementsManifest } from "@storybook/web-components";
import { defineCustomElements } from "@dnncommunity/dnn-elements/loader";
import customElements from "../custom-elements.json";
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import React from "react";

defineCustomElements();
setCustomElementsManifest(customElements);

export const parameters = {
  docs: {
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Primary />
        <Controls />
        <Stories />
        <Description />
      </>
    ),
    extractComponentDescription: (component, { notes }) => {
      console.log(component);
      console.log(notes);
      if (notes) {
        return typeof notes === "string" ? notes : notes.markdown || notes.text;
      }
      return null;
    }
  }
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Primary />
          <Controls />
          <Stories />
          <Description />
        </>
      ),
      extractComponentDescription: (component, { notes }) => {
        console.log(component);
        console.log(notes);
        if (notes) {
          return typeof notes === "string" ? notes : notes.markdown || notes.text;
        }
        return null;
      }
    }
  },
};

export default preview;
