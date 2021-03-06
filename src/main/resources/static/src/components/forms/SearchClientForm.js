import React, {Component} from 'react';
import PropTypes from "prop-types";
// import {connect} from "react-redux";
import SearchBar from "material-ui-search-bar";
import {Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn} from 'material-ui/Table';

class SearchClientForm extends Component{
    state = {
        query: '',
        loading: false,
        //options: [],
        clients: this.props.clients
    };

    componentWillReceiveProps(props){
        this.setState({
            clients: props.clients
        });
        console.log(this.state.clients);
    }

    // when we press enter key, or click on search
    onSearchChange = () => {
        // console.log(this.state.query);
        if(!this.state.query) return;
        this.setState({loading: true});
        //dispatch a search to api
        this.props.searchClient(this.state.query);
    };

    //as we type
    onChange = (data) => {
        this.setState({query: data});
    };

    render(){
        const {clients} = this.props;
        return (
            <div>
                <SearchBar
                    onChange={this.onChange}
                    onRequestSearch={this.onSearchChange}
                    style={{margin: '0 auto',fullWidth: true}}
                />
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Client Name</TableHeaderColumn>
                            <TableHeaderColumn>Join Date</TableHeaderColumn>
                            <TableHeaderColumn>KRA PIN</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    { clients && clients.map((client,index)=>{
                        return (
                            <TableRow key={index}>
                                <TableRowColumn>{client.clientId}</TableRowColumn>
                                <TableRowColumn>{client.clientName}</TableRowColumn>
                                <TableRowColumn>{client.joinDate}</TableRowColumn>
                                <TableRowColumn>{client.pin}</TableRowColumn>
                            </TableRow>
                        );
                    })}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

SearchClientForm.propTypes = {
    //onClientSelect: PropTypes.func.isRequired,
    searchClient: PropTypes.func.isRequired,
    clients: PropTypes.arrayOf(
        PropTypes.shape({
            clientId: PropTypes.number.isRequired,
            clientName: PropTypes.string.isRequired,
            pin: PropTypes.string.isRequired,
            joinDate: PropTypes.string.isRequired //PropTypes.instanceOf(Date)
        })
    ).isRequired
};

const getClientRow = (client, index) => {
     return <TableRow>
                <TableRowColumn>{client.clientId}</TableRowColumn>
                <TableRowColumn>{client.clientName}</TableRowColumn>
                <TableRowColumn>{client.joinDate}</TableRowColumn>
                <TableRowColumn>{client.pin}</TableRowColumn>
            </TableRow>;
};

export default SearchClientForm;