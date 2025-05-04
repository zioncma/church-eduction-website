import React from 'react';
import { Typography } from '../../components/atomic/Typography';

export default function PageHeaderTitle({text, ...optionals}) {
  return (
    <>
      <Typography
        variant={'h1'}
        sx={{
          fontWeight: 'bold',
        }}
      >
        {text}
      </Typography>
    </>
  );
}
