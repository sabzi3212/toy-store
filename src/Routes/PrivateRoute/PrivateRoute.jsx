import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className="radial-progress" style={{"--value":70}}>70%</div>

    }

    if(user?.email){
        return children;
    }
    return <Navigate to='/login' replace></Navigate>;
};

export default PrivateRoute;