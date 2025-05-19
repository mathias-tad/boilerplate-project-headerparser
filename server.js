const express = require("express");
const app = express();
const PORT = 2222;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", (req, res, next) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
});

app.listen(PORT, () => {
  console.log(`Listenning to port: ${PORT}`);
});
