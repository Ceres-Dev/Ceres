import React from 'react';
import Editor from './Editor/Editor';
import Sidebar from './Sidebar/Sidebar';

function MainContent() {
  return (
    <div className="w-screen h-full flex bg-[var(--bgSecondary)] relative overflow-hidden">
      <Sidebar />
      <Editor />
    </div>
  );
}

export default MainContent;
