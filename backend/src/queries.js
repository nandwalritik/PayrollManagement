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
  //console.log(req)
  const hashPassword = Helper.hashPassword(req.body.password);
  const createQuery = `INSERT INTO admin(admin_id,username,email,password) VALUES($1,$2,$3,$4) returning *`;
  const values = [uuid.v4(), req.body.username, req.body.email, hashPassword];
  try {
    const { rows } = await db.query(createQuery, values);
    const token = Helper.generateToken(rows[0].email);
    //console.log("This is token ",token)
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
  //console.log(req);
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
  const query = `INSERT INTO employee(
    present,
    paid_leave_taken,
    encashed_leave_this_month,
    encashed_leave_till_date,
    e_id,
    doj,
    name,
    dob,
    address,
    city,
    state,
    pincode,
    email,
    password,
    org_name,
    dept_id,
    grade_id)
    VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17) 
    returning *`;
  const hashPassword = Helper.hashPassword("abcd1234");
  //console.log(req.body);
  const values = [
    0,
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
    //console.log("This is token ",token)
    //console.log(rows);
    return res.status(201).send({ message: "User Added" });
  } catch (err) {
    //console.log(err);
    if (err.routine === "_bt_check_unique") {
      return res
        .status(400)
        .send({ message: "Email address is already taken" });
    }
    return res.status(400).send({ error: err });
  }
};
const deleteEmployee = async (req, res) => {
  const query = `DELETE FROM Employee WHERE email = $1`;
  try {
    const { rows } = await db.query(query, [req.body.email]);
    return res.status(200).send({ message: "User.Deleted" });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
};
const getAllEmployees = async (req, res) => {
  const query = `SELECT * from employee`;
  try {
    const { rows } = await db.query(query);
    // //console.log(rows);
    return res.status(200).send({ message: "All Employees", data: rows });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
};
const employeeLogin = async (req, res) => {
  //console.log(req);
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
    //console.log(rows);
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
  // console.log(req.params);
  const query = "SELECT * FROM employee where email = $1";
  try {
    const { rows } = await db.query(query, [req.params.email]);
    //console.log(rows);
    return res.status(200).send({ message: "Employee Data", data: rows });
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};
// const generateReports = async (req, res) => {
//   //console.log(req);
//   const query = "SELECT * FROM employee natural join payroll where email = $1";
//   try {
//     const { rows } = await db.query(query, [req.body.email]);
//     //console.log(rows);
//     return res.status(200).send({ message: "Report Data", data: rows });
//   } catch (error) {
//     return res.status(400).send({ message: error });
//   }
// };
const updateEmployeedata = async (req, res) => {
  const queryGet = "SELECT * FROM employee where email=$1";
  console.log(req.body.email);
  // var data = {};
  // try {
  //   const employee = await db.query(queryGet, [req.body.email]);
  //   data = employee.rows[0];
  // } catch (err) {
  //   console.log(err);
  // }
  // //console.log("Data that is to be updated ", data);

  const updateQuery = `UPDATE employee set 
  doj=$1,
  name=$2,
  dob=$3,
  address=$4,
  city=$5,
  state=$6,
  pincode=$7,
  org_name=$8,
  dept_id=$9,
  grade_id=$10
  where email=$11
  returning *`;
  //console.log(req.body.dob, data.dob);
  // const values = [
  //   req.body.doj !== undefined ? req.body.doj : data.doj,
  //   req.body.name !== undefined ? req.body.name : data.name,
  //   req.body.dob !== undefined ? req.body.doj : data.doj,
  //   req.body.address !== undefined ? req.body.address : data.address,
  //   req.body.city !== undefined ? req.body.city : data.city,
  //   req.body.state !== undefined ? req.body.state : data.state,
  //   req.body.pincode !== undefined ? req.body.pincode : data.pincode,
  //   req.body.org_name !== undefined ? req.body.org_name : data.org_name,
  //   req.body.dept_id !== undefined ? req.body.dept_id : data.dept_id,
  //   req.body.grade_id !== undefined ? req.body.grade_id : data.grade_id,
  //   req.body.email
  // ];
  const values = [
    req.body.doj,
    req.body.name,
    req.body.dob,
    req.body.address,
    req.body.city,
    req.body.state,
    req.body.pincode,
    req.body.org_name,
    req.body.dept_id,
    req.body.grade_id,
    req.body.email,
  ];
  //console.log(values);
  try {
    const { rows } = await db.query(updateQuery, values);
    ////console.log(rows);
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
  const values = [uuid.v4(), req.body.dept_name, req.body.org_name];
  try {
    const { rows } = await db.query(query, values);
    ////console.log(rows);
    return res.status(200).send({
      message: "Department Added Successfully",
      data: rows,
    });
  } catch (err) {
    if (err.routine === "_bt_check_unique") {
      return res.status(400).send({ message: "Department already exists" });
    }
    return res.status(400).send({ message: err });
  }
};
const getDepartments = async (req, res) => {
  const query = `SELECT * from department`;
  try {
    const { rows } = await db.query(query);
    return res.status(200).send(rows);
  } catch (err) {
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
    VALUES($1,$2,$3,$4,$5,$6,$7)
    returning *`;
  const values = [
    uuid.v4(),
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
      return res.status(400).send({ message: "Grade already exists" });
    }
    return res.status(400).send({ message: err });
  }
};
const getGrades = async (req, res) => {
  const query = `Select * from gradepay`;
  try {
    const { rows } = await db.query(query);
    return res.status(200).send(rows);
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};
const updateEmployeePassword = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .send({ message: "Please enter a valid email address and password" });
  }
  if (!Helper.isValidEmail(req.body.email)) {
    return res
      .status(400)
      .send({ message: "Please enter a valid email address" });
  }
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
const updateAdminPassword = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .send({ message: "Please enter a valid email address and password" });
  }
  if (!Helper.isValidEmail(req.body.email)) {
    return res
      .status(400)
      .send({ message: "Please enter a valid email address" });
  }
  const query = `UPDATE admin set password = $1 where email=$2 returning email,password`;
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
const addOrganisation = async (req, res) => {
  const query = `INSERT into organisation(
    org_name,
    email,
    location,
    contact_number,
    paid_leave_limit,
    encashed_leave_limit
    ) values($1,$2,$3,$4,$5,$6) returning *`;
  const values = [
    req.body.org_name,
    req.body.email,
    req.body.location,
    req.body.contact_number,
    req.body.paid_leave_limit,
    req.body.encashed_leave_limit,
  ];
  try {
    const { rows } = await db.query(query, values);
    return res.status(200).send({ message: "Organisation.Added", data: rows });
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};
const markAttendance = async (req, res) => {
  const updateQuery = `UPDATE employee set
  present=$1,
  paid_leave_taken=$2,
  encashed_leave_this_month=$3
  where email=$4
  returning *`;
  const values = [
    req.body.present === 1 ? 1 : 0,
    req.body.paid_leave_taken === 1 ? 1 : 0,
    req.body.encashed_leave_this_month === 1 ? 1 : 0,
    req.body.email,
  ];
  try {
    const { rows } = await db.query(updateQuery, values);
    //console.log(rows);
    return res
      .status(200)
      .send({ message: "Attendance recorded successfully", data: rows });
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};
const addExtras = async (req, res) => {
  const query = `INSERT into extras(
    ex_type,
    ex_id
    ) values($1,$2) returning *`;
  const values = [req.body.ex_type, uuid.v4()];
  try {
    const { rows } = await db.query(query, values);
    return res.status(200).send({ message: "Extras added", data: rows });
  } catch (err) {
    return res.status(400).send(err);
  }
};
const getExtras = async (req, res) => {
  const query = `Select * from extras`;
  try {
    const { rows } = await db.query(query);
    return res.status(200).send(rows);
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};
const addIsgiven = async (req, res) => {
  const query = `Insert into is_given(
    ex_id,
    amount,
    email)
    values($1,$2,$3)
    returning *`;
  const values = [req.body.ex_id, req.body.amount, req.body.email];
  try {
    const { rows } = await db.query(query, values);
    return res
      .status(200)
      .send({ message: "Extras added for employee", data: rows });
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};
const getExtraForemp = async (req, res) => {
  const query = `Select * from is_given where email=$1`;
  const values = [req.params.email];
  try {
    const { rows } = await db.query(query, values);
    return res.status(200).send(rows);
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};
const generateReports = async (req, res) => {
  console.log(req);
  const { mail } = req.params;
  const query = `SELECT * FROM (
    employee join payroll 
    on employee.email=payroll.emp_mail)
    natural join gradepay where 
    employee.email = $1 AND month=$2 AND year=$3`;
  try {
    const { rows } = await db.query(query, [
      mail,
      date_part("month", current_date),
      date_part("year", current_date),
    ]);
    console.log(rows);
    return res.status(200).send({ message: "Report Data", data: rows });
  } catch (error) {
    return res.status(400).send({ message: error });
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
  updateAdminPassword,
  getDepartments,
  getGrades,
  addOrganisation,
  markAttendance,
  addExtras,
  getExtras,
  addIsgiven,
  getExtraForemp,
  generateReports,
};
