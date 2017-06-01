import {fromJS} from 'immutable';

import {
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_ERROR,
    REGISTRATION_RESET
} from '../actionTypes'

const initialState = fromJS({
    isLoading: false,
    error: null,
    data: [],
});

const registration = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION_REQUEST:
            return state
                .set('isLoading', true);
        case REGISTRATION_SUCCESS:
            return state
                .set('data', action.data)
                .set('isLoading', false);
        case REGISTRATION_ERROR:
            return state
                .set('error', action.error)
                .set('isLoading', false);
        case REGISTRATION_RESET:
            return initialState;
        default:
            return state;
    }
};


export default registration;

