import {USER_LOGOUT, USER_LOGIN_SUCCESS, RESET_PASS_REQ_SUCCESS,RESET_PASS_REQ_FAILED} from "../types";

/*Need to create loaded status on user reducer*/
export default function user(state = {}, action={}){
    switch(action.type){
        case USER_LOGIN_SUCCESS:
            return action.data;
        case USER_LOGOUT:
            return {};
        case RESET_PASS_REQ_SUCCESS:
            return state;
        case RESET_PASS_REQ_FAILED:
            return {...state, errors: action.errors};
        default:
            return state || {};
    }
}