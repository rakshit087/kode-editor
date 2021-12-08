const express = require("express");
const cors = require("cors");
const Files = require("./services/Files");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(
  bodyParser.json({
    extended: true,
  })
);

//Send the user the output.
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/files", Files.get);
app.post("/files", Files.post);

app.listen(8000);
console.log("Server started! Listening to port 8000.");
