import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";


const AddGrade=()=>{
  const [grade,setgrade]=useState({Grade_ID:'',Grade_Name:'',Bonus:'',Travel_Allowance:'',Dearness_Allowance:'',Basic_Pay:'',Grade_PF:''})
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPeople([...people,grade])

    setgrade({Grade_ID:'',Grade_Name:'',Bonus:'',Travel_Allowance:'',Dearness_Allowance:'',Basic_Pay:'',Grade_PF:''})
  };

  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setgrade({...grade,[name]:value})
  }
  return (
    <>
      <div className='App'>
        <header>
          <h1>Payroll Management System</h1>
          <hr className="Underline" />
          <img src={logo} alt="logo"></img>
        </header>
        <form className='form' onSubmit={handleSubmit}>
              <div className='form-control'>
              <label htmlFor='Grade_ID'>Grade-ID : </label>
              <input
                type='number'
                id='Grade_ID'
                name='Grade_ID'
                value={grade.Grade_ID}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label htmlFor='Grade_Name'>Grade Name : </label>
              <input
                type='text'
                id='Grade_Name'
                name='Grade_Name'
                value={grade.Grade_Name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className='form-control'>
              <label htmlFor='Bonus'>Bonus : </label>
              <input
                type='number'
                id='Bonus'
                name='Bonus'
                value={grade.Bonus}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label htmlFor='Travel_Allowance'>Travel Allowance : </label>
              <input
                type='number'
                id='Travel_Allowance'
                name='Travel_Allowance'
                value={grade.Travel_Allowance}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label htmlFor='Dearness_Allowance'>Dearness Allowance : </label>
              <input
                type='number'
                id='Dearness_Allowance'
                name='Dearness_Allowance'
                value={grade.Dearness_Allowance}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label htmlFor='Basic_Pay'>Basic Pay : </label>
              <input
                type='number'
                id='Basic_Pay'
                name='Basic_Pay'
                value={grade.Basic_Pay}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label htmlFor='Grade_PF'>Grade PF : </label>
              <input
                type='number'
                id='Grade_PF'
                name='Grade_PF'
                value={grade.Grade_PF}
                onChange={handleChange
                }required
              />
            </div>
          
          <button type='submit'>add Grade</button>
        </form>
        
      </div>
    </>
  );
}

export default AddGrade;