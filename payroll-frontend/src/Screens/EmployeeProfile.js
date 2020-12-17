import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import "../StyleSheets/Profile.css";
import { Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faPen, faUser } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const EmployeeProfile =()=> {
  
  let history = useHistory();
  
  return (
    <>
      <div className='App'>
        <header>
          <h1>Payroll Management System</h1>
          <hr className="Underline" />
          <img src={logo} alt="logo"></img>
        </header>
            <div className = 'profile-wrapper'> 
					<div className="button"
						onClick={() => history.push("/changepassword")}>
						<FontAwesomeIcon icon={faPen} />
						<h4>Change Password</h4>
					</div>
				<div className='profile-wrapper-in'>
					<div className='pair'>
						<div className='emt'> Employee-id: </div>
						<div className='val'>01</div>
					</div>
					<div className='pair'>
						<div className='emt'> Name: </div>
						<div className='val'>01</div>
					</div>
					<div className='pair'>
						<div className='emt'> Date of Birth: </div>
						<div className='val'>01</div>
					</div>
					<div className='pair'>
						<div className='emt'> Date of joining: </div>
						<div className='val'>01</div>
					</div>
					<div className='pair'>
						<div className='emt'> Address: </div>
						<div className='val'>01</div>
					</div>
					<div className='pair'>
						<div className='emt'>Years of service: </div>
						<div className='val'>01</div>
					</div>
				</div>
				
			 </div>
		  </div>
    </>
  );
};


export default EmployeeProfile;
