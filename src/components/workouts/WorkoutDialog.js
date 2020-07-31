import React, { useEffect } from 'react';

import Sets from './Sets';
import AddSets from './AddSets';

import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import CircularProgress from '@material-ui/core/CircularProgress';



import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';


import { getUserWorkout, clearErrors } from '../../redux/actions/dataActions';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';


const styles = makeStyles((theme) => createStyles({
    ...theme.spread,
    dialog: {
        padding: 20
    }
}))
const WorkoutDialog = ({ open, onClose, workoutId }) => {
    const dispatch = useDispatch();
    const workout = useSelector(state => state.data.userWorkout, shallowEqual);
    const loading = useSelector(state => state.UI.loading, shallowEqual);
    const { name, sets } = workout;
    useEffect(
        () => {
            if (open) {
                dispatch(getUserWorkout(workoutId))

            }
        }, [open]
    )
    useEffect(
        () => {
            if (workout.sets)
                console.log(workout.sets.length)


        }, [workout]
    )

    const classes = styles();

    const dialog = loading ? (
        <div>
            <CircularProgress />
        </div>
    ) : (

            <Grid container spacing={3}>
                <Grid item >
                    <Typography variant='h6'>
                        {name}
                    </Typography>

                </Grid>

                <Sets sets={sets} />
                <AddSets workoutId={workoutId} />
            </Grid>

        )

    return (
        <Dialog
            onClose={onClose}
            open={open}
            fullWidth
            maxWidth="xs">
            <DialogContent className={classes.dialog}>
                {dialog}
            </DialogContent>
        </Dialog>
    )
}

export default WorkoutDialog
