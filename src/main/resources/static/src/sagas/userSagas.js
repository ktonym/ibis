import {call,takeLatest,put} from "redux-saga/effects";
import {USER_LOGIN,RESET_PASS_REQUEST} from "../types";
import api from "../api";
import {loginFailed, loginSuccess, resetPassReqFailed, resetPassReqSuccess} from "../actions/auth";
import customHistory from "../history";

export function* watchPassResetReq() {
    yield takeLatest(RESET_PASS_REQUEST,resetPassReqSaga);
}

export function* resetPassReqSaga(action) {
    try {
        yield console.log(action.email);
        yield put(resetPassReqSuccess);
    } catch (e){
        yield put(resetPassReqFailed({errors: e}))
    }
}

export function* watchLogin() {
    yield takeLatest(USER_LOGIN,loginSaga);
}

export function* loginSaga(action) {
    try {
        /*yield console.log(JSON.stringify(action.data));*/
        const token = yield call(api.user.login,action.data);
        yield put(loginSuccess(token));
        customHistory.push("/clients");
    } catch (e){
        yield put(loginFailed({ errors: e}));
    }
}