// Native Packages
import { BrowserWindow, ipcMain } from 'electron';
import { join } from 'path';

// Extra Packages
import isDev from 'electron-is-dev';
import ElectronStore from 'electron-store';

// Modules
import getColors from './getColors';
import findFileExt from './findFileExt';
import CopyWallpaper from './copyWallpaper';
import getFileTree from './getFileTree';

const winHeight = 800;
const winWidth = 1300;
const winMinHeight = 600;
const winMinWidth = 1100;

function createWindow(store: ElectronStore) {
  const win = new BrowserWindow({
    width: winWidth,
    height: winHeight,
    minHeight: winMinHeight,
    minWidth: winMinWidth,
    frame: false,
    show: true,
    resizable: true,
    fullscreenable: true,
    backgroundColor: '#131418',
    webPreferences: {
      preload: join(__dirname, '../preload.js'),
      webSecurity: false
    }
  });
  const port = process.env.PORT || 3000;
  const url = isDev ? `http://localhost:${port}` : join(__dirname, '../../src/out/index.html');

  if (isDev) {
    win?.loadURL(url);
  } else {
    win?.loadFile(url);
  }

  /* ************************ IPC Functions ************************** */
  /* ***************************************************************** */
  /* ***************************************************************** */
  /* ***************************************************************** */

  ipcMain.on('getAppColors', () => {
    getColors(store);
  });

  ipcMain.on('getFileType', (_event, path: string) => {
    const fileType = findFileExt(path);
    console.log(fileType);
    win.webContents.send('setFileType', fileType);
  });

  ipcMain.on('makeFileTree', () => {
    win.webContents.send('setLoadingText', 'Loading project');
    const path = 'C:/TestFolder';
    getFileTree(path);
    win.webContents.send('setLoadingText', 'Loading editor');
    setTimeout(() => {
      win.webContents.send('setLoadingText', 'Loading icons');
    }, 1500);
    setTimeout(() => {
      win.webContents.send('setLoading', false);
    }, 3000);
  });

  ipcMain.on('copyWallpaper', () => {
    CopyWallpaper();
  });

  ipcMain.on('maxWin', () => {
    // eslint-disable-next-line no-unused-expressions
    win.isMaximized() ? win.restore() : win.maximize();
  });

  ipcMain.on('minWin', () => {
    // eslint-disable-next-line no-unused-expressions
    win.isMinimized() ? win.restore() : win.minimize();
  });

  ipcMain.on('closeWin', () => {
    win.close();
  });
}

export default createWindow;
