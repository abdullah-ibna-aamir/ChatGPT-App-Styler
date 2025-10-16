import { Theme } from '../types';

export const generateCssFromTheme = (theme: Theme): string => {
  const { tokens, custom_css } = theme;

  const cssVariables = Object.entries(tokens)
    .map(([key, value]) => `--cg-${key.replace(/\./g, '-')}: ${value};`)
    .join('\n');

  return `
    :root {
      ${cssVariables}
    }

    /* Add your CSS rules here, using the variables defined above */
    body {
      background: var(--cg-color-background) !important;
      color: var(--cg-color-text) !important;
      font-family: var(--cg-font-family) !important;
    }

    /* Example of how to use other variables */
    /*
    .chat-list, .conversation {
      background: var(--cg-color-surface) !important;
    }

    .message.user {
      background: var(--cg-chat-bubble-user-bg) !important;
      border-radius: var(--cg-radius-default) !important;
      padding: var(--cg-spacing-base) !important;
    }
    */

    ${custom_css}
  `;
};