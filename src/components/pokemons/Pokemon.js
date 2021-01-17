import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import {searchPokeAction} from '../../actions/pokeAction';
import CardPoke from '../cardPoke/CardPoke';
import Spinner from '../../services/spinner';

import './style.css';

const Pokemon = () => {
    const dispatch = useDispatch();
    const pokeRecord = useSelector(({poke}) => poke);
  
    const urlApi = 'https://pokeapi.co/api/v2/pokemon';
    useEffect(() => {
        dispatch(searchPokeAction(urlApi));
    }, [dispatch]);

 
    const nextPage = () => dispatch(searchPokeAction(pokeRecord.nextPokes));
    const previousPage = () => pokeRecord.previousPokes ? dispatch(searchPokeAction(pokeRecord.previousPokes)) : null;
        

    return(
        <div className="main-poke">
                {pokeRecord.fetching ?
                    <Spinner />   
                    :
                    <div className="search-pokemons__name">
                     <Link to="/poke-name">Search Pokemon for Name</Link>   
                    <div className="card" >
                    {pokeRecord.pokeRecord && pokeRecord.pokeRecord.map((pokemon, i) => (
                        <CardPoke 
                            key={i}
                            name={pokemon.forms[0].name}
                            imgPoke={pokemon.sprites.front_default}
                        />
                    ))};
                    </div>
                    <div className="more-poke">
                        <button onClick={previousPage}>previous</button>
                        <button onClick={nextPage}>next</button>
                    </div>
                    </div>
                }
                
        </div>
    );
}

export default Pokemon;