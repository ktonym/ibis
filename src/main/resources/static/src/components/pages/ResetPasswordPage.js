import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ResetPasswordForm from "../forms/ResetPasswordForm";
import { changePassRequest,validateTokenRequest } from "../../actions/auth";

class ResetPasswordPage extends Component{
    state = {
        loading: true,
        success: false
    };

    submit = (data) => this.props.changePassword(data);

    componentDidMount(){
        this.props.validateToken(this.props.match.params.token);
    }

    componentWillReceiveProps(nextProps){
        this.setState({loading: nextProps.loading,success: nextProps.success})
    }

    render(){
        const { loading, success } = this.state;
        const token = this.props.match.params.token;
        return (
            <div>
                { loading && <h1>Validating...</h1> }
                { !loading && success && <ResetPasswordForm submit={this.submit} token={token}/> }
                { !loading && !success && <h1>Invalid Token</h1> }
            </div>
        );
    }
}

ResetPasswordPage.propTypes = {
    validateToken: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            token: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

const mapStateToProps = (state) => ({
    loading: !!state.user.validating,
    success: !!state.user.validation
});

export default connect(mapStateToProps,{changePassword: changePassRequest,validateToken: validateTokenRequest})(ResetPasswordPage);