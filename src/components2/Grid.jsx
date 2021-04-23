import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
    padding:'10px'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item md={1}>
          <Paper className={classes.paper}>Electronics</Paper>
        </Grid>
        <Grid item md={1}>
          <Paper className={classes.paper}>TV</Paper>
        </Grid>
        <Grid item md={1}>
          <Paper className={classes.paper}>Men</Paper>
        </Grid>
        <Grid item md={1}>
          <Paper className={classes.paper}>Women</Paper>
        </Grid>
        <Grid item md={1}>
          <Paper className={classes.paper}>Women</Paper>
        </Grid>
        <Grid item md={1}>
          <Paper className={classes.paper}>Baby</Paper>
        </Grid>
        <Grid item md={1}>
          <Paper className={classes.paper}>cloth</Paper>
        </Grid>
        <Grid item md={1}>
          <Paper className={classes.paper}>Book</Paper>
        </Grid>
        <Grid item md={1}>
          <Paper className={classes.paper}>News</Paper>
        </Grid>
        <Grid item md={1}>
          <Paper className={classes.paper}>food</Paper>
        </Grid>
        <Grid item md={1}>
          <Paper className={classes.paper}>snacks</Paper>
        </Grid>
        <Grid item md={1}>
          <Paper className={classes.paper}>Fruits</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
