import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

import { getUserWorkout, clearErrors } from '../../redux/actions/dataActions';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';


const WorkoutDialog = ({ open, onClose, workoutId }) => {
    const dispatch = useDispatch(workoutId);
    const workout = useSelector(state => state.data.userWorkout, shallowEqual);
    const loading = useSelector(state => state.UI.loading, shallowEqual);

    useEffect(() => {
        dispatch(getUserWorkout)
        console.log(workout)
    }, [])



    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>
            </DialogTitle>
        </Dialog>
    )
}

export default WorkoutDialog
