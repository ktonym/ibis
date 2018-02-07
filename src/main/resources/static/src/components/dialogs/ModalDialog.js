import React,{Component} from "react";
import PropTypes from "prop-types";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class ModalDialog extends Component{

    state = {
        open: true,
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render(){
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={true}
                onClick={this.handleClose}
            />,
        ];
        const {message,open} = this.props;
        return (
            <div>
                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={open&&this.state.open}>
                    {message}
                </Dialog>
            </div>
        );
    }
}

ModalDialog.propTypes = {
    message: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired
};

export default ModalDialog;