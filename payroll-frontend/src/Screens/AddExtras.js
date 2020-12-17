import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";


const AddExtras=()=>{
  const [extras,setExtras]=useState({ex_ID:'',ex_Type:''})
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPeople([...people,extras])

    setExtras({ex_ID:'',ex_Type:''})
  };

  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setExtras({...extras,[name]:value})
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
              <label htmlFor='ex_ID'>Extras ID : </label>
              <input
                type='number'
                id='ex_ID'
                name='ex_ID'
                value={extras.ex_ID}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label htmlFor='dep_Name'>Extras Type : </label>
              <input
                type='text'
                id='ex_Type'
                name='ex_Type'
                value={extras.ex_Type}
                onChange={handleChange}
                required
              />
            </div>
            
          <button type='submit'>add extras</button>
        </form>
        
      </div>
    </>
  );
}

export default AddExtras;