import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const authenticated = useSelector(state => state.user.authenticated, shallowEqual);
    console.log(authenticated)
    return (
        <Route
            {...rest}
            render={(props) => authenticated === false ? <Redirect to='/login' /> : <Component{...props} />
            }
        />
    )
}

export default PrivateRoute
