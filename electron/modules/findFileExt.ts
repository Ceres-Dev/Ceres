function findFileExt(filepath: string) {
  const fileExt = filepath.substring(filepath.lastIndexOf('.') + 1, filepath.length);

  console.log(fileExt);

  // if (fileExt === 'js' || fileExt === 'cjs' || fileExt === 'ts') {
  // }
}

export default findFileExt;
