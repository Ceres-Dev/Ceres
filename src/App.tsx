import React, { useEffect } from 'react';
import MainContent from './components/MainContent/MainContent';
import Titlebar from './components/Titlebar/Titlebar';

function App() {
  useEffect(() => {
    window.api.reqColors();
    console.log('requested');
  }, []);

  window.api.setColors((event, colors) => {
    console.log(colors.BgPrimary);
    const root = document.getElementById('root');
    root?.style.setProperty('--bgPrimary', colors.BgPrimary);
    root?.style.setProperty('--bgPrimaryBorder', colors.BgPrimaryBorder);
    root?.style.setProperty('--bgSecondary', colors.BgSecondary);
    root?.style.setProperty('--fgPrimary', colors.FgPrimary);
    root?.style.setProperty('--accent', colors.Accent);
  });

  return (
    <div className="flex flex-col h-screen w-screen text-[var(--fgPrimary)] bg-[var(--bgPrimary)] overflow-hidden">
      <Titlebar />
      <MainContent />
    </div>
  );
}

export default App;
