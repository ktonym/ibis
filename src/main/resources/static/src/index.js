import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route } from "react-router-dom";
import { Provider } from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import customHistory from "./history";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Router history={customHistory}>
        <Provider store={store}>
            <Route component={App}/>
        </Provider>
    </Router>, document.getElementById('root'));
registerServiceWorker();
