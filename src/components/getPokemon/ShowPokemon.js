import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addTofavoriteAction} from '../../actions/pokeAction';

export const ShowPokemon = ({data}) => {

    const dispatch = useDispatch();
    const addFavorite = data  => dispatch(addTofavoriteAction(data));

    return(
         <div className="container__pokemon">
            <div className="pokemon">
                <div className="pokemon__name">
                    <p>{data.name}</p>
                </div>
                <div className="pokemon__image">
                    <img src={data.image} alt={data.name}/>
                </div>
                <div className="pokemon__attacks">
                    { data.attacks && data.attacks.special.slice(0,3).map(attack => (
                        <span key={`${attack.name} ${attack.damage}`}> {attack.name}</span>
                    ))}
                </div>
                <div className="add-pokemon"> 
                    <Link to="/favorite" onClick={() => addFavorite(data)}>Add to Favorites</Link>
                </div>
            </div>
        </div>
    )
}