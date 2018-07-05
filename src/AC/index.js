import {
    SIGN_IN,
    SIGN_OUT
} from '../constants';

export function signIn() {
    return {
        type: SIGN_IN
    }
}

export function signOut() {
    return {
        type: SIGN_OUT
    }
}