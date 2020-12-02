import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";


const AddDep=()=>{
  const [dep,setdep]=useState({dep_ID:'',dep_Name:'',org_Name:''})
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPeople([...people,dep])

    setdep({dep_ID:'',dep_Name:'',org_Name:''})
  };

  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setdep({...dep,[name]:value})
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
              <label htmlFor='dep_ID'>Dep ID : </label>
              <input
                type='number'
                id='dep_ID'
                name='dep_ID'
                value={dep.dep_ID}
                onChange={handleChange}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='dep_Name'>Dep Name : </label>
              <input
                type='text'
                id='dep_Name'
                name='dep_Name'
                value={dep.dep_Name}
                onChange={handleChange}
              />
            </div>
            
            <div className='form-control'>
              <label htmlFor='org_Name'>Org Name : </label>
              <input
                type='text'
                id='org_Name'
                name='org_Name'
                value={dep.org_Name}
                onChange={handleChange}
              />
            </div>
            
          <button type='submit'>add department</button>
        </form>
        
      </div>
    </>
  );
}

export default AddDep;