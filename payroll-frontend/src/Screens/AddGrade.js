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

const AddGrade = () => {
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
    grade_name: "",
    grade_pay: "",
    grade_pf: "",
    grade_bonus: "",
    grade_ta: "",
    grade_da: "",
  };
  const onSubmit = async (values) => {
    console.log(values);
    const body = JSON.stringify(values);

    fetch(`${base_url}addGrade`, {
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
          <div className="form-control">
            <label htmlFor="Grade_Name">Grade Name : </label>
            <input
              type="text"
              id="Grade_Name"
              name="Grade_Name"
              value={formik.values.grade_name}
              onChange={formik.handleChange("grade_name")}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="Bonus">Bonus : </label>
            <input
              type="number"
              id="Bonus"
              name="Bonus"
              value={formik.values.grade_bonus}
              onChange={formik.handleChange("grade_bonus")}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="Travel_Allowance">Travel Allowance : </label>
            <input
              type="number"
              id="Travel_Allowance"
              name="Travel_Allowance"
              value={formik.values.grade_ta}
              onChange={formik.handleChange("grade_ta")}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="Dearness_Allowance">Dearness Allowance : </label>
            <input
              type="number"
              id="Dearness_Allowance"
              name="Dearness_Allowance"
              value={formik.values.grade_da}
              onChange={formik.handleChange("grade_da")}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="Basic_Pay">Basic Pay : </label>
            <input
              type="number"
              id="Basic_Pay"
              name="Basic_Pay"
              value={formik.values.grade_pay}
              onChange={formik.handleChange("grade_pay")}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="Grade_PF">Grade PF : </label>
            <input
              type="number"
              id="Grade_PF"
              name="Grade_PF"
              value={formik.values.grade_pf}
              onChange={formik.handleChange("grade_pf")}
              required
            />
          </div>
          <button type="submit">add Grade</button>
        </form>
      </div>
    </>
  );
};

export default AddGrade;
