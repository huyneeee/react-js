import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from './index';

const PrivateRoute = ({ children }) => {
    return (
        <Route
            render={() =>
                isAuthenticated() ? (
                    children
                ) : (
                    <Redirect
                        to={{ pathname: "/login" }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute