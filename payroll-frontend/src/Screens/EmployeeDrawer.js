import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import Modal from "react-modal";
import { Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faPen } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const EmployeeDrawer = () => {
  const [showId, setShowid] = useState(0);
  const [adminModal, setAdminmodal] = useState(false);
  const [userModal, setUsermodal] = useState(false);
  // console.log("Value set to ", showId);
  let history = useHistory();

  const handleSubmit=(e)=>{
    // Handle submit attendance.
}

  return (
    <div className="App">
      <header>
        <h1>Payroll Management System</h1>
        <hr className="Underline" />
        <img src={logo} alt="logo"></img>
      </header>
      <div
        className="Login"
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          alignSelf: "center",
          display: "flex",
          flexDirection: "row"}}
      />
        <div
          className="Login-button"
          onClick={() => history.push("/reports")}
        >
          <FontAwesomeIcon icon={faFile} />
          <h4>Generate Report</h4>
        </div>
        <div className="Login-button"
            onClick={() => history.push("/attendance")}>
          <FontAwesomeIcon icon={faPen} />
          <h4>Mark Attendance</h4>
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
