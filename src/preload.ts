import { contextBridge, ipcRenderer } from 'electron';
import { Theme } from './types';

contextBridge.exposeInMainWorld('electron', {
  getThemes: () => ipcRenderer.invoke('get-themes'),
  saveThemes: (themes: Theme[]) => ipcRenderer.invoke('save-themes', themes),
  updateCss: (css: string) => ipcRenderer.send('update-css', css),
});