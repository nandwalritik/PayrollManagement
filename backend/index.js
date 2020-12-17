const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3003;
const db = require("./db");
const Auth = require("./src/middleware/Auth");
const User = require("./src/queries");
const dotenv = require("dotenv");
const cors = require("cors");
app.use(cors())
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
app.post("/api/adminSignup", User.createAdmin);
app.post("/api/adminLogin", User.adminLogin);
app.post("/api/addEmployee", User.createEmployee);
app.post("/api/deleteEmployee", User.deleteEmployee);
app.get("/api/getAllEmployees", User.getAllEmployees);
app.post("/api/employeeLogin", User.employeeLogin);
app.get("/api/employeeDetails", User.getEmployeeProfile);
app.get("/api/getReports", User.generateReports);
app.post("/api/updateEmployeeData", User.updateEmployeedata);
app.post("/api/addDepartment", User.addDepartment);
app.post("/api/addGrade", User.addGrade);
app.post("/api/updateEmployeePassword", User.updateEmployeePassword);
app.post("/api/updateAdminPassword", User.updateAdminPassword);
app.post("/api/markAttendance", User.markAttendance);
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
