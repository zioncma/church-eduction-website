import React from 'react';
import { Box } from "components/atomic/Container";
import { Typography } from 'components/atomic/Typography';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';


export default function VideoSkeleton(props) {
    return (
      <div>
        <Box display="flex" alignItems="center">
          <Box margin={1}>
              <Skeleton variant="circle">
                <Avatar />
              </Skeleton>
          </Box>
          <Box width="100%">
              <Skeleton width="100%">
                <Typography>.</Typography>
              </Skeleton>
          </Box>
        </Box>
          <Skeleton variant="rect" width="100%">
            <div style={{ paddingTop: '57%' }} />
          </Skeleton>
      </div>
    )
}
