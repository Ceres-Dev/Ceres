import React from 'react';
import TabBar from './TabBar/TabBar';
import Titlebar from './Titlebar/Titlebar';

function TopBar() {
  return (
    <div className="w-full h-12 bg-[var(--Titlebar)] rounded-lg flex draggable border border-[var(--Border1)] overflow-hidden">
      <TabBar />
      <Titlebar />
    </div>
  );
}

export default TopBar;
