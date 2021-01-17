import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Favorite} from './favorite/Favorite';

import {favsPokemonsAction} from '../../actions/pokeAction';
import Spinner from '../../services/spinner';

import './style.css'
const FavoritePokemons = () => {
    const dispatch = useDispatch();

    const pokeRecord = useSelector(({poke}) => poke);
    const userUid = useSelector(({user}) => user.uid);
    const error = useSelector(({poke}) => poke.error);

    useEffect(() => {
        dispatch(favsPokemonsAction(userUid));
    },[dispatch, userUid]);

    return(
        <div>
            {pokeRecord.fetching
                ? <Spinner />
                :
                <div className="favorite-pokemon">
                    {error && <p>That pokemon is already added to favorites</p>}
                        {pokeRecord.favoritePokemons && pokeRecord.favoritePokemons.map(pokemon => (
                            <Favorite key={pokemon.name} pokemon={pokemon}/>
                        ))}
                </div>
            }
            
        </div>
    );
}

export default FavoritePokemons;