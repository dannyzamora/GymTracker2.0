import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux';


const PublicRoute = ({ component: Component, ...rest }) => {
    const authenticated = useSelector(state => state.user.authenticated, shallowEqual);
    console.log(authenticated)
    return (
        <Route
            {...rest}
            render={(props) => authenticated === true ? <Redirect to='/' /> : <Component{...props} />}
        />
    )
}

export default PublicRoute
