import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faBuilding,faAward ,faCoins} from '@fortawesome/free-solid-svg-icons';

const AdminAddInfo=()=>{
    const history = useHistory();
    
    return <div className="App">
      <header>
        <h1>Payroll Management System</h1>
        <hr className="Underline" />
        <img src={logo} alt="logo"></img>
      </header>
      <div className='Login' style={{marginTop:'2rem'}}>
        <div style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"row"}}>
          <div className='Login-button' onClick={()=>history.push('/addEmployee')}>
          <FontAwesomeIcon icon={faUser} />
          <h4>Employee</h4>
        </div>
        <div className='Login-button' onClick={()=>history.push('/addDep')}>
          <FontAwesomeIcon icon={faBuilding} />
          <h4>Department</h4>
        </div>
        </div>

        <div style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"row"}}>
          <div className='Login-button' onClick={()=>history.push('/addGrade')} >
            <FontAwesomeIcon icon={faAward} />
            <h4>Grade</h4>
          </div>
          <div className='Login-button' onClick={()=>history.push('/addExtras')} >
            <FontAwesomeIcon icon={faCoins} />
            <h4>Extras</h4>
          </div>
        </div>
        
        
      </div>
      
      <div className="Film"></div>
    </div>
}

export default AdminAddInfo;