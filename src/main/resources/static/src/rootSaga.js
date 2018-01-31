import { fork } from "redux-saga/effects";
import {watchAddClient} from "./sagas/clientSagas";
import {watchPassResetReq} from "./sagas/userSagas";
import {watchLogin} from "./sagas/userSagas";

export default function* rootSaga () {
    yield fork(watchAddClient);
    yield fork(watchPassResetReq);
    yield fork(watchLogin);
}