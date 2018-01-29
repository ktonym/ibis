import {USER_LOGOUT, USER_LOGIN_SUCCESS} from "../types";

/*Need to create loaded status on user reducer*/
export default function user(state = {}, action={}){
    switch(action.type){
        case USER_LOGIN_SUCCESS:
            return action.user;
        case USER_LOGOUT:
            return {};
        default:
            return state || {};
    }
}