import React from "react";
import {connect} from "react-redux";
import AppBar from "material-ui/AppBar";
import MenuItem from "material-ui/MenuItem";
import Drawer from 'material-ui/Drawer';
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
/*import Login from "./Login";*/

const Logged = () => (
   <IconMenu
    iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
   >
       <MenuItem primaryText="Logout"/>
   </IconMenu>
);

/*const Loginn = (handleClick) => (
  <FlatButton onClick={handleClick} label="Login" />
);*/

class TopNavigation extends React.Component{
    state = {
        open : false
        /*authenticated: true*/
    };

    handleToggle = () => this.setState({open: !this.state.open});

    handleLogout = () => this.setState({authenticated: !this.state.authenticated});

    render(){
        const {isAuthenticated}= this.props;
        return (
            <div>
                <AppBar onLeftIconButtonClick={this.handleToggle} title="ibis"
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

export default connect(mapStateToProps)(TopNavigation);