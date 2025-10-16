const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  getThemes: () => ipcRenderer.invoke('get-themes'),
  saveCustomTheme: (themeData) => ipcRenderer.invoke('save-custom-theme', themeData),
  getCSSForPreview: (settings) => ipcRenderer.invoke('get-css-for-preview', settings)
});
