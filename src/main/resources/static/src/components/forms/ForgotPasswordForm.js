import React,{Component} from "react";
import PropTypes from "prop-types";
import isEmail from "validator/lib/isEmail";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class ForgotPasswordForm extends Component{

    state = {
        data: {
            email: ""
        },
        loading: false,
        errors: {}
    };

    onChange = e => this.setState({
            data: {...this.state.data, [e.target.name]:e.target.value}
        });

    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        const {data} = this.state;
        this.setState({errors});
        if(Object.keys(errors).length===0){
            this.setState({loading:true});
            this.props.submit(data);
        }
    };

    validate = data => {
        const errors = {};
        if(!isEmail(data.email)) errors.email = "Invalid email";
        return errors;
    };

    render(){
        const {errors,data,loading} = this.state;
        return (
            <Paper>
                <p>Enter your email to reset your password</p>
                <TextField name="email" id="email" value={data.email}
                           floatingLabelText="Email" errorText={errors.email}
                           hintText="Enter your email" onChange={this.onChange}/><br/>
                <RaisedButton fullWidth={true} primary={true} label="Send" onClick={this.onSubmit}/>
            </Paper>
        );
    }
}

ForgotPasswordForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default ForgotPasswordForm;