import {
    SET_USER_WORKOUTS,
    LOADING_DATA,
    DELETE_USER_WORKOUT,
    POST_USER_WORKOUT,
    SET_USER_WORKOUT,
    SUBMIT_SET
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

        // case DELETE_USER_WORKOUT:
        //     let index = state.userWorkouts.findIndex(
        //         (userWorkout) => userWorkout.workoutId === action.payload.workoutId
        //     );
        //     state.userWorkouts.splice(index, 1);
        //     return {
        //         ...state
        //     };
        case SUBMIT_SET:
            let index = state.userWorkouts.findIndex(
                (userWorkout) => userWorkout.workoutId === action.payload.workoutId
            );

            state.userWorkouts[index].setCount++;

            return {
                ...state,
                userWorkout: {
                    ...state.userWorkout,
                    sets: [...state.userWorkout.sets, action.payload]
                }
            }

        case DELETE_USER_WORKOUT:
            let i = state.userWorkouts.findIndex(
                (userWorkout) => userWorkout.workoutId === action.payload
            );

            return {
                ...state,
                userWorkouts: [...state.userWorkouts.slice(0, i), ...state.userWorkouts.slice(i + 1)]

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
