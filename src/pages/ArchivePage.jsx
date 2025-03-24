import { Box } from "components/atomic/Container";
import { Podcast } from 'components/features/Podcast';

// 資料庫
export function ArchivePage() {
  return (
    <Box
      mx={4}
      display='flex'
      alignItems={'center'}
      justifyContent={'center'}
      height={'88vh'}
    >
      <Podcast />
    </Box>
  );
}
