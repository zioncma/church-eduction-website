import React from 'react';
import { green } from '@mui/material/colors';
import { Typography } from '../../components/atomic/Typography';
import { Box } from '../../components/atomic/Container';
import AnnouncementIcon from '@mui/icons-material/Announcement';

/**
 * News feed title component
 */
export function Title({text, ...optionals}) {
  const { sx, startText, ...rest} = optionals;
  return (
    <Box mb={2}>
      <AnnouncementIcon
        style={{ color: green[300], verticalAlign: 'text-bottom' }}
      />
      <Typography variant={'h2'} display={'inline'} sx={sx}>
        {text}
      </Typography>
    </Box>
  );
}
