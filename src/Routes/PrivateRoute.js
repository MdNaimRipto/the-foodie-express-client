import React, { useContext } from 'react';
import { AuthContext } from '../ContextProvider/AuthProvider';
import { Navigate, useLocation } from "react-router-dom"
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    if (loader) {
        return <div className='text-center mt-32'>
            <Spinner
                color="success"
                aria-label="Center-aligned spinner success"
                size="xl" />
        </div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;
};

export default PrivateRoute;