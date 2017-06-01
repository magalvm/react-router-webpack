import {fromJS} from 'immutable';
import {
    setUserAuth,
    getUserAuth,
    removeTokens,
} from '../../../utils';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_RESET,
    LOGOUT_REQUEST,
    REGISTRATION_SUCCESS
} from '../actionTypes'

const initialState = fromJS({
    error: null,
    isLoading: false,
    isFetching: false,
    isAuthenticated:getUserAuth()?true:false,
    user: null,
    token: ''
});


function login(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return state
                .set('user', action.model)
                .set('isLoading', true);
        case LOGIN_SUCCESS:
            return state
                .set("isLoading", false)
                .set("isAuthenticated", true);
        case REGISTRATION_SUCCESS:
            setUserAuth(action.data.model,true);
            return state
                .set("isLoading", false)
                .set("isAuthenticated", true)
                .set("user", action.data);
        case LOGIN_FAILURE:
            return state
                .set("isLoading", false)
                .set("isAuthenticated", false)
                .set("error", action.error);
        case LOGOUT_REQUEST:
            removeTokens();
            return initialState;
        case LOGIN_RESET:
            return initialState;
        default:
            return state
    }
}

export default login;