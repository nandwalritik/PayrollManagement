import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import Modal from "react-modal";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
const AdminDashboard = () => {
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
      <div style={styles.content}>
        This Page Is Under Development
      </div>
      <div class="Film"></div>
    </div>
  );
};
const styles = {
  content: {
    // align:"center",
    // width: "20%",
  },
};
export default AdminDashboard;
