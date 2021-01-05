import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function Filter(props) {
    const classes = useStyles();
    
    const terms = ['2020', '2019', '2018'];

    // const handleChange = (event) => {
    //   updateTerm(event.target.value);
    // };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-select-label">Term</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={""}
        //   onChange={handleChange}
        >
          <MenuItem key={terms[0]} value={terms[0]}>{terms[0]}</MenuItem>
          <MenuItem key={terms[1]} value={terms[1]}>{terms[1]}</MenuItem>
          <MenuItem key={terms[2]} value={terms[2]}>{terms[2]}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
