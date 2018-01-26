import {ADD_CLIENT_SUCCESS,ADD_CLIENT_FAILED} from "../types";
import { createSelector } from "reselect";

export default function clients(state = {}, action = {}){
    switch (action.type){
        case ADD_CLIENT_SUCCESS:
            return { ...state, ...action.data.entities.clients };
        case ADD_CLIENT_FAILED:
            return { ...state, ...action.message };
        default:
            return state;
    }
} ;

//SELECTORS
export const clientsSelector = state => state.clients;

export const allClientsSelector = createSelector(
    clientsSelector,clientsHash => Object.values(clientsHash)
);