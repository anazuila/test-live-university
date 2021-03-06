const express = require("express");
const port = 3000;
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.render("index");
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
