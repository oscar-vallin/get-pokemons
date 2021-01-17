import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

import {addTofavoriteAction} from '../../actions/pokeAction';
import './style.css'
const CardPoke = props => {

    const dispatch = useDispatch();
    const addFavorite = data => dispatch(addTofavoriteAction(data));
    return(
        <div className="card-pokemon">
            <div className="card-name">
                <p>{props.name}</p>
            </div>
            <div className="card-image">
                <img src={props.imgPoke} alt={props.name}/>
            </div>
            <div className="add-pokemon">
                <Link to="/favorite" onClick={() => addFavorite(props)}>Add to Favorites</Link>
            </div>
        </div>
    );
};

export default CardPoke;