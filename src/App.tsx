import React, { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import Titlebar from './Components/Titlebar/Titlebar';
import MainContent from './Components/MainContent/MainContent';
import Statusbar from './Components/Statusbar/Statusbar';

function App() {
  return (
    <div className="bg-[#131418] w-screen h-screen flex-col ">
      <Titlebar />
      <MainContent />
      <Statusbar />
    </div>
  );
}

export default App;
