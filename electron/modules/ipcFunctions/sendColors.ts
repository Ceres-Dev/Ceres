import { BrowserWindow } from 'electron';

function sendColors(colors: string) {
  const win = BrowserWindow.getFocusedWindow();
  win?.webContents.send('userColors', colors);
}

export default sendColors;
