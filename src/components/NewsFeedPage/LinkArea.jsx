import React from 'react';
import LinkItem from './LinkItem';
import { Grid } from "@material-ui/core";

export default function LinkArea(props) {
  return (
    <Grid container spacing={3}>
      {props.links ? props.links.map( (link, index) => <LinkItem key={"link-" + index} address={link.address} text={link.text} />) : null }
    </Grid>
  )
}
