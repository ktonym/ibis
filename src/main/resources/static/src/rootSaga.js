import { fork } from "redux-saga/effects";
import {watchAddClient} from "./sagas/clientSagas";
import {watchLogin} from "./sagas/userSagas";

export default function* rootSaga () {
    yield fork(watchAddClient);
    yield fork(watchLogin);
}