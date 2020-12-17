import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {testData} from "../testData.js"
import AddEmployee from "./AddEmployee.js"
//testData used for testing.It is to be replaced by employee's db

const AdminUpdateInfo=()=>{
    const [search,setSearch]=useState(0);
    const [emp,setEmp]=useState(testData);
    const [callUpdate,setCallUpdate]=useState(false);

    const upDate=()=>{
        setCallUpdate(true);
        document.getElementById('id01').style.display='block';
    }

    const closeModal=()=>{
      document.getElementById('id01').style.display='none';
      setCallUpdate(false);
    }

    const delEmp=(name)=>{
        
        //sql to delete the concerned entry from the table
        setEmp(emp.filter(e=>e.Name!=name));
        //console.log(testData);
    };

    return <div className="App">
      <header>
        <h1>Payroll Management System</h1>
        <hr className="Underline" />
        <img src={logo} alt="logo"></img>
      </header>
      <div class="w3-container">
      <table class="w3-table w3-bordered">
        {
          emp.map((Emp)=>(
            <tr key={Emp.id}>
              <td>{Emp.Name}</td>
              <td><button onClick={()=>upDate()}>Edit</button></td>
              <td><button style={{backgroundColor: '#f43d3d'}} onClick={()=>delEmp(Emp.Name)}>Delete</button></td>
            </tr>
          ))
        }
      </table>
        <div id="id01" class="w3-modal">
          <div class="w3-modal-content">
            <div class="w3-container">
              <span className="w3-button w3-display-topright">
                <FontAwesomeIcon icon={faTimes} onClick={()=>closeModal()}></FontAwesomeIcon>
              </span>
              <AddEmployee></AddEmployee>
            </div>
          </div>
      </div>
      
    </div>

    </div>
}

export default AdminUpdateInfo;