import React, {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {loginAction} from '../../actions/userAction';

import './style.css';

const Login = ({history}) => {
    const userAuth = useSelector(({user}) => user);
    const dispacth = useDispatch();


    useEffect(() => {
        if(userAuth.loggedIn) return history.push("/pokemons");
    },[history, userAuth]);
    
    return(
        <div className="container login">
            <h2>Welcome to Api Pokemon</h2>
            <div className="log-btn">
                <button onClick={() => dispacth(loginAction())}>Log In With Google</button>
            </div>
        </div>
    );
}

export default Login;