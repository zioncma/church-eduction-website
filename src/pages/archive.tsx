import { Box } from 'components/atomic/Container';
import { Podcast } from 'components/atomic/Podcast';
import { CommonTemplate } from '../components/template/CommonTemplate';

/**
 * 
 */
export function ArchivePage() {
  return (
    <CommonTemplate>
      <Box
        mx={4}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '88vh',
        }}
      >
        <Podcast />
      </Box>
    </CommonTemplate>
  );
}

export default ArchivePage;
