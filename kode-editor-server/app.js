const cors = require("cors")
const express = require("express");

const app = express();
app.use(cors());
app.use(express.static(__dirname + "/public"));
//Send the user the output.
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/", function (req, res) {
  res.send(200);
});

app.get("/initialize", function (req, res) {
  res.json({
      "app.js": {
        type: "javascript",
        content: "const timers = document.querySelector('#time span')setInterval(() => {timer.innerText = new Date().toLocaleString()}, 1000)",
      },
      "index.html": {
        type: "html",
        content: '<!doctype HTML><html><head><title>Kode Editor</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="/style.css" /></head><body><h1>Welcome to codedamn</h1><p>Hey there! This is a HTML/CSS/JS playground!</p><ul><li>You can edit these files....!</li><li>You can play with CSS/JS files</li><li>You can also create new files</li><li>Feel free to use it as your local development environment</li></ul> <p>Made with 💜 by Rakshit</p><div id="time">Time right now: <span></span></div><script src="/script.js"></script></body></html>'
      },
      "styles.css": {
        type: "css",
        content: "body{padding:10px;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;line-height:1.6;font-size:18px;background-color:#282a36;color:#50fa7b}ul{color:#f1fa8c}p{color:#ff79c6}",
      },
    });
});

app.listen(8000);
console.log("Server started!");
