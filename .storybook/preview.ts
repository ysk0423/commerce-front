import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './../src/themes/index';

const GlobalStyles = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    transition: .25s;
    color: #000000;
  }
`;

// https://storybook.js.org/recipes/styled-components#recipe-section
// https://github.com/storybookjs/storybook/blob/next/code/addons/themes/docs/getting-started/styled-components.md
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: theme,
    },
    defaultTheme: 'default',
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];
