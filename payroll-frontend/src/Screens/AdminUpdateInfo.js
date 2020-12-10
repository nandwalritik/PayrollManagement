import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
import {testData} from "../testData.js"
import AddEmployee from "./AddEmployee.js"
//testData used for testing.It is to be replaced by employee's db

const AdminUpdateInfo=()=>{
    const [search,setSearch]=useState(0);
    const [emp,setEmp]=useState([]);
    const [callUpdate,setCallUpadte]=useState(false);

    const handleChange=(e)=>{
        setSearch(e.target.value);
        //to handle dynamic change
    }

    const handleSubmit =() => {
        //functionality to filter out the employee with given employee-ID

        const newEmp=testData.filter((e)=>{
            console.log(e.id,search)
            return e.id===search
        })
        // console.log(newEmp)
        if(newEmp.length===0)
        console.log("Oops,No Match Found")
        setEmp(newEmp)

        //output the employee to update it
        
    };

    const upDate=()=>{
        setCallUpadte(true);
    }

    const delEmp=()=>{
        
        //sql to delete the concerned entry from the table
        setEmp([]);
        //console.log(testData);
    };

    return <div className="App">
      <header>
        <h1>Payroll Management System</h1>
        <hr className="Underline" />
        <img src={logo} alt="logo"></img>
      </header>
      <div className='search'>
        <h4>Enter employee ID which needs to be updated..</h4>
        <label htmlFor='search' ></label>
        <div className='search-container'>
            <input
            type='number'
            id='search'
            name='search'
            value={search}
            onChange={handleChange}
            required
            />
            <button type="submit" onClick={()=>handleSubmit()}><FontAwesomeIcon icon={faSearch} /></button>     
        </div>   
        </div>
      <div className='item'>
            {/* displaying employee with the concerned ID */}
            {emp.length===0?
            <h4>No matching results found!!</h4>:
            <div>
                <FontAwesomeIcon icon={faEdit} className='btn' onClick={()=>upDate()}/>
                <FontAwesomeIcon icon={faTrash} className='btn' onClick={()=>delEmp()}/>
                <h2>{emp[0].id}</h2>
                <h3>{emp[0].Name}</h3>     
            </div>
            }
      </div>
      {/* calling update part(AddEmployee page) with the details of the selected employee */}
      {
        callUpdate && <AddEmployee employee={emp[0]}></AddEmployee>
      }
    </div>
}

export default AdminUpdateInfo;