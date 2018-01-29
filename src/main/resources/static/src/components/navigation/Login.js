import React, {Component} from 'react';
import PropTypes from "prop-types";
import FlatButton from "material-ui/FlatButton";

class Login extends Component{

    /*handleClick = e => {
      this.props.logout
    };*/

    render(){
        return (
            <FlatButton {/*onClick={this.handleClick}*/} label="Login" />
        );
    }
}

/*
Login.propTypes = {
    logout: PropTypes.func.isRequired
};
*/

export default Login;