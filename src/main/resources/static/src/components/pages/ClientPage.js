import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";
import ClientForm from "../forms/ClientForm";
import {addClientRequest} from "../../actions/client";
/*import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';*/

const style = {
    paper: {
        display: 'inline-block',
        float: 'left',
        margin: '16px 32px 16px 0'
    },
    rightIcon: {
        textAlign: 'center',
        lineHeight: '24px'
    }
};

const mapDispatchToProps = (dispatch) => ({
    addClient: (data) => dispatch(addClientRequest(data))
});

class ClientPage extends React.Component{

    submit = data => this.props.addClient(data);

    render(){
        return(
            <div>
                <Paper style={style.paper}>
                    <ClientForm submit={this.submit}/>
                </Paper>
            </div>
        );
    }

}


ClientPage.propTypes = {
    addClient: PropTypes.func.isRequired
};

export default connect(null,mapDispatchToProps)(ClientPage);