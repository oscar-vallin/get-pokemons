import axios from 'axios';
import { 
    GET_POKE, 
    POKE_SUCCESS, 
    ADD_FAVO_POKE, 
    POKE_ERROR,
    GET_FAVS, 
    GET_FAVS_SUCCESS, 
    GET_FAVS_ERROR
} from './types';

import {updateDB, getFavsPoke} from '../firebase';


export const searchPokeAction = urlApi => async dispatch => {

    const response = await axios.get(urlApi);
    const data = await response.data

    dispatch({
        type: GET_POKE,
        payload: {
            next: data.next,
            previous: data.previous
        }
    });
    loadingAction(data.results)(dispatch);
};

//loading pokemons

export const loadingAction = data => async dispatch => {

    const _pokemon = await Promise.all(data.map(async pokemon => {
        let pokemonRecord = await axios.get(pokemon.url);
        let data = await pokemonRecord.data;
        return data;
    }));

    dispatch({
        type: POKE_SUCCESS,
        payload: _pokemon
    });
}


//add to favorites

export const addTofavoriteAction = dataPoke => (dispatch, getState) => {
    
    const {favoritePokemons} = getState().poke;
    const {uid} = getState().user;
    console.log(dataPoke)
    const pokeExist = favoritePokemons.find(({name}) => name === dataPoke.name);
    
    if(pokeExist) return dispatch({ type: POKE_ERROR });
    
    favoritePokemons.push(dataPoke);
    updateDB(favoritePokemons, uid);
    dispatch({
        type: ADD_FAVO_POKE,
        payload: favoritePokemons
    });

}


export const favsPokemonsAction = uid => (dispatch, getState) => {
    
    dispatch({type: GET_FAVS});
    
    return getFavsPoke(uid)
        .then(favs => {
            dispatch({
                type: GET_FAVS_SUCCESS,
                payload: [...favs]
            });
        })
        .catch(error => {
            console.log(error)
            dispatch({
                type: GET_FAVS_ERROR,
                payload: error.message
            });
        });
}

