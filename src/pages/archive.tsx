import { Box } from 'components/atomic/Container';
import { Podcast } from 'components/atomic/Podcast';

/**
 * 
 */
export function ArchivePage() {
  return (
    <>
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
    </>
  );
}

export default ArchivePage;
