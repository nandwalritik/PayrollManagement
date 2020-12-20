import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import Modal from "react-modal";
import { Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faPen, faUser } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { useFormik } from "formik";
import { base_url } from "../baseUrl";
const EmployeeDrawer = (props) => {
  const [showId, setShowid] = useState(0);
  const [adminModal, setAdminmodal] = useState(false);
  const [userModal, setUsermodal] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const history = useHistory();

  const onSubmit = async (values) => {
    handleClose();
    console.log(values);
    const body = JSON.stringify(values);
    fetch(`${base_url}markAttendance`, {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const initialValues = {
    present: 0,
    paid_leave_taken: 0,
    encashed_leave_this_month: 0,
    email: props.location.state.email,
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <div className="App">
      <header>
        <h1>Payroll Management System</h1>
        <hr className="Underline" />
        <img src={logo} alt="logo"></img>
      </header>
      <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="simple-dialog-title"
          open={open}
        >
          <DialogTitle id="simple-dialog-title">Mark Attendance</DialogTitle>
          <List>
            <ListItem
              button
              onClick={() => {
                formik.setFieldValue("present", 1);
                formik.handleSubmit();
              }}
            >
              <ListItemText>Present</ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                formik.setFieldValue("paid_leave_taken", 1);
                formik.handleSubmit();
              }}
            >
              <ListItemText>Paid Leave Taken</ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                formik.setFieldValue("encashed_leave_this_month", 1);
                formik.handleSubmit();
              }}
            >
              <ListItemText>Encashed Leave Taken</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
      <div
        className="Login"
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          alignSelf: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          className="Login-button"
          onClick={() =>
            history.push("/reports", { email: props.location.state.email })
          }
        >
          <FontAwesomeIcon icon={faFile} />
          <h4>Generate Report</h4>
        </div>
        <div
          className="Login-button"
          onClick={() =>
            history.push("/profile", { email: props.location.state.email })
          }
        >
          <FontAwesomeIcon icon={faUser} />
          <h4>My Profile</h4>
        </div>
        <div className="Login-button" onClick={handleOpen}>
          <FontAwesomeIcon icon={faPen} />
          <h4>Mark Attendance</h4>
        </div>
      </div>
    </div>
  );
};
const styles = {
  content: {
    // align:"center",
    // width: "20%",
  },
};
export default EmployeeDrawer;
