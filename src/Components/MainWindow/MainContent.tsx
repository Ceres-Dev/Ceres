import React from 'react';
import MainContent from './MainContent/MainContent';
import Sidebar from './Sidebar/Sidebar';

function MainWindow() {
  return (
    <div className="flex h-screen w-screen text-[var(--Text)] bg-[var(--MainBackground)] overflow-hidden p-2">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default MainWindow;
