import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";
import ClientForm from "../forms/ClientForm";
import {addClientRequest,clientSearchRequest} from "../../actions/client";
import SearchClientForm from "../forms/SearchClientForm";

const style = {
    paper: {
        display: 'inline-block',
        float: 'center',
        margin: '16px 32px 16px 32px',
        fullWidth: true
    },
    rightIcon: {
        textAlign: 'center',
        lineHeight: '24px'
    }
};


class ClientPage extends React.Component{

    submit = data => this.props.addClient(data);
    searchClient = query => this.props.clientSearch(query);

    onClientSelect = () => {

    };

    render(){
        return(
            <Paper style={style.paper}>
                <SearchClientForm searchClient={this.searchClient}/>
                {/*<ClientForm submit={this.submit}/>*/}
            </Paper>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    addClient: (data) => dispatch(addClientRequest(data)),
    clientSearch: (query) => dispatch(clientSearchRequest(query))
});

const mapStateToProps = (state) => ({
    clients: state.clients
});

ClientPage.propTypes = {
    addClient: PropTypes.func.isRequired,
    clientSearch: PropTypes.func.isRequired
};

export default connect(null,mapDispatchToProps)(ClientPage);