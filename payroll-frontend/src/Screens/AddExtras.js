import React, { useState } from "react";
import logo from "../Assets/Logo.png";
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
import {useHistory} from "react-router-dom"
const AddExtras = () => {
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
    ex_type: "",
  };
  const onSubmit = async (values) => {
    console.log(values);
    const body = JSON.stringify(values);
    fetch(`${base_url}addExtras`, {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "Extras added") {
          setMessage(res.message);
          handleClickOpen();
        }
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
      <div className="App">
        <header>
          <h1>Payroll Management System</h1>
          <hr className="Underline" />
          <img src={logo} alt="logo"></img>
        </header>
        <form className="form" onSubmit={formik.handleSubmit}>
          {/* <div className="form-control">
            <label htmlFor="ex_ID">Extras ID : </label>
            <input
              type="number"
              id="ex_ID"
              name="ex_ID"
              value={extras.ex_ID}
              onChange={handleChange}
              required
            />
          </div> */}
          <div className="form-control">
            <label htmlFor="dep_Name">Extras Type : </label>
            <input
              type="text"
              id="ex_Type"
              name="ex_Type"
              value={formik.values.ex_type}
              onChange={formik.handleChange("ex_type")}
              required
            />
          </div>

          <button type="submit">add extras</button>
        </form>
      </div>
    </>
  );
};

export default AddExtras;
