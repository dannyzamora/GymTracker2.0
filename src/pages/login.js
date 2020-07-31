import React, { useState, useEffect } from 'react'
import withStyles from "@material-ui/core/styles/withStyles"
import AppIcon from '../images/fitness.png'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import CircularProgress from "@material-ui/core/CircularProgress"


import { Link } from "react-router-dom"

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';



const styles = (theme) => ({
    ...theme.spread
});
const Login = ({ classes, history }) => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user, shallowEqual);
    const UI = useSelector(state => state.UI, shallowEqual);

    const { loading } = UI;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});


    useEffect(() => {
        if (UI.errors) {
            setErrors(UI.errors)
        }
    }, [UI.errors])

    useEffect(() => {
      
        dispatch( {type:'CLEAR_ERRORS'} )
        
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        const userData = {
            email,
            password
        };
        dispatch(loginUser(userData, history));

    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }



    return (
        <Grid container className={classes.form}>
            <Grid item sm />
            <Grid item sm>
                <img src={AppIcon} alt="icon" className={classes.image} />
                <Typography variant="h3" className={classes.pageTitle}>
                    Login
                </Typography>
                <form noValidate onSubmit={handleSubmit} >
                    <TextField
                        id="email"
                        name="email"
                        type="email"
                        label="Email"
                        helperText={errors.email}
                        error={errors.email ? true : false}
                        className={classes.textField}
                        onChange={handleEmailChange}
                        value={email}
                        fullWidth />
                    <TextField
                        id="password"
                        name="password"
                        type="password"
                        label="Password"
                        helperText={errors.password}
                        error={errors.password ? true : false}
                        className={classes.textField}
                        onChange={handlePasswordChange}
                        value={password}
                        fullWidth />
                    {errors.general && (
                        <Typography variant="body2" className={classes.customError}>
                            {errors.general}
                        </Typography>
                    )}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        disabled={loading}>
                        Login
                        {
                            loading && <CircularProgress size={30} className={classes.progress} />
                        }
                    </Button>
                    <br />
                    <small>don't have and account ? sign up <Link to="/signup">here</Link> </small>
                </form>
            </Grid>
            <Grid item sm />
        </Grid >
    )
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,

};


export default withStyles(styles)(Login)
