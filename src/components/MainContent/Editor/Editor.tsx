import React from 'react';
import CodeEditor from './CodeEditor/CodeEditor';
import TabBar from './TabBar/TabBar';

function Editor() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <TabBar />
      <CodeEditor />
    </div>
  );
}

export default Editor;
