import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faPen } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";


const Attendance=()=>{
   let history = useHistory();
  return (
   
    <>
      <div className='App'>
        <header>
          <h1>Payroll Management System</h1>
          <hr className="Underline" />
          <img src={logo} alt="logo"></img>
        </header>
        <div className='wrapper'>
			 <div className="Login-button" 
			 onClick={() => history.push("/attendancelog")}>
			  <FontAwesomeIcon icon={faFile} />
			  <h4>Attendance Log</h4>
			</div>
			   <div className= "Login-button"   >
			  <FontAwesomeIcon icon={faPen} />
			  <h4>Mark Attendance</h4>
			</div> 
        </div>
      </div>
    </>
  );
};


export default Attendance;
