import { Theme } from '../types';

declare global {
  interface Window {
    electron: {
      getThemes: () => Promise<Theme[]>;
      saveThemes: (themes: Theme[]) => Promise<void>;
      updateCss: (css: string) => void;
    };
  }
}