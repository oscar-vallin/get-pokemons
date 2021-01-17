import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import userReducer from './userReducer';
import pokeReducer from './pokeReducer';

import {restoreSessionAction} from '../actions/userAction';

const rootReducer = combineReducers({
    user: userReducer,
    poke: pokeReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    restoreSessionAction()(store.dispatch);
    return store;
};
