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

// Write content to given File
function writeFile(name, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./public/" + name, content, (err) => {
      if (err) reject(false);
      resolve(true);
    });
  });
}

module.exports = {
  //Handle Get Request
  async get(req, res) {
    let data = {};
    const fileNames = await readFileNames();
    let count = 0;
    fileNames.forEach(async (name) => {
      const content = await readFileContent(name);
      const extension = name.split(".").pop();
      let type = "other";
      if (extension == "py") {
        type = "python";
      } else if (extension == "html") {
        type = "html";
      } else if (extension == "css") {
        type = "css";
      } else if (extension == "js") {
        type = "javascript";
      } else if (extension == "java") {
        type = "java";
      } else if (extension == "c") {
        type = "c";
      } else if (extension == "sass") {
        type = "sass";
      } else if (extension == "less") {
        type = "less";
      }
      data[name] = {
        type: type,
        content: content,
      };
      if (count === fileNames.length - 1) {
        res.send(data);
      }
      count++;
    });
  },
  //Handle Post Request
  async post(req, res) {
    const data = await req.body;
    var size = Object.keys(data).length;
    let count = 0;
    for (const name in data) {
      const status = await writeFile(name, data[name].content);
      if (status) {
        count++;
        if (count === size - 1) res.send({ status: true });
      } else {
        res.send({ status: false });
      }
    }
  },
};
