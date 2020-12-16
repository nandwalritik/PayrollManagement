const uuid = require("uuid");
const db = require("../db");
const Helper = require("./Helper");
const createAdmin = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res
      .status(400)
      .send({ message: "Please enter all required fields" });
  }
  if (!Helper.isValidEmail(req.body.email)) {
    return res
      .status(400)
      .send({ message: "Please enter a valid email address" });
  }
  // console.log(req)
  const hashPassword = Helper.hashPassword(req.body.password);
  const createQuery = `INSERT INTO admin(admin_id,username,email,password) VALUES($1,$2,$3,$4) returning *`;
  const values = [uuid.v4(), req.body.username, req.body.email, hashPassword];
  try {
    const { rows } = await db.query(createQuery, values);
    const token = Helper.generateToken(rows[0].email);
    // console.log("This is token ",token)
    return res.status(201).send({ message: "Account.Create", token: token });
  } catch (err) {
    if (err.routine === "_bt_check_unique") {
      return res
        .status(400)
        .send({ message: "Email address is already taken" });
    }
    return res.status(400).send(err);
  }
};
const adminLogin = async (req, res) => {
  console.log(req);
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .send({ message: "Please enter a valid email address" });
  }
  if (!Helper.isValidEmail(req.body.email)) {
    return res
      .status(400)
      .send({ message: "Please enter a valid email address" });
  }
  const query = "SELECT * FROM admin where email = $1";
  try {
    const { rows } = await db.query(query, [req.body.email]);
    if (!rows[0]) {
      return res
        .status(400)
        .send({ message: "The credentials you provided is incorrect" });
    }
    if (!Helper.comparePassword(rows[0].password, req.body.password)) {
      return res
        .status(400)
        .send({ message: "The credentials you provided is incorrect" });
    }
    const token = Helper.generateToken(rows[0].email);
    return res.status(200).send({ message: "Auth.verified", token: token });
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};
const createEmployee = async (req, res) => {
  const query = `INSERT INTO Employee(
    paid_leave_taken,
    encashed_leave_this_month,
    encashed_leave_till_date,
    e_id,
    doj,
    name,
    dob,
    age,
    years_of_service,
    address,
    city,
    state,
    pincode,
    email,
    password,
    org_name,
    dept_id,
    grade_id)
    VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18) 
    returning *`;
  const hashPassword = Helper.hashPassword(req.body.password);
  const values = [
    0,
    0,
    0,
    uuid.v4(),
    req.body.doj,
    req.body.name,
    req.body.dob,
    req.body.address,
    req.body.city,
    req.body.state,
    req.body.pincode,
    req.body.email,
    hashPassword,
    req.body.org_name,
    req.body.dept_id,
    req.body.grade_id,
  ];
  try {
    const { rows } = await db.query(query, values);
    // const token = Helper.generateToken(rows[0].e_id);
    // console.log("This is token ",token)
    console.log(rows);
    return res.status(201).send({ message: "User.Added" });
  } catch (err) {
    if (err.routine === "_bt_check_unique") {
      return res
        .status(400)
        .send({ message: "Email address is already taken" });
    }
    return res.status(400).send({ error: err });
  }
};
const deleteEmployee = async (req, res) => {
  const query = `DELETE FROM Employee WHERE e_id = $1`;
  try {
    const { rows } = await db.query(query, [req.body.e_id]);
    return res.status(200).send({ message: "User.Deleted" });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
};
const getAllEmployees = async (req, res) => {
  const query = `SELECT * from employee`;
  try {
    const { rows } = await db.query(query);
    // console.log(rows);
    return res.status(200).send({ message: "All Employees", data: rows });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
};
const employeeLogin = async (req, res) => {
  console.log(req);
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .send({ message: "Please enter a valid email address" });
  }
  if (!Helper.isValidEmail(req.body.email)) {
    return res
      .status(400)
      .send({ message: "Please enter a valid email address" });
  }
  const query = "SELECT * FROM employee where email = $1";
  try {
    const { rows } = await db.query(query, [req.body.email]);
    console.log(rows);
    if (!rows[0]) {
      return res
        .status(400)
        .send({ message: "The credentials you provided is incorrect" });
    }
    if (!Helper.comparePassword(rows[0].password, req.body.password)) {
      return res
        .status(400)
        .send({ message: "The credentials you provided is incorrect" });
    }
    const token = Helper.generateToken(rows[0].email);
    return res.status(200).send({ message: "Auth.verified", token: token });
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};
const getEmployeeProfile = async (req, res) => {
  console.log(req);
  const query = "SELECT * FROM employee where email = $1";
  try {
    const { rows } = await db.query(query, [req.body.email]);
    console.log(rows);
    return res.status(200).send({ message: "Employee Data", data: rows });
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};
const generateReports = async (req, res) => {
  console.log(req);
  const query = "SELECT * FROM employee natural join payroll where email = $1";
  try {
    const { rows } = await db.query(query, [req.body.email]);
    console.log(rows);
    return res.status(200).send({ message: "Report Data", data: rows });
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};
const updateEmployeedata = async (req, res) => {
  const queryGet = "SELECT * FROM employee where email=$1";
  console.log(req.body.email);
  var data = {};
  try {
    const employee = await db.query(queryGet, [req.body.email]);
    data = employee.rows[0];
  } catch (err) {
    console.log(err);
  }
  console.log("Data that is to be updated ", data);

  const updateQuery = `UPDATE employee set 
  paid_leave_taken=$1,
  encashed_leave_this_month=$2,
  encashed_leave_till_date=$3,
  e_id=$4,
  doj=$5,
  name=$6,
  dob=$7,
  age=$8,
  years_of_service=$9,
  address=$10,
  city=$11,
  state=$12,
  pincode=$13,
  org_name=$14,
  dept_id=$15,
  grade_id=$16
  where email=$17
  returning *`;
  console.log(req.body.dob, data.dob);
  const values = [
    req.body.paid_leave_taken !== undefined
      ? req.body.paid_leave_taken
      : data.paid_leave_taken,
    req.body.encashed_leave_this_month !== undefined
      ? req.body.encashed_leave_this_month
      : data.encashed_leave_this_month,
    req.body.encashed_leave_till_date !== undefined
      ? req.body.encashed_leave_till_date
      : data.encashed_leave_till_date,
    req.body.e_id !== undefined ? req.body.e_id : data.e_id,
    req.body.doj !== undefined ? req.body.doj : data.doj,
    req.body.name !== undefined ? req.body.name : data.name,
    req.body.dob !== undefined ? req.body.doj : data.doj,
    req.body.age !== undefined ? req.body.age : data.age,
    req.body.years_of_service !== undefined
      ? req.body.years_of_service
      : data.years_of_service,
    req.body.address !== undefined ? req.body.address : data.address,
    req.body.city !== undefined ? req.body.city : data.city,
    req.body.state !== undefined ? req.body.state : data.state,
    req.body.pincode !== undefined ? req.body.pincode : data.pincode,
    req.body.org_name !== undefined ? req.body.org_name : data.org_name,
    req.body.dept_id !== undefined ? req.body.dept_id : data.dept_id,
    req.body.grade_id !== undefined ? req.body.grade_id : data.grade_id,
    req.body.email,
  ];
  console.log(values);
  try {
    const { rows } = await db.query(updateQuery, values);
    console.log(rows);
    return res
      .status(200)
      .send({ message: "User data updated successfully", data: rows });
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};
const addDepartment = async (req, res) => {
  const query = `INSERT into department(
    dept_id,
    dept_name,
    org_name)
    VALUES($1,$2,$3)`;
  const values = [req.body.dept_id, req.body.dept_name, req.body.org_name];
  try {
    const { rows } = await db.query(query, values);
    console.log(rows);
    return res.status(200).send({
      message: "Successfully added employee to department",
      data: rows,
    });
  } catch (err) {
    if (err.routine === "_bt_check_unique") {
      return res.status(400).send({ message: "Department Id already exists" });
    }
    return res.status(400).send({ message: err });
  }
};
const addGrade = async (req, res) => {
  const query = `INSERT into gradepay(
    grade_id,
    grade_name,
    basic_pay,
    grade_pf,
    grade_bonus,
    grade_ta,
    grade_da)
    VALUES($1,$2,$3,$4,$5,$6,$7)`;
  const values = [
    req.body.grade_id,
    req.body.grade_name,
    req.body.grade_pay,
    req.body.grade_pf,
    req.body.grade_bonus,
    req.body.grade_ta,
    req.body.grade_da,
  ];
  try {
    const { rows } = await db.query(query, values);
    return res
      .status(200)
      .send({ message: "Grade added for employee", data: rows });
  } catch (err) {
    if (err.routine === "_bt_check_unique") {
      return res.status(400).send({ message: "Grade Id already exists" });
    }
    return res.status(400).send({ message: err });
  }
};
const updateEmployeePassword = async (req, res) => {
  const query = `UPDATE employee set password = $1 where email=$2 returning email,password`;
  const newPassword = Helper.hashPassword(req.body.password);
  const values = [newPassword, req.body.email];
  try {
    const { rows } = await db.query(query, values);
    return res
      .status(200)
      .send({ message: "Password updated successfully", data: rows });
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};
module.exports = {
  createAdmin,
  adminLogin,
  createEmployee,
  deleteEmployee,
  getAllEmployees,
  employeeLogin,
  getEmployeeProfile,
  generateReports,
  updateEmployeedata,
  addDepartment,
  addGrade,
  updateEmployeePassword,
};
