const express = require("express");

const app = express();

app.use("/styles", express.static(__dirname + "/public/styles"));
app.use("/images", express.static(__dirname + "/public/images"));

app.get("/home", (_, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (_, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (_, res) => {
  res.sendFile(__dirname + "/views/artwork.html");
});

app.listen(3000, () => {
  console.log("My first app listening on port 3000! ");
});
