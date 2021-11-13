import React from 'react';
import LinkItem from './LinkItem';
import { Grid } from '@material-ui/core';

export default function LinksList({ links, ...optionals }) {
  if (!links) {
    return null;
  }

  return (
    <Grid container spacing={3}>
      {links
        ? links?.map((link, index) => (
            <LinkItem
              key={'link-' + index}
              address={link?.address}
              text={link?.text}
            />
          ))
        : null}
    </Grid>
  );
}
