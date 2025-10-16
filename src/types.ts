export interface Theme {
  schema_version: string;
  id: string;
  name: string;
  author: string;
  description: string;
  created: string;
  tokens: {
    'color.background': string;
    'color.surface': string;
    'color.primary': string;
    'color.text': string;
    'color.muted': string;
    'radius.default': string;
    'spacing.base': string;
    'font.family': string;
    'font.size': string;
    'code.fontFamily': string;
    'code.background': string;
    'chat.bubble.user.bg': string;
    'chat.bubble.assistant.bg': string;
  };
  custom_css: string;
}