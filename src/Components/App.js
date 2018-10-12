import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SigninPage from "./SigninPage";
import SignupPage from "./SignupPage";
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import AccountPage from "./AccountPage";
import ForgetPasswordPage from "./ForgetPasswordPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/signup" components={SignupPage} />
          <Route exact path="/signin" components={SigninPage} />
          <Route exact path="/landing" components={LandingPage} />
          <Route exact path="/home" components={HomePage} />
          <Route exact path="/account" components={AccountPage} />
          <Route exact path="/pw-forget" components={ForgetPasswordPage} />
        </div>
      </Router>
    );
  }
}

export default App;
