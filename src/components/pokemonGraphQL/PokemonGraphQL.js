
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

import {PokemonContainer} from '../../container/PokemonContainer';

import './style.css';

export const PokemonGraphQL = () => {
    const client = new ApolloClient({
        uri: "https://graphql-pokemon2.vercel.app"
    });


    return(
        <ApolloProvider client={client}>
            <div>
                <PokemonContainer />
            </div>
        </ApolloProvider>
    )
}