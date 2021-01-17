import {
    GET_POKE, 
    POKE_SUCCESS, 
    POKE_ERROR, 
    ADD_FAVO_POKE,
    GET_FAVS, 
    GET_FAVS_SUCCESS, 
    GET_FAVS_ERROR
} from '../actions/types';

const initialState = {
    nextPokes: '',
    previousPokes: '',
    pokeRecord: null,
    favoritePokemons: [],
    error: null,
    fetching: false
};

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_FAVS_SUCCESS:
            return {...state, fetching: false, favoritePokemons: action.payload}
        case GET_FAVS_ERROR:
            return {...state, fetching: false, error: action.payload};
        case GET_FAVS:
            return {...state, fetching: true}
        case GET_POKE:
            return {...state, nextPokes: action.payload.next, previousPokes: action.payload.previous, error: false, fetching: true};
        case POKE_SUCCESS:
            return {...state, pokeRecord: action.payload, fetching: false};    
        case ADD_FAVO_POKE:
            return {...state, favoritePokemons: action.payload, error: false};
        case POKE_ERROR:
            return {...state, error: true}    
        default: 
        return state;
    };
};