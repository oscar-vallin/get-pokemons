import React, {useState} from 'react';
import {useQuery} from '@apollo/react-hooks';

import  '../components/pokemonGraphQL/style.css';

import {GET_POKEMONS} from '../graphql/get-pokemons';
import {ShowPokemon} from '../components/getPokemon/ShowPokemon';

export const PokemonContainer = () => {
   
    const [state, setState] = useState({pokemon: ''});
    const [showFoundPokemon, setShowFoundPokemon] = useState(null);

    const {pokemon} = state;

    const {data: {pokemons = ''} = {}} = useQuery(GET_POKEMONS, {
        variables: {first: 150}
    });

    const handleChange = e => setState({[e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        const pokemonTransform = toUpperCaseFirstLetter(pokemon);
        const getPoke = pokemons.find(({name}) => name === pokemonTransform)

        if(!getPoke) {
            setShowFoundPokemon(null);
            return;
        }else{
            return setShowFoundPokemon(getPoke);
        }

    }

    const toUpperCaseFirstLetter = namePokemon => {
        const cadena = namePokemon.toLowerCase();
        const primerCaracter = cadena.charAt(0).toUpperCase();
        const restoDeLaCadena = cadena.substring(1, cadena.length);
        return primerCaracter.concat(restoDeLaCadena);
    }
    return(
        <div>
            <div className="search-pokemon">
            <input type="text" placeholder="search your pokemon" name="pokemon" onChange={handleChange}/>
            <button onClick={onSubmit}>Search</button>
            </div>
            {showFoundPokemon ?
                <ShowPokemon data={showFoundPokemon}/>
                :<p>Pokemon not Found</p>
            }
        </div>
    );
}