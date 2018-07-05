import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import api from '../middlewares/api';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {routerMiddleware} from 'react-router-redux';
import history from '../history';

//apply middleware
const enhancer = applyMiddleware(thunk, routerMiddleware(history), api);
//create store with middleware
const store = createStore(reducer, {}, composeWithDevTools(enhancer));

//dev only
window.store = store;

export default store;