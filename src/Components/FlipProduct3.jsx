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

import sofa from './Images/sofa.webp';
import sofa2 from './Images/sofa2.webp';
import sofa3 from './Images/sofa3.webp';
import sofa4 from './Images/sofa4.webp';
import sofa5 from './Images/sofa5.webp';

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
        <img className={classes.img}  src={  sofa  }/>
        <Router>
          <Typography variant="body2" >
           Sofa for rest<br/>
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
        <img className={classes.img} style={{backgroundColor: '#7a2fc4'}} src={sofa2}/>
        <Typography variant="body2" >
        Sofa for rest<br/>
           <p style={{color: '#34cf55'}}>Extra 10% off</p>
         
           <p>For All top models</p>
          </Typography>
        </CardContent>
       
      </CardActionArea>
 
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
     
      <CardActionArea>

        <CardContent>
        <img className={classes.img} style={{backgroundColor: '#ae8ad1'}} src={sofa3}/>
        <Typography variant="body2" >
        Sofa for rest<br/>
           <p style={{color: '#34cf55'}}>Extra 10% off</p>
         
           <p>For All top models</p>
          </Typography>
        </CardContent>
       
      </CardActionArea>
    
      </Grid>
     
   
      <Grid item xs={3} md={2} lg={2}>
      
      <CardActionArea>

        <CardContent>
        <img className={classes.img} style={{backgroundColor: '#4950e3'}} src={sofa4}/>
        <Typography variant="body2" >
        Sofa for rest<br/>
           <p style={{color: '#34cf55'}}>Extra 10% off</p>
         
           <p>For All top models</p>
          </Typography>
        </CardContent>
       
      </CardActionArea>
  
      </Grid>
  
   
    

      

      <Grid item xs={3} md={2} lg={2} >
      
      <CardActionArea>

        <CardContent>
        <img className={classes.img} style={{backgroundColor: '#34ebc9'}} src={sofa3 }/>
        <Typography variant="body2" >
        Sofa for rest<br/>
           <p style={{color: '#34cf55'}}>Extra 10% off</p>
         
           <p>For All top models</p>
          </Typography>
        </CardContent>
        
      </CardActionArea>
    
      </Grid>

      <Grid item xs={3} md={2} lg={2}>
    
      <CardActionArea>

        <CardContent>
        <img className={classes.img} style={{backgroundColor: '#7a2fc4'}} src={sofa}/>
        <Typography variant="body2" >
        Sofa for rest<br/>
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