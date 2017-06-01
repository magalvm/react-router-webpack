import {
    LOGIN_SUCCESS,
    LOGOUT_REQUEST,
    LOGIN_RESET
} from '../actionTypes';

export function login(model) {
    return {
        type: LOGIN_SUCCESS,
        model
    }
}

export function resetLogin() {
    return {
        type: LOGIN_RESET
    }
}

export function logOut() {
    return {
        type: LOGOUT_REQUEST,
    }
}
