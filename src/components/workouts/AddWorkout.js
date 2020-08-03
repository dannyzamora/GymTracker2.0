import React, { useState, useEffect } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';


import AddCircleIcon from '@material-ui/icons/AddCircle';
import MyButton from '../../util/MyButton';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { postuserWorkout } from '../../redux/actions/dataActions'

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
    }
});


const muscles = [
    'Legs',
    'Chest',
    'Back',
    'Abs',
    'Shoulders',
    'Arms'
]

const AddWorkout = ({ classes, createdAt }) => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("")
    const [muscle, setMuscle] = useState("Back")
    const [error, setErrors] = useState({})

    const UI = useSelector(state => state.UI, shallowEqual);

    const { loading } = UI;
    useEffect(() => {
        if (UI.errors) {
            setErrors(UI.errors)
        }
        if (!UI.errors && !loading) {
            setOpen(false);
            setName("");
            setErrors({})
        }
    }, [UI])

    const dispatch = useDispatch()
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const handleMuscleChange = (event) => {
        setMuscle(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const newWorkout = {
            name,
            muscle,
            createdAt
        }
        dispatch(postuserWorkout(newWorkout))

    }
    return (
        <>
            <MyButton
                tip={"Add Workout"}
                onClick={handleOpen}
            >
                <AddCircleIcon fontSize='large' color='primary' />
            </MyButton>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="sm">
                <DialogTitle> Add A Workout</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name="name"
                            type="text"
                            label="Name"
                            placeholder="Enter Workout Name"
                            className={classes.textField}
                            value={name}
                            onChange={handleChangeName}
                            helperText={error.name}
                            error={error.name ? true : false}
                            fullWidth
                        />
                        <TextField
                            select
                            name="muscle"
                            label="Category"
                            value={muscle}
                            onChange={handleMuscleChange}
                            SelectProps={{
                                native: true,
                            }}
                            fullWidth
                            helperText="Please select category"
                        >
                            {muscles.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </TextField>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submitButton}
                            disabled={loading}
                        >
                            Submit
                {loading && (
                                <CircularProgress
                                    size={30}
                                    className={classes.progressSpinner}
                                />
                            )}
                        </Button>
                    </form>
                </DialogContent>

            </Dialog>
        </>

    )
}

export default withStyles(styles)(AddWorkout)
