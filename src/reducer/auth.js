import {SIGN_IN, LOG_OUT} from '../constants';
import {Map} from 'immutable';

const defaultState = new Map({
    isAuthorized: false
});

export default (authState = defaultState, action) => {
    const {type} = action;

    switch (type) {
        case SIGN_IN:
            return authState.set('isAuthorized', true);

        case LOG_OUT:
            return authState.set('isAuthorized', false);
    }

    return authState;
}