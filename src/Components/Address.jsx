import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RoomIcon from '@material-ui/icons/Room';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
 
    backgroundColor:'#07a6a6'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
            
            <RoomIcon style={{marginRight:'95%'}}/>
         </Paper>
        
         
        </Grid>
       
      </Grid>
    </div>
  );
}
