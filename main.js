const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
    icon: path.join(__dirname, 'icons/icon.png'),
    title: 'ChatGPT Appearance Manager'
  });

  mainWindow.loadFile('renderer/index.html');

  // Open DevTools in development
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// IPC handlers for theme management
ipcMain.handle('get-themes', async () => {
  const themesPath = path.join(__dirname, 'themes');
  try {
    const files = fs.readdirSync(themesPath);
    const themes = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const content = fs.readFileSync(path.join(themesPath, file), 'utf8');
        return JSON.parse(content);
      });
    return themes;
  } catch (error) {
    console.error('Error loading themes:', error);
    return [];
  }
});

ipcMain.handle('save-custom-theme', async (event, themeData) => {
  const themesPath = path.join(__dirname, 'themes');
  const customThemesPath = path.join(themesPath, 'custom');
  
  try {
    if (!fs.existsSync(customThemesPath)) {
      fs.mkdirSync(customThemesPath, { recursive: true });
    }
    
    const fileName = `${themeData.id}.json`;
    const filePath = path.join(customThemesPath, fileName);
    fs.writeFileSync(filePath, JSON.stringify(themeData, null, 2));
    return { success: true };
  } catch (error) {
    console.error('Error saving theme:', error);
    return { success: false, error: error.message };
  }
});

ipcMain.handle('get-css-for-preview', async (event, settings) => {
  // Generate CSS based on settings
  return generateCSS(settings);
});

function generateCSS(settings) {
  const {
    theme = 'dark',
    fontSize = 16,
    fontFamily = 'system-ui',
    chatWidth = 'default',
    messageSpacing = 'default',
    backgroundColor,
    textColor,
    accentColor
  } = settings;

  let css = `
    /* ChatGPT Appearance Manager - Custom Styles */
    
    /* Base font settings */
    body, .markdown, .prose {
      font-family: ${fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
      font-size: ${fontSize}px !important;
    }
  `;

  // Background color
  if (backgroundColor) {
    css += `
    body, .dark, [data-theme="dark"] {
      background-color: ${backgroundColor} !important;
    }
    `;
  }

  // Text color
  if (textColor) {
    css += `
    body, .markdown, .prose, p, div, span {
      color: ${textColor} !important;
    }
    `;
  }

  // Accent color
  if (accentColor) {
    css += `
    button, .bg-blue-500, .bg-green-500 {
      background-color: ${accentColor} !important;
    }
    `;
  }

  // Chat width
  if (chatWidth === 'narrow') {
    css += `
    .mx-auto, .container {
      max-width: 700px !important;
    }
    `;
  } else if (chatWidth === 'wide') {
    css += `
    .mx-auto, .container {
      max-width: 1200px !important;
    }
    `;
  } else if (chatWidth === 'full') {
    css += `
    .mx-auto, .container {
      max-width: 100% !important;
    }
    `;
  }

  // Message spacing
  if (messageSpacing === 'compact') {
    css += `
    .group, .mb-6, .my-6 {
      margin-bottom: 0.5rem !important;
      margin-top: 0.5rem !important;
    }
    `;
  } else if (messageSpacing === 'spacious') {
    css += `
    .group, .mb-6, .my-6 {
      margin-bottom: 2rem !important;
      margin-top: 2rem !important;
    }
    `;
  }

  return css;
}
