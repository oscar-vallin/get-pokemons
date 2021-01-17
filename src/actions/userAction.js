import {signGoogle, outLogGooge} from '../firebase';
import {
    LOGIN, 
    LOGIN_ERROR, 
    LOGIN_SUCCESS, 
    LOG_OUT
} from './types';

//auxiliar function: save to localstorage
export const saveStorage = userStorage => localStorage.user = JSON.stringify(userStorage);
 
//actions

export const restoreSessionAction = () => dispatch => {
    let userStorage = localStorage.getItem('user');
    userStorage = JSON.parse(userStorage);
   
    if(userStorage){
        dispatch({
            type: LOGIN_SUCCESS,
            payload: userStorage
        });
    };

}    

export const loginAction = () => (dispatch, getState) => {
    dispatch({
        type: LOGIN
    });

    return signGoogle()
        .then(user => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    name: user.displayName,
                    phone: user.phoneNumber,
                    email: user.email,
                    uid: user.uid
                }
            });
            saveStorage(getState().user);
        })
        .catch(error => {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.message
            });
        });
}

export const logOutAction = () => dispatch => {
    outLogGooge();
    
    dispatch({type: LOG_OUT});

    localStorage.removeItem('user');
};
