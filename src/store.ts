import Store from 'electron-store';

const store = new Store({
  schema: {
    themes: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          schema_version: { type: 'string' },
          id: { type: 'string' },
          name: { type: 'string' },
          author: { type: 'string' },
          description: { type: 'string' },
          created: { type: 'string' },
          tokens: {
            type: 'object',
            properties: {
              'color.background': { type: 'string' },
              'color.surface': { type: 'string' },
              'color.primary': { type: 'string' },
              'color.text': { type: 'string' },
              'color.muted': { type: 'string' },
              'radius.default': { type: 'string' },
              'spacing.base': { type: 'string' },
              'font.family': { type: 'string' },
              'font.size': { type: 'string' },
              'code.fontFamily': { type: 'string' },
              'code.background': { type: 'string' },
              'chat.bubble.user.bg': { type: 'string' },
              'chat.bubble.assistant.bg': { type: 'string' },
            },
          },
          custom_css: { type: 'string' },
        },
        required: ['id', 'name', 'tokens'],
      },
      default: [],
    },
  },
});

export default store;