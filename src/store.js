import {createStore, applyMiddleware, compose} from 'redux';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunkMiddleware, routerMiddleware(browserHistory), sagaMiddleware];

if(process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
}

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middlewares),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    store.runSaga = sagaMiddleware.run;

    return store;
} 

