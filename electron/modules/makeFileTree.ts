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
    this.items = FileTree.getFileInfo(this.path);
  };

  static getFileInfo(path: string) {
    const fileArray = [] as any;

    fs.readdir(path, (_err, data) => {
      data.forEach((file) => {
        console.log(file);

        const fileInfo = new FileTree(`${path}/${file}`, file);

        // eslint-disable-next-line no-shadow
        fs.stat(fileInfo.path, (_err, stats) => {
          if (stats.isDirectory()) {
            fileInfo.items = FileTree.getFileInfo(fileInfo.path);
          }

          fileArray.push(fileInfo);
        });
      });
    });

    return fileArray;
  }
}

export default FileTree;
