import { Theme } from '../types';

export const getThemes = (): Promise<Theme[]> => {
  return window.electron.getThemes();
};

export const saveThemes = (themes: Theme[]): Promise<void> => {
  return window.electron.saveThemes(themes);
};