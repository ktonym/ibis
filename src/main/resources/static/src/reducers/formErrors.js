import {ADD_CLIENT, ADD_CLIENT_FAILED,USER_LOGIN_FAILED } from "../types";

export default function formErrors(state = {}, action={}){
    switch(action.type){
        case ADD_CLIENT:
            return {...state, client: {}};
        case ADD_CLIENT_FAILED:
            return {...state, client: action.errors};
        case USER_LOGIN_FAILED:
            return {...state, login: action.errors};
        default: return state;
    }
}