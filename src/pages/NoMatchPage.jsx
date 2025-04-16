import React from 'react';
import styled from 'styled-components';

// '& *': {
//   fontFamily: "'Montserrat', Helvetica, sans-serif",
//   color: "#bbb",
// },

const StyledFof = styled.div`
  width: 100%;
  height: 80vh;
  text-align: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Heading = styled.h1`
  font-size: 4rem;
  margin: 30px 15px;
`;  

export default function NoMatchPage() {
  return (
    <StyledFof >
      <Heading>Error 404</Heading>
      <p>Sorry, this page doesn't exist...</p>
    </StyledFof>
  )
}
