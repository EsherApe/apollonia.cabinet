import {SIGN_IN, SIGN_OUT} from '../constants';
import {Record} from 'immutable';

const defaultState = Record({
    isAuthorized: false
});

export default (authState = defaultState, action) => {
    const {type} = action;

    switch (type) {
        case SIGN_IN:
            return authState.set('isAuthorized', true);

        case SIGN_OUT:
            return authState.set('isAuthorized', false);
    }

    return authState;
}