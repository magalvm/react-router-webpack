import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {Router, browserHistory} from 'react-router';

import sagas from './sagas';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-select/dist/react-select.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

import configureStore from './store';
import routes from './routes';
//import {initEnvironment} from './utils';

const store = configureStore();

sagas.forEach(saga => store.runSaga(saga));

//initEnvironment(store); // init global vars for the environment
const history = syncHistoryWithStore(browserHistory,store);

render(
    <Provider store={store}>
        <Router history={history} routes={routes(store)} />
    </Provider>,

    document.getElementById('root')
);