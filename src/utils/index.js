const fs = require('fs');
const path = require('path');


function copy(from, to) {
  const fromUrl = from;
  const toUrl = to;

  const paths = fs.readdirSync(from);

  paths.forEach((pathItem) => {
    const currFromUrl = path.resolve(fromUrl, pathItem);
    const currToUrl = path.resolve(toUrl, pathItem);

    const isFile = fs.statSync(currFromUrl).isFile();
    
    if (isFile) {
      const readable = fs.createReadStream(currFromUrl);
      const writable = fs.createWriteStream(currToUrl);
      readable.pipe(writable);
    } else {
      fs.mkdirSync(currToUrl);
      copy(currFromUrl, currToUrl);
    }
  })
}

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

module.exports = {
  copy,
  deleteDir
}