import React from 'react';
import { Typography } from '../../components/atomic/Typography';

export default function PageHeaderTitle(props) {
  return (
    <>
      <Typography variant={'h1'} sx={{
        fontWeight: 'bold',
      }}>{props.text}</Typography>
    </>
  );
}
