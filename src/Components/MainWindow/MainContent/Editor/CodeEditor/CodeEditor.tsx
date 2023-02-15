import React, { useState, useEffect } from 'react';
import './CodeEditor.css';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

function CodeEditor() {
  const onChange = React.useCallback((value) => {
    console.log('value:', value);
  }, []);

  const [editorHeight, setEditorHeight] = useState('');
  const [editorWidth, setEditorWidth] = useState('');

  function updateEditorSize() {
    const root = document.getElementById('root');
    setEditorHeight(`calc(100vh - 106px)`);
    setEditorWidth(`calc(100vw - ${root?.getAttribute('--SidebarWidth')})`);
  }

  useEffect(() => updateEditorSize(), []);
  console.log(editorHeight);
  console.log(editorWidth);

  return (
    <div className="w-full h-full Codemirror" id="Editor">
      <CodeMirror
        value="console.log('hello world!');"
        height={editorHeight}
        width={editorWidth}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        theme={oneDark}
        autoFocus
      />
    </div>
  );
}

export default CodeEditor;
