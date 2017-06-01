import {
    REGISTRATION_REQUEST,
    REGISTRATION_RESET
} from '../actionTypes'

export function createNewUser(model) {
    return {
        type: REGISTRATION_REQUEST,
        model
    }
}

export function resetAccount() {
    return {
        type: REGISTRATION_RESET
    }
}