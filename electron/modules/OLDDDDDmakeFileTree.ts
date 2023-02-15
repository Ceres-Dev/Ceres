// Anant Narayan: I followed this tutorial: https://jakelunn.medium.com/simple-file-tree-electron-es6-71e8abc2c52
import fs from 'fs-extra';

class FileTree {
  path;

  name;

  items: [];

  constructor(path: string, name: string) {
    this.path = path;
    this.name = name;
    this.items = [];
  }

  build = () => {
    this.items = FileTree.readDir(this.path);
  };

  static readDir(path: string) {
    const fileArray = [] as any;

    // fs.readdirSync(path).forEach((file) => {
    //   const fileInfo = new FileTree(`${path}\\${file}`, file);

    //   const stat = fs.statSync(fileInfo.path);

    //   if (stat.isDirectory()) {
    //     fileInfo.items = FileTree.readDir(fileInfo.path);
    //   }

    //   fileArray.push(fileInfo);
    // });

    fs.readdir(path)
      .then((files) => {
        if (files) {
          files.forEach((file) => {
            const fileInfo = new FileTree(`${path}\\${file}`, file);
            // eslint-disable-next-line no-shadow
            fs.stat(fileInfo.path)
              .then((stats) => {
                if (stats.isDirectory()) {
                  fileInfo.items = FileTree.readDir(fileInfo.path);
                }
              })
              .catch((err) => {
                if (err) {
                  // do nothing
                }
              });
            fileArray.items = FileTree.readDir(fileInfo.path);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return fileArray;
  }
}

export default FileTree;
