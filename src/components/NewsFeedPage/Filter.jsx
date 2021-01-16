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
    const {itemSet} = props;
    
    // const terms = ['2020', '2019', '2018'];

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-select-label" color={'primary'} >Term</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          defaultValue=""
          onChange={(e) => props.updateTerm(e.target.value)}
        >
          {[...itemSet].map( (term, index) => <MenuItem key={"term-" + index} value={term}>{term}</MenuItem> )}
          <MenuItem key={"none"} value={""}>All</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
