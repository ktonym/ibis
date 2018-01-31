import {RESET_PASS_REQUEST,RESET_PASS_REQ_SUCCESS,RESET_PASS_REQ_FAILED,USER_LOGIN, USER_LOGIN_FAILED, USER_LOGIN_SUCCESS, USER_LOGOUT} from "../types";

export const loginRequest = (data) => ({
    type: USER_LOGIN,
    data
});

export const loginSuccess = (data) => ({
    type: USER_LOGIN_SUCCESS,
    data
});

export const loginFailed = (errors) => ({
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

export const resetPassReqSuccess = () => ({
    type: RESET_PASS_REQ_SUCCESS
});

export const resetPassReqFailed = (errors) => ({
    type: RESET_PASS_REQ_FAILED,
    errors
});