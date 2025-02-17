import React from 'react';
import { createTheme } from '../../styles';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

/**
 *
 */
export default function Filter(props) {
  const { itemSet, updateTerm, currentTerm } = props;
  const theme = createTheme();

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
            <MenuItem key={'term-' + index} value={term}>
              {term}
            </MenuItem>
          ))}
          <MenuItem key={'none'} defaultvalue={currentTerm}></MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
