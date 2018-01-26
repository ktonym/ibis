import { call,put, takeLatest } from "redux-saga/effects";
import api from "../api";
import {addClientFailed, addClientSuccess} from "../actions/client";
import {ADD_CLIENT} from "../types";


export function* watchAddClient() {
    /*coming from our form*/
    yield takeLatest(ADD_CLIENT, addClientSaga);
}

export function* addClientSaga(action) {
    try {
        yield console.log(action.client);
        const client = yield call(api.client.add, action.client);
        yield put(addClientSuccess(client));
        //yield put("ADD_CLIENT_SUCCESS", action);
    } catch (e){
        //yield put({type: "ADD_CLIENT_FAILED", message:(e)});
        yield put(addClientFailed(e.response.data.errors));
    }
}