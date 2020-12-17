import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import "../StyleSheets/Report.css";

const Reports=()=>{
  
  return (
    <>
      <div className='App'>
        <header>
          <h1>Payroll Management System</h1>
          <hr className="Underline" />
          <img src={logo} alt="logo"></img>
        </header>
            <div className = 'report-wrapper'> 
				<div className='report-wrapper-in'>
				<div className='top'>
					<div className='pair'>
						<div className='emt'> Transaction-id: </div>
						<div className='val'>01</div>
					</div>
					<div className='pair'>
						<div className='emt'> Month: </div>
						<div className='val'>01</div>
					</div>
					<div className='pair'>
						<div className='emt'> Year: </div>
						<div className='val'>01</div>
					</div>
					<div className='pair'>
						<div className='emt'> In-hand Salary: </div>
						<div className='val'>01</div>
					</div>
					</div>
					<div className='part'>Employee Salary Breakdown</div>
					<div className='pair'>
						<div className='emt'> Gross Pay: </div>
						<div className='val'>01</div>
					</div>
					<div className='pair'>
						<div className='emt'> Income Tax: </div>
						<div className='val'>01</div>
					</div>
					<div className='pair'>
						<div className='emt'> Paid leave deduction: </div>
						<div className='val'>01</div>
					</div>
					<div className='pair'>
						<div className='emt'> PF: </div>
						<div className='val'>01</div>
					</div>
				</div>
				<div className='report-wrapper-in'>
					<div className='pair'>
						<div className='emt'> Extras Amount: </div>
						<div className='val'>01</div>
					</div>
					
					<div className='part'>Grade Pay </div>
					<div className='pair'>
						<div className='emt'> Basic pay: </div>
						<div className='val'>01</div>
					</div>
					<div className='pair'>
						<div className='emt'> Grade bonus: </div>
						<div className='val'>01</div>
					</div>
					<div className='pair'>
						<div className='emt'> Travel Allowance: </div>
						<div className='val'>01</div>
					</div>
					<div className='pair'>
						<div className='emt'> Dearness Allowance: </div>
						<div className='val'>01</div>
					</div>
				</div>
			 </div>
		  </div>
    </>
  );
};


export default Reports;
