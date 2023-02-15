import React from 'react';
import CodeEditor from './CodeEditor/CodeEditor';

function Editor() {
  return (
    <div className="w-full h-full rounded-lg mt-2 mb-2 bg-[var(--Editor)] border border-[var(--Border1)] flex overflow-hidden">
      <CodeEditor />
    </div>
  );
}

export default Editor;