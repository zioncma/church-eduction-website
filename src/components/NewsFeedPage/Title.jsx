import React from 'react';
import { Typography, Box } from '@material-ui/core';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import { green } from '@material-ui/core/colors';

export function Title(props) {
  return (
    <Box mb={2}>
      <AnnouncementIcon
        style={{ color: green[300], verticalAlign: 'text-bottom' }} />
      <Typography variant={'h2'} display={'inline'} className={props.startText}>
        {props.text}
      </Typography>
    </Box>
  );
}
