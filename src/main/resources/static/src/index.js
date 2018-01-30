import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route } from "react-router-dom";
import { Provider } from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App}/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
