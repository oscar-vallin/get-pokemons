import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Routes from '../../Routes';
import LogOut from '../auth/LogOut';
import './style.css'

const Navbar = () => {
    const authUser = useSelector(({user}) => user);

    return(
        <div>
            <div className="navbar">  
            <NavLink to="/pokemons" activeClassName="active">
                Pokemons
            </NavLink>

            <NavLink to="/favorite" activeClassName="active">
                Favorite Pokemons
            </NavLink>

            {!authUser.loggedIn
                ? <NavLink to="/" activeClassName="active">
                        Log In
                    </NavLink>
                : <LogOut />
            } 
        </div>
            <Routes />
    </div>
    );
};

export default Navbar;