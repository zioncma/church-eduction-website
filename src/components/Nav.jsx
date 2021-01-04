import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { IconButton, Typography, Toolbar, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/logo.png'

import { makeStyles } from '@material-ui/core/styles';

const navTitleFont = "'Exo', sans-serif";

export default function Nav(props) {
    const useStyles = makeStyles((theme) => ({
        navTitlePadding: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(6)
        },
        navTitleFont: {
            fontFamily: navTitleFont,
            fontSize: theme.spacing(3)
        }
    }));

    const allTabs = props.routes;
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar disableGutters>
                    <img src={logo} alt="宣道會錫安堂LOGO"/>
                    <Typography className={`${classes.navTitlePadding} ${classes.navTitleFont}`} noWrap>
                        宣道會錫安堂
                    </Typography>
                    <Typography noWrap>
                        /
                    </Typography>
                    <Typography noWrap>
                        主日學
                    </Typography>
                    {props.children}
                    <Box style={{ flex: 1 }}/>
                    <IconButton edge="start" className={""} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}