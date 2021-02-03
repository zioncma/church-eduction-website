import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  m: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
}));

export default function MainGridContainer(props) {
  const classes = useStyles();
  return (
    <Container className={classes.m}>
      <Grid container spacing={3}>
        {props.children}
      </Grid>
    </Container>
  );
}
