import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Menu from './Menu';
import Price from './Price';
import Grouping from './Grouping';
import CheckBox from './CustomerRating';
import Brand from './Brand';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

import Music1 from '../images/Electronics.webp'
import Music2 from '../images/Electronics.webp'
import Music3 from '../images/Electronics.webp'
import Music4 from '../images/Electronics.webp'
import Music5 from '../images/Electronics.webp'
import Music6 from '../images/Electronics.webp'
import Music7 from '../images/Electronics.webp'
import Music8 from '../images/Electronics.webp'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
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

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item md={3}>
          <Paper className={classes.paper}>
          <Paper className={classes.paper} style={{padding:'10px'}}>
              <b>Filters</b>
              </Paper>
              
              <Paper className={classes.paper}>
             <Menu/>
              </Paper>
           
              <Paper className={classes.paper}>
             <Price/>
              </Paper>
              <Paper className={classes.paper}>
             <Grouping/>
              </Paper>
              <Paper className={classes.paper}>
             <CheckBox/>
              </Paper>
              <Paper className={classes.paper}>
             <Brand/>
              </Paper>
          </Paper>
        </Grid>
        <Grid item md={9}>
          <Paper className={classes.paper}>
          <Paper className={classes.paper}>
          Guitar, ukelele, flute, or saxophone! No matter what your favourite instrument is, you will find them all on your favourite shopping app. You can shop for different instruments from popular brands such as Flipkart SmartBuy, Yamaha, Casio, 12 Stars, Alice, Boya, and Kadence. There are plenty of advantages associated with learning a new instrument. The first is the fact that you have a new skill to flaunt. So, the next time you want to impress your friends, you can show off your new skill. The second advantage is that musical instruments help in improving your concentration. Since you will be focussed on a particular thing, your learning curve will help you enhance your skills, which will be beneficial to your daily life as well. The third advantage lies in the fact that music helps you stay calm. There are several studies that show the influence of music on mood swings. Already enticed to buy one? Go ahead, scroll through the different instruments and pick one that you are most interested in. You will have your new music companion delivered to your doorstep without any hassle.
              
              </Paper>

              <Paper >

                  <Typography align="left" variant="h6">
                      Musical instruments (showing 1-40 products)
                  </Typography>

                  
             
              </Paper>
              <Paper> 
              <img src={Music1}/>
              <img src={Music2}/>
              <img src={Music3}/>
              <img src={Music4}/>
              <img src={Music5}/>
              <img src={Music6}/>
              <img src={Music7}/>
              <img src={Music8}/>
              

              </Paper>
              <Paper> 
              <img src={Music1}/>
              <img src={Music2}/>
              <img src={Music3}/>
              <img src={Music4}/>
              <img src={Music5}/>
              <img src={Music6}/>
              <img src={Music7}/>
              <img src={Music8}/>
              

              </Paper>
              <Paper> 
              <img src={Music1}/>
              <img src={Music2}/>
              <img src={Music3}/>
              <img src={Music4}/>
              <img src={Music5}/>
              <img src={Music6}/>
              <img src={Music7}/>
              <img src={Music8}/>
              

              </Paper>
              <Paper> 
              <img src={Music1}/>
              <img src={Music2}/>
              <img src={Music3}/>
              <img src={Music4}/>
              <img src={Music5}/>
              <img src={Music6}/>
              <img src={Music7}/>
              <img src={Music8}/>
              

              </Paper>
              <Paper> 
              <img src={Music1}/>
              <img src={Music2}/>
              <img src={Music3}/>
              <img src={Music4}/>
              <img src={Music5}/>
              <img src={Music6}/>
              <img src={Music7}/>
              <img src={Music8}/>
              

              </Paper>
             
            
              
          </Paper>
        </Grid>
     
      </Grid>
    </div>
  );
}
