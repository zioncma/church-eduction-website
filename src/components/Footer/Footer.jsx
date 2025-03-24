import React from 'react';
import {FooterContent} from './FooterContent';
import { AppBar } from 'components/atomic/AppBar';
import { Box } from 'components/atomic/Container';

export function Footer() {
  return (
    <AppBar
      position='sticky'
      color='primary'
      sx={{
        marginTop: '30px',
        bottom: '0',
        minHeight: '60px',
      }}
    >
      <Box p={2}>
        <FooterContent />
      </Box>
    </AppBar>
  );
}
