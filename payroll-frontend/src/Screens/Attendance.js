import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faPen } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import "../StyleSheets/Report.css";


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
			<div className = 'attendance-wrapper'> 
					<div className='pair'>
						<div className='emt'> Total Working Days: </div>
						<div className='val'>01</div>
					</div>
					<div className='pair'>
						<div className='emt'> Days attended: </div>
						<div className='val'>01</div>
					</div>
					<div className='pair'>
						<div className='emt'> Encashed Leaves: </div>
						<div className='val'>01</div>
					</div>
					<div className='pair'>
						<div className='emt'> Paid Leaves Standing: </div>
						<div className='val'>01</div>
					</div>
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
