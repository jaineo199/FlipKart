

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

import furniture from '../images/Electronics.webp';
import world from '../images/fashion.webp';
import wash from '../images/Home.webp';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
       
    
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: '#a2ebb1',
      },
      cardsize :{
         
      },
      img: {
        margin: 'auto',
        display: 'block',
        width:'300px',
        height: '300px'
      
        // backgroundColor:'#92dbe0',
        // padding: '15px',
        // borderRadius: '50%',
        
        // maxWidth: '40%',
        // maxHeight: '50%',
      },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       
    <Grid container spacing={2} >
 
      <Grid item md={4} >
    
      <CardActionArea>

        <CardContent>
        <img className={classes.img}  src={ furniture  }/>
        <Router>
         
          </Router>
        </CardContent>
        
      </CardActionArea>
    
      </Grid>
      <Grid item  md={4} >
     
      <CardActionArea>

        <CardContent>
        <img className={classes.img} src={world}/>
          
        </CardContent>
       
      </CardActionArea>
 
      </Grid>
      <Grid item md={4} >
     
      <CardActionArea>

        <CardContent>
        <img className={classes.img}  src={wash }/>
         
        </CardContent>
       
      </CardActionArea>
    
      </Grid>
     
   
      
      
   
  
      
   
    </Grid>
    {/* <BottomNav/> */}
    {/* </Container> */}
  </div>
  );
}