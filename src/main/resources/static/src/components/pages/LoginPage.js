import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import LoginForm from "../forms/LoginForm";
import {loginRequest} from "../../actions/auth";

class LoginPage extends Component{

    submit = data => this.props.login(data);

    render(){
        return (
            <div>

                <LoginForm submit={this.submit}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(loginRequest(data))
});

LoginPage.propTypes = {
    login: PropTypes.func.isRequired
};

export default connect(null,mapDispatchToProps)(LoginPage);