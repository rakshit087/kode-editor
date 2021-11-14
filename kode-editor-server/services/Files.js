const fs = require("fs");

// Read the File Names.
function readFileNames() {
  return new Promise((resolve, reject) => {
    try {
      fs.readdir("./public/", (err, files) => {
        resolve(files);
      });
    } catch (err) {
      reject(err);
    }
  });
}

// Read content of a given file
function readFileContent(file) {
  return new Promise((resolve, reject) => {
    try {
      fs.readFile("./public/" + file, "utf8", (err, content) => {
        resolve(content);
      });
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  async get(req, res) {
    let data = {};
    const fileNames = await readFileNames();
    let count = 0;
    fileNames.forEach(async (name) => {
      const content = await readFileContent(name);
      data[name] = content;
      if (count === fileNames.length - 1) {
        res.send(data);
      }
      count++;
    });
  },
};
