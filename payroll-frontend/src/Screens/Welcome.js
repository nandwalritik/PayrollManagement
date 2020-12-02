import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import Modal from "react-modal";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Welcome = () => {
  const [showId, setShowid] = useState(0);
  const [adminModal, setAdminmodal] = useState(false);
  const [userModal, setUsermodal] = useState(false);
  console.log("Value set to ", showId);
  const history = useHistory()
  return (
    <div className="App">
      <header>
        <h1>Payroll Management System</h1>
        <hr className="Underline" />
        <img src={logo} alt="logo"></img>
      </header>
      <div className="Login">
        <button className="Login-button" onClick={()=>history.push('/adminLogin')}>
          Admin Login
        </button>
        <button className="Login-button" onClick={() => history.push('/employeeLogin')}>
          Employee Login
        </button>
      </div>
      <div class="Film"></div>
    </div>
  );
};
const styles = {
  content: {
    // top: "50%",
    // left: "50%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    // transform: "translate(-50%, -50%)",
    width: "20%",
  },
};
export default Welcome;
