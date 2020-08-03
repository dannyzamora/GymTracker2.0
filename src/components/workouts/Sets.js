import React from 'react';
import Grid from '@material-ui/core/Grid';

const Sets = ({ sets }) => {
    return (
        <Grid container >
            {sets.map(set => {
                const { reps, weight } = set;
                return (
                    <>
                        <Grid item xs={6}>
                            {reps}
                        </Grid>
                        <Grid item xs={6}>
                            {weight} lbs
                        </Grid>
                    </>
                )
            })}
        </Grid>
    )
}

export default Sets
