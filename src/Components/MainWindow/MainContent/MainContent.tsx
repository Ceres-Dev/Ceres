import React from 'react';
import Editor from './Editor/Editor';
import StatusBar from './StatusBar/StatusBar';
import TopBar from './TopBar/TopBar';

function MainContent() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <TopBar />
      <Editor />
      <StatusBar />
    </div>
  );
}

export default MainContent;
