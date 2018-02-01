import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import AppBar from "material-ui/AppBar";
import MenuItem from "material-ui/MenuItem";
import Drawer from 'material-ui/Drawer';
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
/*import FlatButton from "material-ui/FlatButton";*/
import {logoutRequest} from "../../actions/auth";
/*import Login from "./Login";*/

const Logged = ({onClickLogout}) => {
    return(
        <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem primaryText="Logout" onClick={onClickLogout}/>
        </IconMenu>
    );
};

/*const Loginn = (handleClick) => (
  <FlatButton onClick={handleClick} label="Login" />
);*/

class TopNavigation extends React.Component{
    state = {
        open : false
        /*authenticated: true*/
    };

    handleToggle = () => this.setState({open: !this.state.open});

    handleLogout = () => this.props.logout();

    render(){
        const {isAuthenticated}= this.props;
        return (
            <div>
                <AppBar onLeftIconButtonClick={this.handleToggle} title="minsys"
                    iconElementRight={isAuthenticated && <Logged onClickLogout={this.handleLogout}/> }
                        /*iconElementRight={isAuthenticated && <FlatButton onClick={this.handleLogout} label="Logout"/> }*/
                        /*iconElementRight={this.state.authenticated ? <Logged/> : <Login logout={this.handleLogout}/>}*/
                ></AppBar>
                { isAuthenticated &&
                    <Drawer open={this.state.open}>
                        <AppBar iconElementLeft={<IconButton><NavigationClose/></IconButton>}
                                onLeftIconButtonClick={this.handleToggle} title="ibis"/>
                        <MenuItem>Clients</MenuItem>
                        <MenuItem>Products</MenuItem>
                        <MenuItem>Policies</MenuItem>
                        <MenuItem>Claims</MenuItem>
                        <MenuItem>Care</MenuItem>
                    </Drawer>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
   isAuthenticated: !!state.user.access_token
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logoutRequest())
});

TopNavigation.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(TopNavigation);