import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TopNavigation from "./components/navigation/TopNavigation";
import HomePage from "./components/pages/HomePage";
import ClientPage from "./components/pages/ClientPage";
import LoginPage from "./components/pages/LoginPage";

class App extends Component {
  render() {
    const {location} = this.props;
    return (
      <MuiThemeProvider>
          <div>
            <TopNavigation/>
            <Route location={location} path="/" exact component={HomePage}/>
            <Route location={location} path="/clients" exact component={ClientPage}/>
            <Route location={location} path="/login" exact component={LoginPage}/>
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

export default App;
