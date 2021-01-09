import React from "react";
import FooterContent from "./FooterContent";
import FooterWrapper from "./FooterWrapper";
import { AppBar, Container, Box } from "@material-ui/core/";

export default function Footer() {
  return (
    <AppBar position="static" color="primary">
      <Box p={2}>
        <FooterContent />
      </Box>
    </AppBar>
  );
}
