import React from 'react';
import { Typography } from '../atomic/Typography';

export default function Title({ text, ...optionals }: { text: string, [x: string]: any }) {
  return (
    <>
      <Typography variant="h1" >{text}</Typography>
    </>
  )
}
