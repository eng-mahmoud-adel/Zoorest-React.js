import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux'
import {BrowserRouter, withRouter} from 'react-router-dom';

import './app.scss';
import App from './App';
import store from './store';
import {routerHistory} from './store'
import * as serviceWorker from './serviceWorker';

const AppWithRouter = withRouter(App);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={routerHistory}>
            <BrowserRouter>
                <AppWithRouter/>
            </BrowserRouter>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
