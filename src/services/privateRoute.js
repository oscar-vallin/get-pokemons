import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = ({path, component, ...props}) => {
    let userStorage = localStorage.getItem('user');
    userStorage = JSON.parse(userStorage);

    if(userStorage){
       return <Route path={path} component={component} {...props}/>
    }else{
        return <Redirect to="/" {...props}/>
    };
};