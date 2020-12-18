import React, { useState ,useEffect} from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import "../StyleSheets/Report.css";

const Reports=({email})=>{
	const [data,setData]=useState([]);
	useEffect(()=>{
		getData();}
	,[])
  
	const getData=async()=>{
		try {
      const response = await fetch(`http://localhost:3003/api/getReports/${email}`);
      const jsonData = await response.json();

	  setData(jsonData);
	} 
	  catch (err) {
      console.error(err.message);
    }
	}

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
  <div className='val' name='trans_ID'>{setData.transaction_id}</div>
					</div>
					<div className='pair'>
						<div className='emt'> Month: </div>
						<div className='val' name='month'>{setData.month}</div>
					</div>
					<div className='pair'>
						<div className='emt'> Year: </div>
						<div className='val'name='year'>{setData.year}</div>
					</div>
					
					</div>
					<div className='part'>Employee Salary Breakdown</div>
					<div className='pair'>
						<div className='emt'> Gross Pay: </div>
						<div className='val' name='gross'>{setData.gross_pay}</div>
					</div>
					<div className='pair'>
						<div className='emt'> Income Tax: </div>
						<div className='val' name='tax'>{setData.income_tax}</div>
					</div>
					<div className='pair'>
						<div className='emt'> PF: </div>
  <div className='val' name='PF'>{setData.grade_pf}</div>
					</div>
					<div className='pair'>
						<div className='emt'> In-hand Salary: </div>
  <div className='val' name='total'>{setData.gross_pay-setData.income_tax-setData.grade_pf}</div>
					</div>
				</div>
			 </div>
		  </div>
    </>
  );
};


export default Reports;
