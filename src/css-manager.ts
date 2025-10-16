let activeCss = '';

export const getActiveCss = (): string => {
  return activeCss;
};

export const setActiveCss = (css: string): void => {
  activeCss = css;
};