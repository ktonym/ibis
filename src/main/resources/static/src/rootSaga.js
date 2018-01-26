import { fork } from "redux-saga/effects";
import {watchAddClient} from "./sagas/clientSagas";

export default function* rootSaga () {
    yield fork(watchAddClient);
}