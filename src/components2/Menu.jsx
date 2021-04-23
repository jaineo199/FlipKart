import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{padding:'15px'}}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <b>  Musical instruments</b>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>String instruments</MenuItem>
        <MenuItem onClick={handleClose}>wind instruments</MenuItem>
        <MenuItem onClick={handleClose}>String instruments</MenuItem>
        <MenuItem onClick={handleClose}>wind instruments</MenuItem>
        <MenuItem onClick={handleClose}>String instruments</MenuItem>
        <MenuItem onClick={handleClose}>wind instruments</MenuItem>
        
      </Menu>
    </div>
  );
}
