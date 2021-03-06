import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';


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
