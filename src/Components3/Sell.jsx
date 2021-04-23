import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
        
        <Grid item md={4} style={{marginTop: '15px'}}>
        <Card className={classes.root}>
      <CardContent>
        <Typography  align="centre" variant="h4">
         Growth
        </Typography>
        
        <Typography className={classes.pos} >
        A growth company is any company whose business generates significant positive cash flows or earnings, which increase at significantly faster rates than the overall economy.
        </Typography>
        <Typography variant="body2" component="p">
        <b style={{color: '#3279a8'}}>Learn more</b>
          
        </Typography>
      </CardContent>
    
    </Card>
         
        </Grid>
        <Grid item md={4} style={{marginTop: '15px'}}>
        <Card className={classes.root}>
      <CardContent>
      <Typography  align="centre" variant="h4">
      Low cost 
        </Typography>
        
        <Typography className={classes.pos} >
        Starting a business, they say, is not about ideas. It’s about making ideas happen. But aspiring founders often find themselves struggling – with investments and ideas – before they join the hustle.



        </Typography>
        <Typography variant="body2" component="p">
        <b style={{color: '#3279a8'}}>Learn more</b>
         
        </Typography>
      </CardContent>
    
    </Card>
         
        </Grid>
        <Grid item md={4} style={{marginTop: '15px'}}>
        <Card className={classes.root}>
      <CardContent>
      <Typography  align="centre" variant="h4">
       Ease
        </Typography>
      
        <Typography className={classes.pos} >
        Economies are ranked on their ease of doing business, from 1–190. A high ease of doing business ranking means the regulatory environment is more conducive to the starting and operation of a local firm. 
        </Typography>
        <Typography variant="body2" component="p">
        <b style={{color: '#3279a8'}}>Learn more</b>
         
        </Typography>
      </CardContent>
     
    </Card>
        </Grid>
        <Grid item md={4} style={{marginTop: '15px'}}>
        <Card className={classes.root}>
      <CardContent>
      <Typography  align="centre" variant="h4">
       Transparency
        </Typography>
        
        <Typography className={classes.pos}>
        business, transparency is demonstrated through a company culture that encourages the open sharing of information and accountability at all levels. 
        </Typography>
        <Typography variant="body2" component="p">
        <b style={{color: '#3279a8'}}>Learn more</b>
         
        </Typography>
      </CardContent>
    
    </Card>
         
        </Grid>
        <Grid item md={4} style={{marginTop: '15px'}}>
        <Card className={classes.root}>
      <CardContent>
      <Typography  align="centre" variant="h4">
        Benefit
        </Typography>
        
        <Typography className={classes.pos} >
        business, transparency is demonstrated through a company culture that encourages the open sharing of information and accountability at all levels. 
        </Typography>
        <Typography variant="body2" component="p">
        <b style={{color: '#3279a8'}}>Learn more</b>
         
        </Typography>
      </CardContent>
    
    </Card>
         
        </Grid>
        <Grid item md={4} style={{marginTop: '15px'}}>
        <Card className={classes.root}>
      <CardContent>
      <Typography  align="centre" variant="h4">
        Profit
        </Typography>
        
        <Typography className={classes.pos} >
        business, transparency is demonstrated through a company culture that encourages the open sharing of information and accountability at all levels. 
        </Typography>
        <Typography variant="body2" component="p">
        <b style={{color: '#3279a8'}}>Learn more</b>
         
        </Typography>
      </CardContent>
    
    </Card>
         
        </Grid>
        <Grid item md={12} style={{marginTop: '15px'}}>
        <Card className={classes.root}>
      <CardContent>
      <Typography  align="centre" variant="h4">
      <Button variant="contained" style={{backgroundColor:'#037ffc'}}>
  <p style={{color:'#fff'}}>How to Register?</p>
</Button>
        </Typography>
        
        
      </CardContent>
    
    </Card>
         
        </Grid>

        <Grid item md={12}>
        <Card className={classes.root}>
      <CardContent>
      <Typography  align="centre" variant="h4">
       Grow Faster with Flipkart
        </Typography>

        <Typography variant="body2" component="p">
        <b style={{color: '#3279a8'}}>Know More</b>
         
        </Typography>
        
        
      </CardContent>
    
    </Card>
         
        </Grid>
        
      </Grid>
    </div>
  );
}
