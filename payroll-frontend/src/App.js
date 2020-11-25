import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./Screens/Welcome";

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Welcome} />
      </div>
    </Router>
  );
};
export default App