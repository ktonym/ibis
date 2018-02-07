import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgressIndicator from "../loading/CircularProgressIndicator";


const style = {
    height: 340,
    width: 440,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    position: 'relative'
};

class LoginForm extends Component{
    state = {
        data: {
            username: "",
            password: ""
        },
        loaded: true,
        errors: {}
    };

    componentWillReceiveProps(nextProps){
        this.setState({errors: nextProps.serverErrors, loaded: nextProps.loaded})
    }

    onSubmit = (e) => {
      const errors = this.validate(this.state.data);
      const {data} = this.state;
      e.preventDefault();
      this.setState({errors});
      if(Object.keys(errors).length===0){
          this.setState({loaded: false}); //need to send this to the store
          this.props.submit(data);
      }
    };

    validate = data => {
        const errors = {};
        if(!data.username) errors.username = "Username can't be blank";
        if(!data.password) errors.password = "Password can't be blank";
        return errors;
    };

    onChange = (e) => this.setState({
       data: {...this.state.data,[e.target.name]: e.target.value}
    });

    render(){
        const {data,errors,loaded} = this.state;
        return (
            <Paper style={style} zDepth={2}>
                <h4>Please login</h4>
                <TextField value={data.username}
                    id="username" name="username" hintText="Enter username"
                    onChange={this.onChange} floatingLabelText="Username"
                    errorText={errors.username}
                /><br/>
                <TextField type="password" value={data.password}
                    id="password" name="password" hintText="Enter password"
                    onChange={this.onChange} floatingLabelText="Password"
                    errorText={errors.password}
                /><br/>

                { loaded ? <RaisedButton fullWidth={false} label="Login" primary={true} onClick={this.onSubmit}/>
                    : <CircularProgressIndicator/>
                }
            </Paper>
        );
    }
}

const mapStateToProps = (state) => ({
   serverErrors: state.formErrors.user,
   loaded: state.user.loaded
});

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(LoginForm);