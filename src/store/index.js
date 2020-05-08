import thunk from 'redux-thunk'

import {applyMiddleware, compose, createStore} from 'redux'
import reducer from "./reducers";
import ApiService from "../services/ApiService";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

//set getState and dispatch to ApiService singleton
ApiService.getState = store.getState;
ApiService.dispatch = store.dispatch;

export default store;
