import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {logOutAction} from '../../actions/userAction';

const LogOut = () => {

    const dispatch = useDispatch();
    return(
        <div className="logout">
            <button 
                className="btn-out" 
                onClick={() => dispatch(logOutAction())}>
                <Link to="/">
                    LogOut
                </Link>
            </button>
        </div>
    );
};

export default LogOut;