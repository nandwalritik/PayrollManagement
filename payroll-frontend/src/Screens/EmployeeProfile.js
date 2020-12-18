import React, { useState, useEffect } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import "../StyleSheets/Profile.css";
import { Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faPen, faUser } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { base_url } from "../baseUrl";
import moment from "moment";
const EmployeeProfile = (props) => {
  let history = useHistory();
  const initialValues = {
    name: "",
    dob: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
    dept_id: "",
    grade_id: "",
    org_name: "SGSITS",
    doj: "",
    email: props.location.state.email,
    years_of_service: "",
  };
  const formik = useFormik({
    initialValues,
  });
  useEffect(() => {
    getDetails();
  }, []);
  const getDetails = async () => {
    // console.log(props.location.state.email);
    fetch(`${base_url}employeeDetails/${props.location.state.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        formik.setFieldValue("name", res.data[0].name);
        formik.setFieldValue(
          "dob",
          moment(res.data[0].dob.slice(0, 10), "YYYY-MM-DD").format(
            "YYYY-MM-DD"
          )
        );
        formik.setFieldValue("city", res.data[0].city);
        formik.setFieldValue("state", res.data[0].state);
        formik.setFieldValue("pincode", res.data[0].pincode);
        formik.setFieldValue("address", res.data[0].address);
        formik.setFieldValue(
          "doj",
          moment(res.data[0].doj.slice(0, 4), "YYYY-MM-DD").format(
            "YYYY"
          )
        );
        formik.setFieldValue("dept_id", res.data[0].dept_id);
        formik.setFieldValue("grade_id", res.data[0].grade_id);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const d = new Date();
  console.log(formik.values.doj)
  return (
    <>
      <div className="App">
        <header>
          <h1>Payroll Management System</h1>
          <hr className="Underline" />
          <img src={logo} alt="logo"></img>
        </header>
        <div className="profile-wrapper">
          <div className="profile-wrapper-in">
            {/* <div className="pair">
              <div className="emt"> Employee-id: </div>
              <div className="val">01</div>
            </div> */}
            <div className="pair">
              <div className="emt"> Name: </div>
              <div className="val">{formik.values.name}</div>
            </div>
            <div className="pair">
              <div className="emt"> Date of Birth: </div>
              <div className="val">{formik.values.dob}</div>
            </div>
            <div className="pair">
              <div className="emt"> Date of joining: </div>
              <div className="val">{formik.values.doj}</div>
            </div>
            <div className="pair">
              <div className="emt"> Address: </div>
              <div className="val">{formik.values.address}</div>
            </div>
            <div className="pair">
              <div className="emt">Years of service: </div>
              <div className="val">{d.getFullYear()-formik.values.doj}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeProfile;
