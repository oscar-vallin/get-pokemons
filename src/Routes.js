import {Switch, Route} from 'react-router-dom';

import Login from './components/auth/Login';
import Pokemon from './components/pokemons/Pokemon';
import FavoritePokemons from './components/favoritePokemon/FavoritePokemons'
import {PokemonGraphQL} from './components/pokemonGraphQL/PokemonGraphQL';

import {PrivateRoute} from './services/privateRoute';

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/poke-name" component={PokemonGraphQL} />
            <PrivateRoute exact path="/pokemons" component={Pokemon}/>
            <PrivateRoute exact path="/favorite" component={FavoritePokemons}/>
        </Switch>
    );
};

export default Routes;