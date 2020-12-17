import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import { useFormik } from "formik";
import { base_url } from "../baseUrl";
import { useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const AddDep = () => {
  const [open, setOpen] = useState(false);
  const [msg, setMessage] = useState("");
  const history = useHistory();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    history.goBack();
  };
  const initialValues = {
    dept_name: "",
    org_name: "",
  };
  const onSubmit = async (values) => {
    console.log(values);
    const body = JSON.stringify(values);
    fetch(`${base_url}addDepartment`, {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
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
  return (
    <>
      <div className="App">
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
              <Button onClick={handleClose} color="primary" autoFocus>
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <header>
          <h1>Payroll Management System</h1>
          <hr className="Underline" />
          <img src={logo} alt="logo"></img>
        </header>
        <form className="form" onSubmit={formik.handleSubmit}>
          {/* <div className="form-control">
            <label htmlFor="dep_ID">Dep ID : </label>
            <input
              type="number"
              id="dep_ID"
              name="dep_ID"
              value={dep.dep_ID}
              onChange={handleChange}
              required
            />
          </div> */}
          <div className="form-control">
            <label htmlFor="dep_Name">Dep Name : </label>
            <input
              type="text"
              id="dep_Name"
              name="dep_Name"
              value={formik.values.dept_name}
              onChange={formik.handleChange("dept_name")}
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="org_Name">Org Name : </label>
            <input
              type="text"
              id="org_Name"
              name="org_Name"
              value={formik.values.org_name}
              onChange={formik.handleChange("org_name")}
              required
            />
          </div>
          <button type="submit">add department</button>
        </form>
      </div>
    </>
  );
};

export default AddDep;
