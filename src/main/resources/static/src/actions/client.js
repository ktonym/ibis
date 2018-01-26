import {ADD_CLIENT_SUCCESS, ADD_CLIENT_FAILED, ADD_CLIENT} from "../types";

export const addClientSuccess = (data) => ({
    type: ADD_CLIENT_SUCCESS,
    data
});

export const addClientFailed = errors => ({
    type: ADD_CLIENT_FAILED,
    errors
});

/*To be used in the form to request addClient*/
export const addClientRequest = (data) => ({
    type: ADD_CLIENT,
    data
});
