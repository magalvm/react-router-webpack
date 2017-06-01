import {fromJS} from 'immutable';

import {
    SHOPS_RESET,
    GET_SHOPS_REQUEST,
    GET_SHOPS_SUCCESS,
    GET_SHOPS_ERROR,
} from '../actionTypes'

const initialState = fromJS({
    isLoading: false,
    error: null,
    data: [],
});

const shops = (state = initialState, action) => {
    switch (action.type) {
        case GET_SHOPS_REQUEST:
            return state
                .set('isLoading', true);
        case GET_SHOPS_SUCCESS:
            return state
                .set('data', action.data)
                .set('isLoading', false);
        case GET_SHOPS_ERROR:
            return state
                .set('error', action.error)
                .set('isLoading', false);
        case SHOPS_RESET:
            return initialState;
        default:
            return state;
    }
};


export default shops;

