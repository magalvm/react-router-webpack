import {
    put,
    //call,
    takeEvery,
} from 'redux-saga/effects';

import {
    //getDataAction,
    //postDataAction,
    // putDataAction,
    // deleteDataAction
} from '../../../Common/axios';

import {
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_ERROR
} from '../actionTypes';


//https://jsonplaceholder.typicode.com/ - fake online REST API

function* runRegistr(action) {

    let data = {
        "status": "ok",
        "model": {
            "user_email": action.model.email,
            "user_password":action.model.password
        }
    };
    try {

        yield put({
            type: REGISTRATION_SUCCESS,
            data
        });
    } catch (error) {
        yield put({
            type: REGISTRATION_ERROR,
            error: error
        });
    }
}

export function* register() {
    yield takeEvery(REGISTRATION_REQUEST, runRegistr)
}
