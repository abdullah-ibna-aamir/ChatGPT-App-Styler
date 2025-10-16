import * as React from 'react';
import { useState, useEffect } from 'react';
import { Theme } from '../types';
import { generateCssFromTheme } from './theme-utils';

const initialTheme: Theme = {
  schema_version: '1.0',
  id: 'default',
  name: 'Default',
  author: 'Jules',
  description: 'A default theme',
  created: new Date().toISOString(),
  tokens: {
    'color.background': '#ffffff',
    'color.surface': '#f2f2f2',
    'color.primary': '#007bff',
    'color.text': '#000000',
    'color.muted': '#6c757d',
    'radius.default': '4px',
    'spacing.base': '1rem',
    'font.family': 'sans-serif',
    'font.size': '16px',
    'code.fontFamily': 'monospace',
    'code.background': '#f8f9fa',
    'chat.bubble.user.bg': '#007bff',
    'chat.bubble.assistant.bg': '#f2f2f2',
  },
  custom_css: '',
};

const App = () => {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [savedThemes, setSavedThemes] = useState<Theme[]>([]);

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTheme((prevTheme) => ({
      ...prevTheme,
      tokens: {
        ...prevTheme.tokens,
        [name]: value,
      },
    }));
  };

  useEffect(() => {
    const css = generateCssFromTheme(theme);
    window.electron.updateCss(css);
  }, [theme]);

  const handleSaveTheme = async () => {
    const newSavedThemes = [...savedThemes, theme];
    await window.electron.saveThemes(newSavedThemes);
    setSavedThemes(newSavedThemes);
  };

  const handleLoadThemes = async () => {
    const themes = await window.electron.getThemes();
    setSavedThemes(themes);
  };

  useEffect(() => {
    handleLoadThemes();
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '250px', borderRight: '1px solid #ccc', padding: '10px' }}>
        <h2>Themes</h2>
        <button onClick={handleLoadThemes}>Load Themes</button>
        <ul>
          {savedThemes.map((savedTheme) => (
            <li key={savedTheme.id} onClick={() => setTheme(savedTheme)}>
              {savedTheme.name}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 1, padding: '10px' }}>
        <h3>Theme Editor</h3>
        <form>
          <label>
            Background Color:
            <input
              type="color"
              name="color.background"
              value={theme.tokens['color.background']}
              onChange={handleTokenChange}
            />
          </label>
          <br />
          <label>
            Primary Color:
            <input
              type="color"
              name="color.primary"
              value={theme.tokens['color.primary']}
              onChange={handleTokenChange}
            />
          </label>
          <br />
          <label>
            Text Color:
            <input
              type="color"
              name="color.text"
              value={theme.tokens['color.text']}
              onChange={handleTokenChange}
            />
          </label>
          <br />
          <label>
            Font Size:
            <input
              type="text"
              name="font.size"
              value={theme.tokens['font.size']}
              onChange={handleTokenChange}
            />
          </label>
          <br />
          <button type="button" onClick={handleSaveTheme}>
            Save Theme
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;