import React, { useEffect } from 'react';
import MainContent from './Components/MainContent/MainContent';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  useEffect(() => {
    window.api.reqColors();
    console.log('requested colors');
  }, []);

  useEffect(() => {
    window.api.copyWallpaper();
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
    root?.style.setProperty('--Border_1', colors.Border_1);
  });

  window.api.setWallpaperPath((event, path) => {
    console.log(path);
    document.body.style.backgroundImage = `url(${path})`;
  });

  return (
    <div className="flex h-screen w-screen text-[var(--Text)] bg-[var(--MainBackground)] overflow-hidden p-2">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
