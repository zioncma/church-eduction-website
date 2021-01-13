import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  Typography,
  Toolbar,
  Box,
  Hidden,
  Collapse,
  Paper,
  Menu,
} from "@material-ui/core";

import logo from "../assets/logo.png";
import SimpleMenu from "./SimpleMenu";

import { makeStyles } from "@material-ui/core/styles";
const navTitleFont = "'Exo', sans-serif";

export default function Nav(props) {
  const useStyles = makeStyles((theme) => ({
    navTitlePadding: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(6),
    },
    navTitleFont: {
      fontFamily: navTitleFont,
      fontSize: theme.spacing(3),
    },
    image: {
      maxWidth: "100%",
    },
    singleLineContainer: {
      whiteSpace: "nowrap",
      overflowX: "auto",
      "& > *": {
        display: "inline-block",
      },
    },
    logoColor: {
      color: theme.palette.logo,
    },
  }));
  const classes = useStyles();


  return (
    <>
      <AppBar position="static">
        <Toolbar disableGutters>
          <Box className={classes.singleLineContainer} minWidth={290}>
            <Box maxWidth={38} mx={2}>
              <img
                className={classes.image}
                src={logo}
                alt="宣道會錫安堂LOGO"
              />
            </Box>
            <Typography className={classes.navTitleFont} noWrap>
              宣道會錫安堂
            </Typography>
            <Typography
              noWrap
              className={`${classes.navTitleFont} ${classes.logoColor}`}
            >
              -
            </Typography>
            <Typography noWrap>基教部</Typography>
          </Box>
          <Box style={{ flex: 1 }} />
          <Hidden xsDown>{props.children}</Hidden>
          <Hidden smUp>
            <SimpleMenu routes={props.routes} pageTitles={props.pageTitles}/>
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  );
}
