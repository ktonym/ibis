import React,{Component} from "react";
import PropTypes from "prop-types";
import CircularProgressIndicator from "../loading/CircularProgressIndicator";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";

class ResetPasswordForm extends Component{

    state = {
        data: {
            token: this.props.token,
            newPassword: '',
            confirm: ''
        },
        loaded: true,
        errors: {}
    };

    validate = data => {
        const errors = {};
        if(!data.newPassword) errors.newPassword = "Can't be blank";
        if(data.newPassword !== data.confirm) errors.newPassword = "The two passwords do not match";
        return errors;
    };

    onChange = e => this.setState({
        data: { ...this.state.data, [e.target.name]:e.target.value }
    });

    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        const {data} = this.state;
        this.setState({errors});
        if(Object.keys(errors).length === 0){
            this.setState({ loaded: true });
            this.props.submit(data);
        }
    };

    render(){
        const {data,errors,loaded} = this.state;
        return (
            <Paper zDepth={2}>
                <h4>Please change your password </h4>
                <TextField value={data.newPassword} type="password"
                           id="newPassword" name="newPassword" hintText="Enter New Password"
                           onChange={this.onChange} floatingLabelText="New Password"
                           errorText={errors.newPassword}
                /><br/>
                <TextField value={data.confirm} type="password"
                           id="confirm" name="confirm" hintText="Confirm New Password"
                           onChange={this.onChange} floatingLabelText="Confirm New Password"
                           errorText={errors.confirm}
                /><br/>
                { loaded ? <RaisedButton fullWidth={false} label="Reset Password" primary={true} onClick={this.onSubmit}/>
                    : <CircularProgressIndicator/>
                }
            </Paper>
        );
    }
}

ResetPasswordForm.propTypes = {
    submit: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired
};

export default ResetPasswordForm;