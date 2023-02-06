import { ipcRenderer, contextBridge, IpcRendererEvent } from 'electron';

declare global {
  interface Window {
    api: typeof API;
  }
}
interface Colors {
  BgPrimary: string;
  BgPrimaryBorder: string;
  BgSecondary: string;
  FgPrimary: string;
  Accent: string;
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
  }
};
contextBridge.exposeInMainWorld('api', API);
