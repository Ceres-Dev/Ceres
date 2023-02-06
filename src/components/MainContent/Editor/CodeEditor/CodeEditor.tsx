import React, { useEffect } from 'react';
import MonacoEditor, { useMonaco } from '@monaco-editor/react';

function CodeEditor() {
  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      import('./themes/Valence.json').then((data: any) => {
        monaco.editor.defineTheme('valence', data);
        monaco.editor.setTheme('valence');
      });
    }
  }, [monaco]);

  return (
    <div className="w-full h-full flex">
      <MonacoEditor
        height="100%"
        width="100%"
        language="typescript"
        theme="valence"
        value={`const hello = "hello world";\nconsole.log(hello);`}
        options={{
          cursorBlinking: 'phase',
          cursorSmoothCaretAnimation: true,
          cursorStyle: 'line',
          fontFamily: 'Consolas',
          fontLigatures: true,
          autoClosingBrackets: 'always',
          autoClosingDelete: 'auto',
          autoIndent: 'full',
          autoClosingQuotes: 'always',
          formatOnPaste: true,
          formatOnType: true,
          linkedEditing: true,
          tabSize: 2,
          smoothScrolling: true,
          'semanticHighlighting.enabled': 'configuredByTheme',
          minimap: {
            enabled: false
          },
          mouseWheelScrollSensitivity: 1.2
        }}
      />
    </div>
  );
}

export default CodeEditor;
