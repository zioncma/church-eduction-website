import React from 'react';
import { Box } from 'components/atomic/Container';
import { Typography } from 'components/atomic/Typography';

export function FooterContent() {
  return (
    <footer>
      <Box justifyContent={'center'}>
          <small>
        <Typography align='center' color={'textSecondary'}>
            Copyright 2021 — Zion Alliance Church. All rights reserved.
        </Typography>
          </small>
      </Box>
    </footer>
  );
}
