import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../src/theme/globalStyles";
import themeDefault from "../src/theme/themeDefault";

// automatically import all files ending in *.stories.js
configure(require.context("../src/components", true, /\.stories\.js$/), module);

const GlobalWrapper = Story => (
	<ThemeProvider theme={themeDefault}>
        <GlobalStyles />
        <Story />
    </ThemeProvider>
);

addDecorator(GlobalWrapper);

// export const decorators = [
//   Story => (
//     <ThemeProvider theme={themeDefault}>
//       <GlobalStyles />
//       <Story />
//       </ThemeProvider>
//   )
// ];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}