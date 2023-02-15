import { ipcRenderer, contextBridge, IpcRendererEvent } from 'electron';

declare global {
  interface Window {
    api: typeof API;
  }
}

interface Colors {
  MainBackground: string;
  Editor: string;
  Titlebar: string;
  Sidebar: string;
  StatusBar: string;
  Accent: string;
  Text: string;
  Border_1: string;
}

const API = {
  // Titlebar Functions
  closeWin: () => {
    ipcRenderer.send('closeWin');
  },
  minWin: () => {
    ipcRenderer.send('minWin');
  },
  maxWin: () => {
    ipcRenderer.send('maxWin');
  },

  // App Colors
  reqColors: () => {
    ipcRenderer.send('getAppColors');
  },
  setColors: (func: (event: IpcRendererEvent, colors: Colors) => void) => {
    ipcRenderer.on('appColors', (event, data) => func(event, data));
  },

  // Make File Tree
  getFileTree: () => {
    ipcRenderer.send('makeFileTree');
  },

  // Copy Wallpaper
  copyWallpaper: () => {
    ipcRenderer.send('copyWallpaper');
  },
  setWallpaperPath: (func: (event: IpcRendererEvent, path: string) => void) => {
    ipcRenderer.on('setWallpaperPath', (event, path) => func(event, path));
  },

  // Splash
  setLoading: (func: (event: IpcRendererEvent, value: boolean) => void) => {
    ipcRenderer.on('setLoading', (event, value) => func(event, value));
  },
  setLoadingText: (func: (event: IpcRendererEvent, text: string) => void) => {
    ipcRenderer.on('setLoadingText', (event, text) => func(event, text));
  }
};
contextBridge.exposeInMainWorld('api', API);
