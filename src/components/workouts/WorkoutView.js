import React, { useEffect, useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import Workout from './Workout';
import AddWorkout from './AddWorkout';
import UserWorkoutsSkeleton from '../../util/UserWorkoutsSkeleton';

import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';

import MyButton from '../../util/MyButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getUserWorkouts } from '../../redux/actions/dataActions'

const styles = {

    content: {
        alignItems: "center",
        display: 'flex',
        justifyContent: "space-between"
    },
    card: {
        minHeight: 250
    },
    cardActions: {
        display: 'flex',
        justifyContent: "center"
    }


};
const WorkoutView = ({ classes, day, setDay }) => {

    const userWorkouts = useSelector(state => state.data.userWorkouts, shallowEqual)
    const loading = useSelector(state => state.data.loading, shallowEqual)

    const dispatch = useDispatch();

    const handleLeft = () => {
        setDay(day.subtract(1, 'd'));
    }
    const handleRight = () => {
        setDay(day.add(1, 'd'));
    }

    useEffect(() => {
        dispatch(getUserWorkouts())
    }, [])
    let recentWorkoutsMarkup = !loading ? (
        userWorkouts.map(workout => <Workout key={workout.workoutId} workout={workout} />)
    ) : (<UserWorkoutsSkeleton />)
    return (
        <Container maxWidth='sm'>
            <Card className={classes.card}>
                <CardContent className={classes.content} >
                    <MyButton onClick={handleLeft}
                        noTip={true}
                        tip={"Prev Day"}
                    >
                        <ChevronLeftIcon />
                    </MyButton>
                    <Typography variant="h5">
                        {day.calendar()}
                    </Typography>
                    <MyButton onClick={handleRight}
                        noTip={true}
                        tip={"Next Day"}
                    >
                        <ChevronRightIcon />
                    </MyButton>
                </CardContent>

                <Grid container  >
                    <Grid item xs={12}>
                        {recentWorkoutsMarkup}
                    </Grid>

                </Grid>
                <CardActions disableSpacing className={classes.cardActions}>
                    {!loading ? <AddWorkout /> : <AddCircleIcon fontSize='large' color='disabled' />}
                </CardActions>
            </Card>
        </Container>
    )
}

export default withStyles(styles)(WorkoutView)
