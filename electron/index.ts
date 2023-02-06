// Native

// Packages
import { BrowserWindow, app } from 'electron';
import Store from 'electron-store';

// Modules
import createWindow from './modules/createWindow';
// import findFileExt from './modules/findFileExt';

function main() {
  const store = new Store();
  // const win = BrowserWindow.getFocusedWindow();

  createWindow(store);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow(store);
  });
}

app.whenReady().then(() => main());

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
