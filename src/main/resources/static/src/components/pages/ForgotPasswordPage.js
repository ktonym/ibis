import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {resetPassRequest} from "../../actions/auth";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import Snackbar from "material-ui/Snackbar";
import ModalDialog from "../dialogs/ModalDialog";

class ForgotPasswordPage extends React.Component{

    state = {
        success: false,
        errors: null
    };

    componentWillReceiveProps(nextProps){
        this.setState({success: nextProps.success, errors: nextProps.errors})
    }

    onSubmit = email => this.props.resetPassReq(email);
    render(){
        const {success,errors} = this.state;
        return(
            <div style={{position: 'relative'}}>
                { success ? <Snackbar
                    open={success}
                    message="Mail sent to your mailbox"
                    autoHideDuration={4000}
                    //onRequestClose={this.handleRequestClose}
                /> :
                    <ForgotPasswordForm style={{marginLeft: '50%'}} submit={this.onSubmit}/>
                }
                { errors && <ModalDialog message={errors.global} open={true}/> }

            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    errors: state.user.errors,
    success: state.user.success
});

const mapDispatchToProps = (dispatch) => ({
    resetPassReq: (email) => dispatch(resetPassRequest(email))
});

ForgotPasswordPage.propTypes = {
    resetPassReq: PropTypes.func.isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(ForgotPasswordPage);