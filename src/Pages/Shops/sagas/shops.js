import {put, call, takeEvery} from 'redux-saga/effects';


import {
    getDataAction
} from '../../../Common/axios';

import {
    GET_SHOPS_REQUEST,
    GET_SHOPS_SUCCESS,
    GET_SHOPS_ERROR,
} from '../actionTypes';

function* runGetListShops(action) {
    try {
        const data = yield call(getDataAction, 'http://www.json-generator.com/api/json/get/bZTcBnsIgO');

        yield put({
            type: GET_SHOPS_SUCCESS,
            data
        });
    } catch (error) {
        yield put({
            type: GET_SHOPS_ERROR,
            error: error
        });
    }
}

export function* shops() {
    yield takeEvery(GET_SHOPS_REQUEST, runGetListShops);
}