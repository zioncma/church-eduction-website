import { Box, Typography } from '@material-ui/core';
import {Podcast} from 'components/features/Podcast';

// 資料庫
export default function ArchivePage() {
  return (
    <Box
      mx={4}
      display='flex'
      alignItems={'center'}
      justifyContent={'center'}
      height={'88vh'}
    >
      {/* <Typography variant={'h1'} component={'p'}>
        Coming Soon.
      </Typography> */}
      <Podcast />
    </Box>
  );
}
