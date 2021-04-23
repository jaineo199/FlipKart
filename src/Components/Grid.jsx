import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

import compt from '../images/comp.png';
import laptop from '../images/laptop.jpg';
import mobile from '../images/mobile.png';
// import shopping from './images/shopping.jpg';
import tv from '../images/tv.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Electronics from '../images/Electronics.webp';
import fashion from '../images/fashion.webp';
import Grocery from '../images/Grocery.webp';
import Home from '../images/Home.webp';


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
        backgroundColor:'#92dbe0',
        padding: '15px',
        borderRadius: '50%',
        
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
        <img className={classes.img}  src={ Electronics  }/>
        <Router>
          <Typography variant="body2" color="textSecondary" component="p">
            <Link style={{textDecoration:'none'}} to="/categ">Electronics</Link>
          </Typography>
          </Router>
        </CardContent>
        
      </CardActionArea>
    
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
     
      <CardActionArea>

        <CardContent>
        <img className={classes.img} style={{backgroundColor: '#7a2fc4'}} src={Grocery}/>
          <Typography variant="body2" color="textSecondary" component="p">
            <Link style={{textDecoration:'none'}} to="/categ">Surf Exel
                
            </Link>
         
          </Typography>
        </CardContent>
       
      </CardActionArea>
 
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
     
      <CardActionArea>

        <CardContent>
        <img className={classes.img} style={{backgroundColor: '#ae8ad1'}} src={fashion }/>
          <Typography variant="body2" color="textSecondary" component="p">
          <Link style={{textDecoration:'none'}}  to="/categ">Fashion</Link>
     
          </Typography>
        </CardContent>
       
      </CardActionArea>
    
      </Grid>
     
   
      <Grid item xs={3} md={2} lg={2}>
      
      <CardActionArea>

        <CardContent>
        <img className={classes.img} style={{backgroundColor: '#4950e3'}} src={Home}/>
          <Typography style={{textDecoration:'none'}}  variant="body2" color="textSecondary" component="p">
          <Link style={{textDecoration:'none'}}  to="/third">Home</Link>
       
          </Typography>
        </CardContent>
       
      </CardActionArea>
  
      </Grid>
  
   
    

      

      <Grid item xs={3} md={2} lg={2} >
      
      <CardActionArea>

        <CardContent>
        <img className={classes.img} style={{backgroundColor: '#34ebc9'}} src={Electronics }/>
          <Typography variant="body2" color="textSecondary" component="p">
          <Link style={{textDecoration:'none'}}  to="/third">Computer</Link>
         
          </Typography>
        </CardContent>
        
      </CardActionArea>
    
      </Grid>

      <Grid item xs={3} md={2} lg={2}>
    
      <CardActionArea>

        <CardContent>
        <img className={classes.img} style={{backgroundColor: '#7a2fc4'}} src={Home}/>
          <Typography variant="body2" color="textSecondary" component="p">
          <Link style={{textDecoration:'none'}}  to="/third">Home</Link>
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