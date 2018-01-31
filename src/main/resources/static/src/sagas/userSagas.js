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
}