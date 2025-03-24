import React from "react";
import LinkItem from "./LinkItem";
import Grid from '@mui/material/Grid2';

/**
 * 
 */
export function LinksList({ links, linkText, ...optionals }) {
  if (!links) {
    return null;
  }

  return (
    <Grid container spacing={3} className={"links-list-grid-container"}>
      {/* {links
        ? links?.map((link, index) => (
            <LinkItem
              key={'link-' + index}
              address={link?.address}
              text={link?.text}
            />
          ))
        : null} */}
      {links ? (
        <LinkItem key={"link-"} address={links} text={linkText} />
      ) : null}
    </Grid>
  );
}
