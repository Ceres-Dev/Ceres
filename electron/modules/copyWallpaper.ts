import { get } from 'wallpaper';
import { BrowserWindow } from 'electron';

async function CopyWallpaper() {
  const win = BrowserWindow.getFocusedWindow();
  let wallpaperURL = await get();
  wallpaperURL = wallpaperURL.split('\\').join('/');

  win?.webContents.send('setWallpaperPath', wallpaperURL);
}

export default CopyWallpaper;

// const ext = wallpaperURL.substring(wallpaperURL.lastIndexOf('.') + 1, wallpaperURL.length);
// if (!fs.existsSync(path.join(__dirname, `../../src/assets/background.${ext}`))) {
//   fs.copyFile(wallpaperURL, path.join(__dirname, `../../src/assets/background.${ext}`));
//   console.log('copied');
// } else {
//   // do nothing for now
//   console.log('exists');
// }
