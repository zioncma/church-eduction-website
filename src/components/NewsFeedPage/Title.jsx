import React from 'react';
import { green } from '@material-ui/core/colors';
import { Typography } from '../../components/atomic/Typography';
import { Box } from '../../components/atomic/Container';
import AnnouncementIcon from '@mui/icons-material/Announcement';

export function Title(props) {
  return (
    <Box mb={2}>
      <AnnouncementIcon
        style={{ color: green[300], verticalAlign: 'text-bottom' }}
      />
      <Typography variant={'h2'} display={'inline'} className={props.startText}>
        {props.text}
      </Typography>
    </Box>
  );
}
