import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminLogin from "./Screens/AdminLogin";
import EmployeeLogin from "./Screens/EmployeeLogin";
import Welcome from "./Screens/Welcome";

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Welcome} />
        <Route path="/adminLogin" component={AdminLogin}/>
        <Route path="/employeeLogin" component={EmployeeLogin}/>
      </div>
    </Router>
  );
};
export default App