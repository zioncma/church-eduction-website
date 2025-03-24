import React from 'react';
import { Container } from '../components/atomic/Container';
import { Grid2 } from '../components/atomic/Grid';
import { muiTheme } from '../styles';

export default function MainGridContainer(props) {
  const theme = muiTheme;
  return (
    <Container
      sx={{
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        maxWidth: 1280,
      }}
      className='main-grid-container'
      maxWidth={false}
    >
      <Grid2 container spacing={3}>
        {props.children}
      </Grid2>
    </Container>
  );
}
