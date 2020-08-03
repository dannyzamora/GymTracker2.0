import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'


import MyButton from '../../util/MyButton';

import DeleteIcon from '@material-ui/icons/Delete';

import { useDispatch } from 'react-redux';
import { deleteuserWorkout } from '../../redux/actions/dataActions'

const useStyles = makeStyles((theme) => createStyles({
    removeButton: {

        // position: "absolute",
        // left: "89%",

        // [theme.breakpoints.down('sm')]: {
        //     left: "90%"
        // },
        // [theme.breakpoints.down('xs')]: {
        //     left: "85%"
        // },
        // [theme.breakpoints.down('400')]: {
        //     left: "82%"
        // },

        // top: "60%",
        color: theme.palette.secondary.dark,
        padding: 0


    }
}))
const RemoveWorkout = ({ workoutId }) => {

    const classes = useStyles();
    const dispatch = useDispatch()


    // useEffect(() => {
    //     dispatch(getUserWorkout(workoutId))
    // }, [])

    const handleDelete = (event) => {
        event.preventDefault();
        dispatch(deleteuserWorkout(workoutId))



    }

    return (
        <MyButton
            tip="Remove"
            btnClassName={classes.removeButton}
            onClick={handleDelete}
        >
            <DeleteIcon />
        </MyButton>

    )
}

RemoveWorkout.propTypes = {

}

export default RemoveWorkout
