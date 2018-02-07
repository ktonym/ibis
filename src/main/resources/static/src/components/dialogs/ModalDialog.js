import React,{Component} from "react";
import PropTypes from "prop-types";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class ModalDialog extends Component{

    state = {
        open: this.props.open,
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
            />];
        const {message} = this.props;
        const {open} = this.state;
        return (
            <div>
                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={open}>
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