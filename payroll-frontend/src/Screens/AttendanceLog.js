
import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import "../StyleSheets/Report.css";

const AttendanceLog=()=>{
  
  return (
    
      <div className='App'>
        <header>
          <h1>Payroll Management System</h1>
          <hr className="Underline" />
          <img src={logo} alt="logo"></img>
        </header>
            <div className = 'report-wrapper'> 
				<div className='report-wrapper-in'>
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
				</div>
	  </div>
  );
};


export default AttendanceLog;
