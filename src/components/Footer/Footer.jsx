import React from "react";
import FooterContent from "./FooterContent";
import { AppBar, Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "calc(5% + 60px)",
    bottom: "0",
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="primary" className={classes.footer}>
      <Box p={2}>
        <FooterContent />
      </Box>
    </AppBar>
  );
}
