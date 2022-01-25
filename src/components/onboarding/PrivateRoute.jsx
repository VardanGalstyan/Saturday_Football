import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';


function PrivateRoute({ token }) {

    return token ? < Outlet /> : <Navigate to='login' />
}

export default PrivateRoute;
