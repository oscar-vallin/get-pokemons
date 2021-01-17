
import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
query pokemons($first: Int!){
    pokemons(first: $first){
      id
      number
      name
      image
      attacks{
          special{
              name
              damage
          }
      }
    }
  }
`;