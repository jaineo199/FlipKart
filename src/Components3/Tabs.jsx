import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
       
        centered
      >
        <Tab  style={{marginRight:'400px', fontWeight:'bold', fontSize:'150%', marginTop:'15px'}} label="WHY SELL ONLINE" />
        <Tab style={{marginLeft:'70px', fontWeight:'bold',fontSize:'100%', marginTop:'15px' }} label="WHY SELL WITH FLIPKART" />
        {/* <Tab label="HOW TO REGISTER" /> */}
      </Tabs>
    </Paper>
  );
}
