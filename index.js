const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/api/main", function (req, res) {
  res.send(
    " <h1>Assignment on Express</h1> "
  );
});
app.listen("3000", () => {
  console.log("connected");
});