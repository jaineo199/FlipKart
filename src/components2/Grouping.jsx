import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function GroupedSelect() {
  const classes = useStyles();

  return (
    <div style={{padding:'15px'}}>
  
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select"><b>Minimum</b></InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader> Money</ListSubheader>
          <MenuItem value={1}>1000</MenuItem>
          <MenuItem value={2}>2000</MenuItem>
          <ListSubheader>Dollar</ListSubheader>
          <MenuItem value={3}>100</MenuItem>
          <MenuItem value={4}>200</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select"><b>$2000+</b></InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Online</ListSubheader>
          <MenuItem value={1}>3000</MenuItem>
          <MenuItem value={2}>4000</MenuItem>
          <ListSubheader>Bank</ListSubheader>
          <MenuItem value={3}>6000</MenuItem>
          <MenuItem value={4}>7000</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
