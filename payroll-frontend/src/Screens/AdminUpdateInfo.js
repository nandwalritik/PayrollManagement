import React, { useState, useEffect } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { testData } from "../testData.js";
import AddEmployee from "./AddEmployee.js";
import { useHistory } from "react-router-dom";
import { base_url } from "../baseUrl";
//testData used for testing.It is to be replaced by employee's db

const AdminUpdateInfo = () => {
  // const [search, setSearch] = useState(0);
  const [emp, setEmp] = useState([]);
  const [callUpdate, setCallUpdate] = useState(false);
  const history = useHistory();
  const upDate = () => {
    setCallUpdate(true);
    document.getElementById("id01").style.display = "block";
  };

  const closeModal = () => {
    document.getElementById("id01").style.display = "none";
    setCallUpdate(false);
  };

  useEffect(() => {
    getAllEmployees();
  }, []);
  const getAllEmployees = async () => {
    fetch(`${base_url}getAllEmployees`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setEmp(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleUpdate = (emp) => {
    history.push("/updateProfile", { email: emp.email });
  };
  const handleDelete = async (emp) => {
    fetch(`${base_url}deleteEmployee`, {
      method: "POST",
      body: JSON.stringify({
        email: emp.email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "User.Deleted") {
          getAllEmployees();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="App">
      <header>
        <h1>Payroll Management System</h1>
        <hr className="Underline" />
        <img src={logo} alt="logo"></img>
      </header>
      <div class="w3-container">
        <table class="w3-table w3-bordered">
          {emp.map((Emp) => (
            <tr key={Emp.e_id}>
              <td>{Emp.name}</td>
              <td>
                <button onClick={() => handleUpdate(Emp)}>Edit</button>
              </td>
              <td>
                <button
                  style={{ backgroundColor: "#f43d3d" }}
                  onClick={() => handleDelete(Emp)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
        <div id="id01" class="w3-modal">
          <div class="w3-modal-content">
            <div class="w3-container">
              <span className="w3-button w3-display-topright">
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => closeModal()}
                ></FontAwesomeIcon>
              </span>
              <AddEmployee></AddEmployee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUpdateInfo;
