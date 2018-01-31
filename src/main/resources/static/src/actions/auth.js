import {USER_LOGIN, USER_LOGIN_FAILED, USER_LOGOUT,RESET_PASS_REQUEST} from "../types";

export const loginRequest = (data) => ({
    type: USER_LOGIN,
    data
});

export const loginFailed = errors => ({
    type: USER_LOGIN_FAILED,
    errors
});

export const logoutRequest = () => ({
    type: USER_LOGOUT
});

export const resetPassRequest = email => ({
    type: RESET_PASS_REQUEST,
    email
});