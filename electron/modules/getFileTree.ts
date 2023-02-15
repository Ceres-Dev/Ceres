import dirTree from 'directory-tree';

function getFileTree(path: string) {
  const treeObj = dirTree(path);
  console.log(treeObj);
}

export default getFileTree;
