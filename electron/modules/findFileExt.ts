// eslint-disable-next-line consistent-return
function findFileExt(filepath: string) {
  const f = filepath.substring(filepath.lastIndexOf('.') + 1, filepath.length);

  console.log(f);

  if (f === 'js' || f === 'cjs' || f === 'mjs' || f === 'jsx') {
    return 'javascript';
  }
  if (f === 'ts' || f === 'tsx') {
    return 'typescript';
  }
  if (f === 'css') {
    return 'css';
  }
  if (f === 'scss') {
    return 'scss';
  }
  if (f === 'sass') {
    return 'scss';
  }
  if (f === 'less') {
    return 'less';
  }
  if (f === 'html') {
    return 'html';
  }
  if (f === 'json') {
    return 'json';
  }
  if (f === 'py') {
    return 'python';
  }
  if (f === 'xml') {
    return 'xml';
  }
  if (f === 'php') {
    return 'php';
  }
  if (f === 'csharp') {
    return 'csharp';
  }
  if (f === 'cpp') {
    return 'cpp';
  }
  if (f === 'bat') {
    return 'batch';
  }
}

export default findFileExt;
