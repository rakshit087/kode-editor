const express = require("express");
const cors = require("cors");
const Files = require("./services/Files");

const app = express();
app.use(cors());
app.use(express.static(__dirname + "/public"));

//Send the user the output.
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/files", Files.get);

app.listen(8000);
console.log("Server started!");
