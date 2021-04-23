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

import Music1 from './images/Music1.webp'
import Music2 from './images/Music2.webp'
import Music3 from './images/Music3.webp'
import Music4 from './images/Music4.webp'
import Music5 from './images/Music5.webp'
import Music6 from './images/Music6.webp'
import Music7 from './images/Music7.webp'
import Music8 from './images/Music8.webp'

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
        <img className={classes.img}  src={  Music1  }/>
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
        <img className={classes.img} style={{backgroundColor: '#7a2fc4'}} src={Music2}/>
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
        <img className={classes.img} style={{backgroundColor: '#ae8ad1'}} src={Music3}/>
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
        <img className={classes.img} style={{backgroundColor: '#4950e3'}} src={Music4}/>
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
        <img className={classes.img} style={{backgroundColor: '#34ebc9'}} src={Music5 }/>
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
        <img className={classes.img} style={{backgroundColor: '#7a2fc4'}} src={Music6}/>
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
      <img className={classes.img} style={{backgroundColor: '#7a2fc4'}} src={Music7}/>
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
      <img className={classes.img} style={{backgroundColor: '#7a2fc4'}} src={Music8}/>
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