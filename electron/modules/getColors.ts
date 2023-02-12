import { BrowserWindow } from 'electron';
import ElectronStore from 'electron-store';
import electronIsDev from 'electron-is-dev';
import fs from 'fs-extra';

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

function getColors(store: ElectronStore) {
  if (electronIsDev) {
    store.set('colorThemePath', 'colors.json');
  } else {
    store.set('colorThemePath', 'C:/Users/anant/.valence/colors.json');
  }
  const win = BrowserWindow.getFocusedWindow();
  const colorThemePath: any = store.get('colorThemePath');
  fs.readFile(colorThemePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const colors: Colors = JSON.parse(data);
      win?.webContents.send('appColors', colors);
    }
  });
}

export default getColors;
