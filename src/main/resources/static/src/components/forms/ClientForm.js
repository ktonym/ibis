import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

class ClientForm extends React.Component{

    state = {
       data: {
           clientName: "",
           clientId: null
       },
       errors: {}
    };

    componentWillReceiveProps(nextProps){
        this.setState({errors: nextProps.serverErrors});
    }

    onChange = e =>
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        });

    onSubmit = e => {
        const errors = this.validate(this.state.data);
        const {data} = this.state;
        e.preventDefault();
        this.setState({errors});
        if(Object.keys(errors).length===0){
            this.setState({loading: true});
            this.props.submit(data);
        }
    };

    validate = data => {
        const errors = {};
        if(!data.clientName) errors.clientName = "Client name can't be blank";
        return errors;
    };

    render(){
        const {data,errors,loading} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <TextField id="clientId" floatingLabelText="Client Id"
                    disabled={true}/><br/>
                <TextField id="clientName" floatingLabelText="Client Name"
                    hintText="Enter client name" onChange={this.onChange}/><br/>
                <FlatButton secondary={true} label="Cancel"/>
                <FlatButton primary={true} label="Save" />
            </form>
        );
    }
}


const mapStateToProps = (state) => ({
    serverErrors: state.formErrors.client
});

ClientForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(ClientForm);