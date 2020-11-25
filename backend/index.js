const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const db = require("./db");
const Auth = require("./src/middleware/Auth");
const User = require("./src/queries");
const dotenv = require("dotenv");
dotenv.config();
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});
app.post("/api/adminSignup", User.create);
app.post('/api/adminLogin',User.adminLogin)
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
