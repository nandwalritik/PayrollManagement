import React, { useState } from "react";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import { useFormik } from "formik";
const AddEmployee = () => {
  // console.log(props);
  // if (typeof props === "undefined")
  //   props = {
  //     Name: "",
  //     ID: "",
  //     DOB: "",
  //     City: "",
  //     State: "",
  //     Pincode: "",
  //     Address: "",
  //     Dept_ID: "",
  //     Grade_ID: "",
  //     OrgName: "",
  //     DOJ: "",
  //     PaidLeaveTaken: "",
  //     EncashedLeaveThisMonth: "",
  //     EncashedLeaveTillDate: "",
  //   };

  // const [person, setPerson] = useState({
  //   Name: props.Name,
  //   ID: props.ID,
  //   DOB: props.DOB,
  //   City: props.City,
  //   State: props.State,
  //   Pincode: props.PinCode,
  //   Address: props.Address,
  //   Dept_ID: props.Dept_ID,
  //   Grade_ID: props.Grade_ID,
  //   OrgName: props.OrgName,
  //   DOJ: props.DOJ,
  //   PaidLeaveTaken: props.PaidLeaveTaken,
  //   EncashedLeaveThisMonth: props.EncashedLeaveThisMonth,
  //   EncashedLeaveTillDate: props.EncashedLeaveTillDate,
  // });
  // const [people, setPeople] = useState([]);

<<<<<<< HEAD
const AddEmployee=()=>{

  const [person,setPerson]=useState({Name:'',ID:'',DOB:'',City:'',State:'',Pincode:'',Address:'',Dept_ID:'',Grade_ID:'',OrgName:'',DOJ:''})
  const [people, setPeople] = useState([]);
=======
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setPeople([...people, person]);

  //   setPerson({
  //     Name: "",
  //     ID: "",
  //     DOB: "",
  //     City: "",
  //     State: "",
  //     Pincode: "",
  //     Address: "",
  //     Dept_ID: "",
  //     Grade_ID: "",
  //     OrgName: "",
  //     DOJ: "",
  //     PaidLeaveTaken: "",
  //     EncashedLeaveThisMonth: "",
  //     EncashedLeaveTillDate: "",
  //   });
  // };
>>>>>>> d2c20b706a51e235732b2d4a1a0d939115dfdd41

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

<<<<<<< HEAD
    setPerson({Name:'',ID:'',DOB:'',City:'',State:'',Pincode:'',Address:'',Dept_ID:'',Grade_ID:'',OrgName:'',DOJ:''})
=======
  //   setPerson({ ...person, [name]: value });
  // };
  const initialValues = {
    Name: "",
    DOB: "",
    City: "",
    State: "",
    Pincode: "",
    Address: "",
    Dept_ID: "",
    Grade_ID: "",
    OrgName: "",
    DOJ: "",
    PaidLeaveTaken: "",
    EncashedLeaveThisMonth: "",
    EncashedLeaveTillDate: "",
>>>>>>> d2c20b706a51e235732b2d4a1a0d939115dfdd41
  };
  const onSubmit = async (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <>
      <div className="App">
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="grouping">
            <h3>Basic Details</h3>
            <hr className="Underline" />
            <div className="form-control">
              <label htmlFor="Name">Name : </label>
              <input
                type="text"
                id="Name"
                name="Name"
                value={formik.values.Name}
                onChange={formik.handleChange("Name")}
                required
              />
            </div>
            {/* <div className="form-control">
              <label htmlFor="ID">Employee ID : </label>
              <input
                type="number"
                id="ID"
                name="ID"
                value={person.ID}
                onChange={handleChange}
                required
              />
            </div> */}
            <div className="form-control">
              <label htmlFor="DOB">DOB : </label>
              <input
                type="date"
                id="DOB"
                name="DOB"
                value={formik.values.DOB}
                onChange={formik.handleChange("DOB")}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="Address">Address : </label>
              <input
                type="text"
                id="Address"
                name="Address"
                value={formik.values.Address}
                onChange={formik.handleChange("Address")}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="City">City : </label>
              <input
                type="text"
                id="City"
                name="City"
                value={formik.values.City}
                onChange={formik.handleChange("City")}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="State">State : </label>
              <input
                type="text"
                id="State"
                name="State"
                value={formik.values.State}
                onChange={formik.handleChange("State")}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="Pincode" className="pinCode">
                Pin-Code :{" "}
              </label>
              <input
                type="number"
                id="Pincode"
                name="Pincode"
                value={formik.values.Pincode}
                onChange={formik.handleChange("Pincode")}
                size="6"
                maxLength="6"
              />
            </div>
          </div>

          <div className="grouping">
            <h3>Company Details</h3>
            <hr className="Underline" />
            <div className="form-control">
              <label htmlFor="Dept">Department: </label>
              <input
                type="number"
                id="Dept"
                name="Dept"
                // value={person.Dept_ID}
                // onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="Grade_ID">Grade-ID : </label>
              <input
                type="number"
                id="Grade_ID"
                name="Grade_ID"
                // value={person.Grade_ID}
                // onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="OrgName">Org Name: </label>
              <input
                type="text"
                id="OrgName"
                name="OrgName"
                // value={person.OrgName}
                // onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="DOJ">DOJ : </label>
              <input
                type="date"
                id="DOJ"
                name="DOJ"
                value={formik.values.DOJ}
                onChange={formik.handleChange("DOJ")}
                required
              />
            </div>
          </div>
          <button type="submit" onClick={formik.handleSubmit}>
            add / Update
          </button>
        </form>
      </div>
    </>
  );
};

export default AddEmployee;
