import React, { useState } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'

import WorkoutDialog from './WorkoutDialog'

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"


const useStyles = makeStyles((theme) => createStyles({
    card: {
        display: 'flex',
        marginBottom: 20,
        justifyContent: 'space-between',
        padding: "0 10px",
        position: 'relative',
        margin: "0 10px",
        border: `1px solid ${theme.palette.primary.dark}`
    },
    set: {
        flex: 1,
    },
    content: {
        padding: 25,
        objectFit: "cover"
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
            <Card onClick={handleClickOpen} className={classes.card}>
                <CardContent className={classes.set}>
                    <Typography variant="h5" >{name}</Typography>
                    <Typography variant="body2" color='textSecondary'>{muscle}</Typography>

                </CardContent>
                <CardContent >
                    <Typography variant="h5" color="primary">{setCount}</Typography>
                </CardContent>
            </Card>
            <WorkoutDialog workoutId={workoutId} userHandle={userHandle} onClose={handleClose} open={open} />
        </>
    )
}

export default Workout
