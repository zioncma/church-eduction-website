import React from 'react';
import { Typography } from '../../components/atomic/Typography';

export default function Title(props) {
  return (
    <>
      <Typography variant={'h1'}>{props.text}</Typography>
    </>
  );
}
