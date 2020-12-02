import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";


const AddEmployee=()=>{
  const [person,setPerson]=useState({Name:'',ID:'',DOB:'',City:'',State:'',Pincode:'',Address:'',Dept_ID:'',Grade_ID:'',OrgName:'',DOJ:'',PaidLeaveTaken:'',EncashedLeaveThisMonth:'',EncashedLeaveTillDate:''})
  const [people, setPeople] = useState([]);

  const handleSubmit =(e) => {
    e.preventDefault();
    setPeople([...people,person])

    setPerson({Name:'',ID:'',DOB:'',City:'',State:'',Pincode:'',Address:'',Dept_ID:'',Grade_ID:'',OrgName:'',DOJ:'',PaidLeaveTaken:'',EncashedLeaveThisMonth:'',EncashedLeaveTillDate:''})
  };

  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setPerson({...person,[name]:value})
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
          <div className='grouping'>
            <h3>Basic Details</h3>
            <hr className="Underline" />
              <div className='form-control'>
              <label htmlFor='Name'>Name : </label>
              <input
                type='text'
                id='Name'
                name='Name'
                value={person.Name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label htmlFor='ID'>Employee ID : </label>
              <input
                type='number'
                id='ID'
                name='ID'
                value={person.ID}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label htmlFor='DOB'>DOB : </label>
              <input
                type='date'
                id='DOB'
                name='DOB'
                value={person.DOB}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label htmlFor='Address'>Address : </label>
              <input
                type='text'
                id='Address'
                name='Address'
                value={person.Address}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label htmlFor='City'>City : </label>
              <input
                type='text'
                id='City'
                name='City'
                value={person.City}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label htmlFor='State'>State : </label>
              <input
                type='text'
                id='State'
                name='State'
                value={person.State}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label htmlFor='Pincode' className='pinCode'>Pin-Code : </label>
              <input
                type='number'
                id='Pincode'
                name='Pincode'
                value={person.Pincode}
                onChange={handleChange}
                size='6' maxLength='6'
              />
            </div>
          </div>


          <div className='grouping'>
            <h3>Company Details</h3>
            <hr className="Underline" />
              <div className='form-control'>
              <label htmlFor='Dept_ID'>Dept.-ID : </label>
              <input
                type='number'
                id='Dept_ID'
                name='Dept_ID'
                value={person.Dept_ID}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label htmlFor='Grade_ID'>Grade-ID : </label>
              <input
                type='number'
                id='Grade_ID'
                name='Grade_ID'
                value={person.Grade_ID}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label htmlFor='OrgName'>Org Name: </label>
              <input
                type='text'
                id='OrgName'
                name='OrgName'
                value={person.OrgName}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label htmlFor='DOJ'>DOJ : </label>
              <input
                type='date'
                id='DOJ'
                name='DOJ'
                value={person.DOJ}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className='grouping'>
            <h3>Leave Details</h3>
            <hr className="Underline" />
            <div className='form-control'>
              <label htmlFor='PaidLeaveTaken'>Paid Leave Taken : </label>
              <input
                type='number'
                id='PaidLeaveTaken'
                name='PaidLeaveTaken'
                value={person.PaidLeaveTaken}
                onChange={handleChange}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='EncashedLeaveThisMonth'>Encashed Leave This Month : </label>
              <input
                type='number'
                id='EncashedLeaveThisMonth'
                name='EncashedLeaveThisMonth'
                value={person.EncashedLeaveThisMonth}
                onChange={handleChange}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='EncashedLeaveTillDate'>Encashed Leave Till Date : </label>
              <input
                type='number'
                id='EncashedLeaveTillDate'
                name='EncashedLeaveTillDate'
                value={person.EncashedLeaveTillDate}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <button type='submit'>add Employee</button>
        </form>
        
      </div>
    </>
  );
}

export default AddEmployee;