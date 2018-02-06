import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {resetPassRequest} from "../../actions/auth";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import Snackbar from "material-ui/Snackbar";

class ForgotPasswordPage extends React.Component{

    state = {
        success: false,
        error: {}
    };

    componentWillReceiveProps(nextProps){
        this.setState({success: nextProps.success, error: nextProps.error})
    }

    onSubmit = email => this.props.resetPassReq(email);
    render(){
        const {success} = this.state;
        return(
            <div>
                { success ? <Snackbar
                    open={success}
                    message="Mail sent to your mailbox"
                    autoHideDuration={4000}
                    //onRequestClose={this.handleRequestClose}
                /> :
                    <ForgotPasswordForm submit={this.onSubmit}/>
                }
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    error: state.user.error,
    success: state.user.success
});

const mapDispatchToProps = (dispatch) => ({
    resetPassReq: (email) => dispatch(resetPassRequest(email))
});

ForgotPasswordPage.propTypes = {
    resetPassReq: PropTypes.func.isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(ForgotPasswordPage);