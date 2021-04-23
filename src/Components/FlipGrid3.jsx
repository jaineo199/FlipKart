import React from 'react';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  let now = new Date()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Paper style={{  height: '45px'}} >
              <Typography variant="h5" align="left" style={{marginLeft:'30px', color:'#0f0f0f'}}>
                  <b>Best Battery phones
               </b> 
              
                  <Button variant="contained" color="primary" style={{float:'right', backgroundColor:'#275de6' }}>
        View All
      </Button>
                  
                  
                  </Typography>
          
          </Paper>
        </Grid>
        
        
      </Grid>
    </div>
  );
}
