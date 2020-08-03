import React, { useState } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'

import WorkoutDialog from './WorkoutDialog'
import RemoveWorkout from './RemoveWorkout'

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"

import Typography from "@material-ui/core/Typography"


const useStyles = makeStyles((theme) => createStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        padding: "0 10px",
        margin: "0 10px 20px",
        border: `1px solid ${theme.palette.primary.dark}`
    },
    actions: {

        display: "flex",
        justifyContent: 'flex-end',
        paddingTop: 0,
        marginTop: -5

    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        objectFit: "cover",
        paddingBottom: 0
    }

}))

const Workout = ({
    workout: {
        muscle,
        userHandle,
        createdAt,
        name,
        setCount,
        workoutId } }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };


    const classes = useStyles();

    return (
        <>
            <Card className={classes.card}>
                <CardContent onClick={handleClickOpen} className={classes.content}>
                    <div>
                        <Typography variant="h5" >{name}</Typography>
                        <Typography variant="body2" color='textSecondary'>{muscle}</Typography>

                    </div>


                    <Typography variant="h5" color="primary">{setCount}</Typography>

                </CardContent>
                <CardActions className={classes.actions}>
                    <RemoveWorkout workoutId={workoutId} />
                </CardActions>



            </Card>
            <WorkoutDialog workoutId={workoutId} userHandle={userHandle} onClose={handleClose} open={open} />
        </>
    )
}

export default Workout
