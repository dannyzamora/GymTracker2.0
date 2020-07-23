import {
    SET_USER_WORKOUTS,
    LOADING_DATA,
    DELETE_USER_WORKOUT,
    SET_ERRORS,
    POST_USER_WORKOUT,
    CLEAR_ERRORS,
    LOADING_UI,
    SET_USER_WORKOUT,
    STOP_LOADING_UI,
} from '../types';
import axios from 'axios';

// Get all userWorkouts
export const getUserWorkouts = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
        .get('/userWorkouts')
        .then((res) => {
            dispatch({
                type: SET_USER_WORKOUTS,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: SET_USER_WORKOUTS,
                payload: []
            });
        });
};
export const getUserWorkout = (userWorkoutId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
        .get(`/userWorkout/${userWorkoutId}`)
        .then((res) => {
            dispatch({
                type: SET_USER_WORKOUT,
                payload: res.data
            });
            dispatch({ type: STOP_LOADING_UI });
        })
        .catch((err) => console.log(err));
};
// Post a userWorkout
export const postuserWorkout = (newuserWorkout) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
        .post('/userWorkout', newuserWorkout)
        .then((res) => {
            dispatch({
                type: POST_USER_WORKOUT,
                payload: res.data
            });
            dispatch(clearErrors());
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            });
        });
};

// Submit a comment
// export const submitComment = (userWorkoutId, commentData) => (dispatch) => {
//     axios
//         .post(`/userWorkout/${userWorkoutId}/comment`, commentData)
//         .then((res) => {
//             dispatch({
//                 type: SUBMIT_COMMENT,
//                 payload: res.data
//             });
//             dispatch(clearErrors());
//         })
//         .catch((err) => {
//             dispatch({
//                 type: SET_ERRORS,
//                 payload: err.response.data
//             });
//         });
// };
export const deleteuserWorkout = (userWorkoutId) => (dispatch) => {
    axios
        .delete(`/userWorkout/${userWorkoutId}`)
        .then(() => {
            dispatch({ type: DELETE_USER_WORKOUT, payload: userWorkoutId });
        })
        .catch((err) => console.log(err));
};

export const getUserData = (userHandle) => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
        .get(`/user/${userHandle}`)
        .then((res) => {
            dispatch({
                type: SET_USER_WORKOUTS,
                payload: res.data.userWorkouts
            });
        })
        .catch(() => {
            dispatch({
                type: SET_USER_WORKOUTS,
                payload: null
            });
        });
};

export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};