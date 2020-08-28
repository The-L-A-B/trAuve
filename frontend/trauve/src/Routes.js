//React Components and Hooks
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Custom Components
import LoginPage from "./pages/Login"

const Routes = (props)=> {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginPage} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;