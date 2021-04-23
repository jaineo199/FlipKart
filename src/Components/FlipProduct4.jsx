import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Mobile1 from './Images/Mobile1.webp';
import Mobile2 from './Images/Mobile2.webp';
import Mobile3 from './Images/Mobile3.webp';
import Mobile4 from './Images/Mobile4.webp';
import Mobile5 from './Images/Mobile5.webp';
import Mobile6 from './Images/Mobile6.webp';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
       
    
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      cardsize :{
         
      },
      img: {
        margin: 'auto',
        // display: 'block',
        // maxWidth: '50%',
        // maxHeight: '50%',
        // backgroundColor:'#92dbe0',
        // padding: '15px',
        // borderRadius: '50%',
        
        maxWidth: '80%',
        maxHeight: '50%',
      },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
         {/* <Container maxWidth="xl" component="div" style={{ backgroundColor: '#cfe8fc', height: '67vh' }}> */}
       
    <Grid container spacing={0} >
 
      <Grid item xs={3} md={2} lg={2} >
    
      <CardActionArea>

        <CardContent>
        <img className={classes.img}  src={  Mobile1 }/>
        <Router>
          <Typography variant="body2" >
          Oppo Phone <br/>
           <p style={{color: '#34cf55'}}>Extra 10% off</p>
         
           <p>For All top models</p>
          </Typography>
          </Router>
        </CardContent>
        
      </CardActionArea>
    
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
     
      <CardActionArea>

        <CardContent>
        <img className={classes.img} style={{backgroundColor: '#7a2fc4'}} src={Mobile2}/>
        <Typography variant="body2" >
           Vivo Phone <br/>
           <p style={{color: '#34cf55'}}>Extra 10% off</p>
         
           <p>For All top models</p>
          </Typography>
        </CardContent>
       
      </CardActionArea>
 
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
     
      <CardActionArea>

        <CardContent>
        <img className={classes.img} style={{backgroundColor: '#ae8ad1'}} src={Mobile3}/>
        <Typography variant="body2" >
            Vivo Phone  <br/>
           <p style={{color: '#34cf55'}}>Extra 10% off</p>
         
           <p>For All top models</p>
          </Typography>
        </CardContent>
       
      </CardActionArea>
    
      </Grid>
     
   
      <Grid item xs={3} md={2} lg={2}>
      
      <CardActionArea>

        <CardContent>
        <img className={classes.img} style={{backgroundColor: '#4950e3'}} src={Mobile4}/>
        <Typography variant="body2" >
        Oppo Phone <br/>
           <p style={{color: '#34cf55'}}>Extra 10% off</p>
         
           <p>For All top models</p>
          </Typography>
        </CardContent>
       
      </CardActionArea>
  
      </Grid>
  
   
    

      

      <Grid item xs={3} md={2} lg={2} >
      
      <CardActionArea>

        <CardContent>
        <img className={classes.img} style={{backgroundColor: '#34ebc9'}} src={Mobile5 }/>
        <Typography variant="body2" >
        Vivo Phone  <br/>
           <p style={{color: '#34cf55'}}>Extra 10% off</p>
         
           <p>For All top models</p>
          </Typography>
        </CardContent>
        
      </CardActionArea>
    
      </Grid>

      <Grid item xs={3} md={2} lg={2}>
    
      <CardActionArea>

        <CardContent>
        <img className={classes.img} style={{backgroundColor: '#7a2fc4'}} src={Mobile6}/>
        <Typography variant="body2" >
           oppo phone<br/>
           <p style={{color: '#34cf55'}}>Extra 10% off</p>
         
           <p>For All top models</p>
          </Typography>
        </CardContent>
       
      </CardActionArea>

      </Grid>
   
      
   
  
      
   
    </Grid>
    {/* <BottomNav/> */}
    {/* </Container> */}
  </div>
  );
}