import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBuilding,
  faAward,
  faHandPaper,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const EmployeeDashboard = () => {
  const history = useHistory();

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
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          className="Login-button"
          onClick={() => history.push("/employeeProfile")}
        >
          <FontAwesomeIcon icon={faUser} />
          <h4>My Profile</h4>
        </div>
        <div
          className="Login-button"
          onClick={() => history.push("/generateReports")}
        >
          <FontAwesomeIcon icon={faChartLine} />
          <h4>Generate Reports</h4>
        </div>
        <div
          className="Login-button"
          onClick={() => history.push("/markAttendance")}
        >
          <FontAwesomeIcon icon={faHandPaper} />
          <h4>Mark Attendance</h4>
        </div>
      </div>

      <div className="Film"></div>
    </div>
  );
};

export default EmployeeDashboard;
