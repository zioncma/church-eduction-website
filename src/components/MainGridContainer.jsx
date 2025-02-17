import React from "react";
import { Container } from "../components/atomic/Container";
import { Grid } from '../components/atomic/Grid';
import { makeStyles } from "../styles";

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
