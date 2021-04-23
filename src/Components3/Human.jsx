import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HumanPic from './images/Human1.png';
import HumanPic2 from './images/Humans2.png';
import HumanPic3 from './images/Humans3.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: 'none'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  root: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    // marginBottom: 12,
    
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        
        <Grid item md={4}>
        <Card className={classes.root}>
      <CardContent>
        <Typography  align="centre"  className={classes.title} color="textSecondary" gutterBottom>
        <img src={HumanPic } style={{width:'120px', height:'140px', marginLeft:'15px'}} alt=""></img>
       
        </Typography>
        
        <Typography className={classes.pos} color="textSecondary">
          TV Seller
        </Typography>
        <Typography variant="body2" component="p">
         Meet Vijay, Cherry Enterprise
          
        </Typography>
      </CardContent>
    
    </Card>
         
        </Grid>
        <Grid item md={4}>
        <Card className={classes.root}>
      <CardContent>
        <Typography  align="centre"  className={classes.title} color="textSecondary" gutterBottom>
        <img src={HumanPic2 } style={{width:'120px', height:'140px', marginLeft:'30px'}} alt=""></img>
        </Typography>
        
        <Typography className={classes.pos} color="textSecondary">
          Car Seller
        </Typography>
        <Typography variant="body2" component="p">
        Meet Rahul, Honda Enterprise
          <br />
         
        </Typography>
      </CardContent>
    
    </Card>
         
        </Grid>
        <Grid item md={4}>
        <Card className={classes.root}>
      <CardContent>
        <Typography  align="centre" color="textSecondary" gutterBottom>
        <img src={HumanPic3 } style={{width:'120px', height:'140px', marginLeft:'30px'}} alt=""></img>
        </Typography>
        <Typography variant="h5" component="h2">
        
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Medicine Seller
        </Typography>
        <Typography variant="body2" component="p">
        Meet Kunal , Pharmaceutical Enterprise
          <br />
         
        </Typography>
      </CardContent>
     
    </Card>
        </Grid>
        
      </Grid>
    </div>
  );
}
