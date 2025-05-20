import { Box } from 'components/atomic/Container';
import { Podcast } from 'components/atomic/Podcast';
import { CommonTemplate } from '../components/template/CommonTemplate';

// 資料庫
export function ArchivePage() {
  return (
    <CommonTemplate>
      <Box
        mx={4}
        display='flex'
        alignItems={'center'}
        justifyContent={'center'}
        height={'88vh'}
      >
        <Podcast />
      </Box>
    </CommonTemplate>
  );
}

export default ArchivePage;
