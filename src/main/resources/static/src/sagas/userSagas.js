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