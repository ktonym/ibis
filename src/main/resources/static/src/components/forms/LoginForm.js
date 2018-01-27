import React, {Component} from 'react';
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";


const style = {
    height: 340,
    width: 440,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

class LoginForm extends Component{
    state = {
        data: {
            username: "",
            password: ""
        },
        errors: {}
    };

    onSubmit = (e) => {
      const errors = this.validate(this.state.data);
      const {data} = this.state;
      console.log(data);
      e.preventDefault();
      this.setState({errors});
      if(Object.keys(errors).length===0){
          this.setState({loading: true});
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
        const {data,errors,loading} = this.state;
        return (
            <Paper style={style} zDepth={1}>
                <h3>Please login</h3>
                <TextField value={data.username}
                    id="username" name="username" hintText="Enter username"
                    onChange={this.onChange} floatingLabelText="Username"
                /><br/>
                <TextField type="password" value={data.password}
                    id="password" name="password" hintText="Enter password"
                    onChange={this.onChange} floatingLabelText="Password"
                /><br/>
                <RaisedButton fullWidth={false} label="Login" primary={true} onClick={this.onSubmit}/>
            </Paper>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;