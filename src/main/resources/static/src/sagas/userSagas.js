import {takeLatest,put} from "redux-saga/effects";
import {RESET_PASS_REQUEST,RESET_PASS_REQ_SUCCESS} from "../types";
//import customHistory from "../history";

export function* watchPassResetReq() {
    yield takeLatest(RESET_PASS_REQUEST,resetPassReqSaga);
}

export function* resetPassReqSaga(action) {
    yield console.log(action.email);
    yield put(RESET_PASS_REQ_SUCCESS);
    //customHistory.push("/dashboard");
import {call,takeLatest,put} from "redux-saga/effects";
import {USER_LOGIN} from "../types";
import api from "../api";
import {loginFailed, loginSuccess} from "../actions/auth";

export function* watchLogin() {
    yield takeLatest(USER_LOGIN,loginSaga);
}

export function* loginSaga(action) {
    try {
        yield console.log(action.credentials);
        const token = yield call(api.user.login,action.credentials);
        yield put(loginSuccess(token));
    } catch (e){
        yield put(loginFailed(e))
    }
}