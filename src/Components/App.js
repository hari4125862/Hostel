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
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/signin" component={SigninPage} />
          <Route exact path="/landing" component={LandingPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/account" component={AccountPage} />
          <Route exact path="/pw-forget" component={ForgetPasswordPage} />
        </div>
      </Router>
    );
  }
}

export default App;
