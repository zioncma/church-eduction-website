import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footerLink: {
    "&:visited": {
      color: "blueviolet",
    },
  },
});

export default function FooterContent() {
  const classes = useStyles();
  return (
      <Box className={classes.footer} justifyContent={"center"}>
        <Typography align="center" color={'textSecondary'}>
          Copyright 2021 — Zion Alliance Church. All rights reserved.
        </Typography>
      </Box>
  );
}
