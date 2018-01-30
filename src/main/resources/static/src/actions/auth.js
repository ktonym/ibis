import {USER_LOGIN, USER_LOGIN_FAILED, USER_LOGIN_SUCCESS, USER_LOGOUT} from "../types";

export const loginRequest = (data) => ({
    type: USER_LOGIN,
    data
});

export const loginSuccess = (data) => ({
    type: USER_LOGIN_SUCCESS,
    data
});

export const loginFailed = errors => ({
    type: USER_LOGIN_FAILED,
    errors
});

export const logoutRequest = () => ({
    type: USER_LOGOUT
});