import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
  
      <Typography aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} variant="h6" style={{marginLeft:'700px'}}>
          More
      </Typography>
      

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Notification preferred</MenuItem>
        <MenuItem onClick={handleClose}>Sell on flipkart</MenuItem>
        <MenuItem onClick={handleClose}>24/7 services</MenuItem>
        <MenuItem onClick={handleClose}>Advertise</MenuItem>
        <MenuItem onClick={handleClose}>Download our App</MenuItem>
      </Menu>
    </div>
  );
}
