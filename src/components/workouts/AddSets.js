import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { useDispatch } from 'react-redux';
import { submitSet } from '../../redux/actions/dataActions'

const styles = (theme) => ({
    ...theme.spread,
    submitButton: {
        position: 'relative',
        float: 'right',
        marginTop: 10
    },
    progressSpinner: {
        position: 'absolute'
    },
    closeButton: {
        position: 'absolute',
        left: '91%',
        top: '6%'
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),

        },
    }
});

const AddSets = ({ classes, workoutId }) => {

    const [weight, setWeight] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState({})

    const dispatch = useDispatch();
    const reg = /^\+?[0-9]\d*$/

    const handleRepsChange = (e) => {

        if (reg.test(e.target.value))
            return setReps(parseInt(e.target.value));
        else
            return setReps('')

    }

    const handleWeightChange = (e) => {
        if (reg.test(e.target.value))
            return setWeight(parseInt(e.target.value));
        else
            return setWeight('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitSet(workoutId, { reps, weight }))
        setReps('');
        setWeight('');
    }
    return (

        <Grid item sm={12}>
            <form className={classes.root} onSubmit={handleSubmit}>
                <TextField
                    name="reps"
                    type="text"
                    label="Reps"
                    placeholder="How Many Reps"
                    className={classes.textField}
                    value={reps}
                    onChange={handleRepsChange}
                    helperText={error.reps}
                    error={error.reps ? true : false}
                />
                <TextField
                    name="weight"
                    type="text"
                    label="Weight"
                    placeholder="DYEL?"
                    className={classes.textField}
                    value={weight}
                    onChange={handleWeightChange}
                    helperText={error.weight}
                    error={error.weight ? true : false}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submitButton}
                >
                    Submit
                </Button>
            </form>
        </Grid>

    )
}

export default withStyles(styles)(AddSets)
