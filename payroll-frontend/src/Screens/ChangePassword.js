
import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";


const ChangePassword=()=>{
  const [password,setpass]=useState({old:'',new:''})
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPeople([...people,password])

    setpass({old:'',new:''})
  };

  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setpass({...password,[name]:value})
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
              <label htmlFor='dep_ID'>Old Password : </label>
              <input
                type='password'
                id='old'
                name='old'
                value={password.old}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label htmlFor='dep_Name'>New Password : </label>
              <input
                type='password'
                id='new'
                name='new'
                value={password.new}
                onChange={handleChange}
                required
              />
            </div>
            
          <button type='submit'>Change Password</button>
        </form>
        
      </div>
    </>
  );
}

export default ChangePassword;
