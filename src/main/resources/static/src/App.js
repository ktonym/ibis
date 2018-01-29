import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import {connect} from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TopNavigation from "./components/navigation/TopNavigation";
import HomePage from "./components/pages/HomePage";
import ClientPage from "./components/pages/ClientPage";
import LoginPage from "./components/pages/LoginPage";
import GuestRoute from "./components/routes/GuestRoute";
import UserRoute from "./components/routes/UserRoute";

class App extends Component {
  render() {
    const {location,isAuthenticated} = this.props;
    return (
      <MuiThemeProvider>
          <div>
              {isAuthenticated && <TopNavigation/> }
            <Route location={location} path="/" exact component={HomePage}/>
            <GuestRoute location={location} path="/login" exact component={LoginPage}/>
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
