import React, { Fragment } from 'react'

import { Link } from "react-router-dom"

import MyButton from '../util/MyButton';

import { logoutUser } from '../redux/actions/userActions';

//MUI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// Icons
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';


const Navbar = () => {
    const dispatch = useDispatch();

    const authenticated = useSelector(state => state.user.authenticated, shallowEqual)

    const handleLogout = () => {
        dispatch(logoutUser())
    }

    return (
        <AppBar>
            <Toolbar className="nav-container">
                {authenticated ? (
                    <Fragment>

                        <Link to="/">
                            <MyButton onClick={handleLogout} tip="Logout">
                                <ExitToAppIcon color='secondary' />
                            </MyButton>
                        </Link>

                    </Fragment>
                ) : (
                        <Fragment>
                            <Button color="inherit" component={Link} to="/login">
                                Login
              </Button>
                            {/* <Button color="inherit" component={Link} to="/">
                                Home
              </Button> */}
                            <Button color="inherit" component={Link} to="/signup">
                                Signup
              </Button>
                        </Fragment>
                    )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
