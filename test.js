const fs = require('fs');
const path = require('path');

function deleteDir(dirPath) {
  let files = []
  if (fs.existsSync(dirPath)) {
    files = fs.readdirSync(dirPath)
    files.forEach(f => {
      const absPath = dirPath + '/' + f;
      if (fs.statSync(absPath).isDirectory()) {
        deleteDir(absPath);
      } else {
        fs.unlinkSync(absPath);
      }
    });
    fs.rmdirSync(dirPath);
  }
}
deleteDir(path.resolve(__dirname, 'a'));