import React, { useEffect, useState } from 'react';
import MainWindow from './Components/MainWindow/MainContent';
import Splash from './Components/Splash/Splash';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('Loading Valence');

  useEffect(() => {
    window.api.reqColors();
    console.log('requested colors');
  }, []);

  useEffect(() => {
    window.api.copyWallpaper();
  }, []);

  useEffect(() => {
    window.api.getFileTree();
  }, []);

  window.api.setColors((event, colors) => {
    const root = document.getElementById('root');
    root?.style.setProperty('--MainBackground', colors.MainBackground);
    root?.style.setProperty('--Editor', colors.Editor);
    root?.style.setProperty('--Sidebar', colors.Sidebar);
    root?.style.setProperty('--StatusBar', colors.StatusBar);
    root?.style.setProperty('--Titlebar', colors.Titlebar);
    root?.style.setProperty('--Accent', colors.Accent);
    root?.style.setProperty('--Text', colors.Text);
    root?.style.setProperty('--Border1', colors.Border_1);
  });

  window.api.setWallpaperPath((event, path) => {
    console.log(path);
    document.body.style.backgroundImage = `url(${path})`;
  });

  window.api.setLoading(() => {
    console.log('splash finished');
    setIsLoading(false);
  });
  window.api.setLoadingText((event, text) => setLoadingText(text));

  return isLoading ? <Splash splashText={loadingText} /> : <MainWindow />;
}

export default App;
