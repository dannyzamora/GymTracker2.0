import React, { Fragment } from 'react';
import NoImg from '../images/no-img.png';
import PropTypes from 'prop-types';
// MUI
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  ...theme.spread,
  card: {

    marginBottom: 20,

    padding: "0 10px",
    margin: "0 10px",
    border: `1px solid ${theme.palette.primary.dark}`
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 25,
    objectFit: "cover"
  },
  cover: {
    minWidth: 200,
    objectFit: 'cover'
  },
  sets: {
    width: 60,
    height: 18,
    backgroundColor: theme.palette.primary.main,

  },
  name: {
    height: 14,
    width: 100,
    backgroundColor: 'rgba(0,0,0, 0.3)',
    marginBottom: 10
  }
});

const UserWorkoutsSkeleton = (props) => {
  const { classes } = props;

  const content = Array.from({ length: 3 }).map((item, index) => (
    <Card className={classes.card} key={index}>
      <CardContent className={classes.cardContent}>
        <div className={classes.name} />
        <div className={classes.sets} />

      </CardContent>
    </Card>
  ));

  return <Fragment>{content}</Fragment>;
};

UserWorkoutsSkeleton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserWorkoutsSkeleton
);
