import {
    SIGN_IN,
    LOG_OUT
} from '../constants';

import {replace} from 'react-router-redux';

export function signIn() {
    return (dispatch) => {
        dispatch({
            type: SIGN_IN,
        });

        dispatch(replace('/purchase'));
    }
}

export function logOut() {
    return (dispatch) => {
        dispatch({
            type: LOG_OUT,
        });

        dispatch(replace('/'));
    }
}