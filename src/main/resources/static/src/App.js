import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import {connect} from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TopNavigation from "./components/navigation/TopNavigation";
import HomePage from "./components/pages/HomePage";
import ClientPage from "./components/pages/ClientPage";
import LoginPage from "./components/pages/LoginPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import DashBoard from "./components/pages/DashBoard";
import GuestRoute from "./components/routes/GuestRoute";
import UserRoute from "./components/routes/UserRoute";

class App extends Component {
  render() {
    const {location} = this.props;
    return (
      <MuiThemeProvider>
          <div>
              {/*isAuthenticated && <TopNavigation/>*/}
              <TopNavigation/>
            <Route location={location} path="/" exact component={HomePage}/>
            <GuestRoute location={location} path="/login" exact component={LoginPage}/>
            <GuestRoute location={location} path="/forgot_password" exact component={ForgotPasswordPage}/>
            <UserRoute location={location} path="/dashboard" exact component={DashBoard}/>
            <UserRoute location={location} path="/clients" exact component={ClientPage}/>
          </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

const mapStateToProps = (state) =>({
    isAuthenticated: !!state.user.access_token
});

export default connect(mapStateToProps)(App);
