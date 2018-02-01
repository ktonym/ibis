import {call,takeLatest,put} from "redux-saga/effects";
import {USER_LOGIN,USER_LOGOUT,RESET_PASS_REQUEST} from "../types";
import api from "../api";
import {loginFailed, loginSuccess, resetPassReqFailed, resetPassReqSuccess} from "../actions/auth";
import customHistory from "../history";
import setAuthorizationHeader from "../utils/setAuthorizationHeader";

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
        const user = yield call(api.user.login,action.data);
        yield localStorage.setItem('rhinoJWT',JSON.stringify(user));
        yield setAuthorizationHeader(user.access_token);
        yield put(loginSuccess(user));
        customHistory.push("/clients");
    } catch (e){
        yield put(loginFailed({ errors: e}));
    }
}

export function* watchLogout() {
    yield takeLatest(USER_LOGOUT,logoutSaga);
}

export function* logoutSaga() {
    yield localStorage.removeItem("rhinoJWT");
    yield setAuthorizationHeader();
    customHistory.push("/login");
}