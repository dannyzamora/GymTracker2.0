import {
    SET_USER,
    SET_ERRORS,
    CLEAR_ERRORS,
    LOADING_UI,
    SET_UNAUTHENTICATED,
    LOADING_USER
} from '../types';

import axios from 'axios';

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('/login', userData)
        .then(res => {
            console.log(res.data)
            setAuthorizationHeader(res.data.token)
            dispatch(getUserData());
            dispatch({ type: CLEAR_ERRORS });
            history.push('/')
        })
        .catch(err => {
            console.log("ERROR", err.response.data)
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
}

export const signupUser = (newUser, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('/signup', newUser)
        .then(res => {
            console.log(res.data)
            setAuthorizationHeader(res.data.token)
            dispatch(getUserData());
            dispatch({ type: CLEAR_ERRORS });
            history.push('/')
        })
        .catch(err => {
            console.log("ERROR", err.response.data)
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

export const getUserData = () => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.get('/user')
        .then(res => {
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err.response.status)
        })
}

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`
    localStorage.setItem('FBIdToken', `Bearer ${token}`)
    axios.defaults.headers.common['Authorization'] = FBIdToken;
}
// export const uploadImage = (formData) => (dispatch) => {
//     dispatch({ type: LOADING_USER });
//     axios
//         .post('/user/image', formData)
//         .then(() => {
//             dispatch(getUserData());
//         })
//         .catch((err) => console.log(err));
// };
// export const editUserDetails = (userDetails) => (dispatch) => {
//     dispatch({ type: LOADING_USER });
//     axios
//         .post('/user', userDetails)
//         .then(() => {
//             dispatch(getUserData());
//         })
//         .catch((err) => console.log(err));
// };
