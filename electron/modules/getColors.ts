import { BrowserWindow } from 'electron';
import ElectronStore from 'electron-store';
import fs from 'fs-extra';

interface Colors {
  BgPrimary: string;
  BgPrimaryBorder: string;
  BgSecondary: string;
  FgPrimary: string;
  Accent: string;
}

function getColors(store: ElectronStore) {
  store.set('colorThemePath', 'colors.json');
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
