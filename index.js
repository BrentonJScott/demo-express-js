const express = require("express");
const path = require("path")

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('static'))
app.use(express.json());

app.get("/api/data", (req, res) => {
  console.log(process.env.TEST_ENV);
  res.status(200).json({
    data: [
      { id: 1, title: "Some data" },
      { id: 2, title: "Some other data" },
      { id: 2, title: process.env.TEST_ENV },
    ],
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/index", (req, res) => {
  res.redirect("/")
});


app.listen(port, () => console.log(`Listening on ${port}`));
