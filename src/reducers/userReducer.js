import {LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT} from '../actions/types';

const initialState = {
    loggedIn: false,
    logOut: false,
    mesage: null,
    fetching: false   
};

export default function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN:
            return {...state, fetching: true};
        case LOGIN_SUCCESS:
            return {...state, ...action.payload, fetching: false, loggedIn: true, logOut: false};    
        case LOGIN_ERROR:
            return {...state, mesage: action.payload, fetching: false};
        case LOG_OUT:
            localStorage.removeItem('poke');
            return{...initialState, loggedIn: false, user: null}        
        default: 
        return state;
    };
};