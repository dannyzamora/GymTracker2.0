import {
    SET_USER_WORKOUTS,
    LOADING_DATA,
    DELETE_USER_WORKOUT,
    POST_USER_WORKOUT,
    SET_USER_WORKOUT
} from '../types';

const initialState = {
    userWorkouts: [],
    userWorkout: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            };
        case SET_USER_WORKOUTS:
            return {
                ...state,
                userWorkouts: action.payload,
                loading: false
            };
        case SET_USER_WORKOUT:
            return {
                ...state,
                userWorkout: action.payload
            };

        case DELETE_USER_WORKOUT:
            let index = state.userWorkouts.findIndex(
                (userWorkout) => userWorkout.userWorkoutId === action.payload
            );
            state.userWorkouts.splice(index, 1);
            return {
                ...state
            };
        case POST_USER_WORKOUT:
            return {
                ...state,
                userWorkouts: [action.payload, ...state.userWorkouts]
            };

        default:
            return state;
    }
}
