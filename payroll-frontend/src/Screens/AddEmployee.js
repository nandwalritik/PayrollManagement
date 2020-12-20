import React, { useState, useEffect } from "react";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import { useFormik } from "formik";
import { base_url } from "../baseUrl";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const AddEmployee = () => {
  const [departmentsList, setDeplist] = useState([]);
  const [gradesList, setGradeslist] = useState([]);
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [msg, setMessage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    history.goBack();
  };
  const initialValues = {
    name: "",
    dob: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
    dept_id: "",
    grade_id: "",
    org_name: "SGSITS",
    doj: "",
    email: "",
  };

  const onSubmit = async (values) => {
    console.log(values);
    const body = JSON.stringify(values);
    fetch(`${base_url}addEmployee`, {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
        handleClickOpen();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  useEffect(() => {
    getDepartments();
    getGrades();
  }, []);
  const getDepartments = async () => {
    fetch(`${base_url}getDepartments`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setDeplist(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getGrades = async () => {
    fetch(`${base_url}getGrades`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setGradeslist(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const departments = departmentsList.map((dept) => {
    return <option value={dept.dept_id}>{dept.dept_name}</option>;
  });
  const grades = gradesList.map((grade) => {
    return <option value={grade.grade_id}>{grade.grade_name}</option>;
  });
  return (
    <>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Message"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {msg}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={handleClose} color="primary">
              Disagree
            </Button> */}
            <Button onClick={handleClose} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className="App">
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="grouping">
            <h3>Basic Details</h3>
            <hr className="Underline" />
            <div className="form-control">
              <label htmlFor="name">Name : </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange("name")}
                required
              />
            </div>

            <div className="form-control">
              <label htmlFor="dob">Dob : </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formik.values.dob}
                onChange={formik.handleChange("dob")}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="address">Address : </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange("address")}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="city">City : </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange("city")}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="state">State : </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange("state")}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="pincode" className="pincode">
                Pin-Code :{" "}
              </label>
              <input
                type="number"
                id="pincode"
                name="pincode"
                value={formik.values.pincode}
                onChange={formik.handleChange("pincode")}
                size="6"
                maxLength="6"
              />
            </div>
          </div>

          <div className="grouping">
            <h3>Company Details</h3>
            <hr className="Underline" />
            <div className="form-control">
              <label htmlFor="org_name">Email : </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="Dept">Department: </label>
              <select
                style={styles.dropDown}
                value={formik.values.dept_id}
                onChange={formik.handleChange("dept_id")}
                required
              >
                {departments}
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="grade_id">Grade-ID : </label>
              <select
                style={styles.dropDown}
                value={formik.values.grade_id}
                onChange={formik.handleChange("grade_id")}
                required
              >
                {grades}
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="org_name">Org Name: </label>
              <input
                type="text"
                id="org_name"
                name="org_name"
                value={formik.values.org_name}
                // onChange={handleChange}
                disabled={true}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="doj">doj : </label>
              <input
                // style={styles.input}
                type="date"
                id="doj"
                name="doj"
                value={formik.values.doj}
                onChange={formik.handleChange("doj")}
                required
              />
            </div>
          </div>
          <button type="submit" onClick={formik.handleSubmit}>
            Add
          </button>
        </form>
      </div>
    </>
  );
};

const styles = {
  input: {
    width: window.innerWidth / 4.5,
    height: "70%",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    marginTop: "1%",
  },
  dropDown: {
    width: window.innerWidth / 4.4,
    height: window.innerHeight / 25,
    backgroundColor: "hsl(212deg 33% 89%)",
    borderWidth: 0,
    borderColor: "black",
    borderRadius: 5,
    marginTop: "1%",
  },
};
export default AddEmployee;
