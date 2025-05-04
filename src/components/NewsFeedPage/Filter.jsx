import React from 'react';
import { createTheme, muiTheme } from '../../styles';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

/**
 * Filter by term
 */
export default function Filter(props) {
  const { itemSet, updateTerm, currentTerm, ...rest } = props;
  const theme = muiTheme;

  if (!itemSet) {
    return null;
  }

  return (
    <div>
      <FormControl sx={{minWidth: 120, margin: theme.spacing(1)}} variant="standard">
        <InputLabel id='simple-select-label' color={'primary'}>
          Term
        </InputLabel>
        <Select
          labelId='simple-select-label'
          id='simple-select'
          defaultValue=''
          onChange={(e) => updateTerm(e.target.value)}
          value={currentTerm}
        >
          {[...itemSet].map((term, index) => (
            <MenuItem key={'term-' + index} value={term.name}>
              {term.name}
            </MenuItem>
          ))}
          <MenuItem key={'none'} defaultvalue={currentTerm}></MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
