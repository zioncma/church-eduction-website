import React from "react";
import Footer from "../Footer/Footer";
import { Typography, Box, Container, Avatar, Grid } from "@material-ui/core";
import Resources from '../Resources/Resources';
import Title from './Title';

export default function EducationItemPage() {
  return (
    <div>
      <Box>
        <Title />
        <Share />
        <Description />
        <Video />
        <Resources />
      </Box>
      
    </div>
  );
}
