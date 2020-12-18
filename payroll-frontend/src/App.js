import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminLogin from "./Screens/AdminLogin";
import EmployeeLogin from "./Screens/EmployeeLogin";
import Welcome from "./Screens/Welcome";
import AdminDashboard from "./Screens/AdminDashboard";
import AdminAddInfo from "./Screens/AdminAddInfo";
import AdminUpdateInfo from "./Screens/AdminUpdateInfo";
import AddEmployee from "./Screens/AddEmployee";
import AddGrade from "./Screens/AddGrade";
import AddDep from "./Screens/AddDep";
import AddExtras from "./Screens/AddExtras";
import EmployeeDrawer from "./Screens/EmployeeDrawer";
import Reports from "./Screens/Reports";
import Attendance from "./Screens/Attendance";
import ResetPassword from "./Screens/ResetPassword";
import Profile from "./Screens/EmployeeProfile";
import UpdateDetails from "./Screens/UpdateDetails";
const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Welcome} />
        <Route path="/adminLogin" component={AdminLogin} />
        <Route path="/employeeLogin" component={EmployeeLogin} />
        <Route path="/adminDashboard" component={AdminDashboard} />
        <Route path="/adminAddInfo" component={AdminAddInfo} />
        <Route path="/adminUpdateInfo" component={AdminUpdateInfo} />
        <Route path="/addEmployee" component={AddEmployee} />
        <Route path="/addGrade" component={AddGrade} />
        <Route path="/addDep" component={AddDep} />
        <Route path="/addExtras" component={AddExtras} />
        <Route path="/employeeDashboard" component={EmployeeDrawer} />
        <Route path="/reports" component={Reports} />
        <Route path="/attendance" component={Attendance} />
        <Route path="/resetPassword" component={ResetPassword} />
        <Route path="/profile" component={Profile} />
        <Route path="/updateProfile" component={UpdateDetails} />
      </div>
    </Router>
  );
};
export default App;
