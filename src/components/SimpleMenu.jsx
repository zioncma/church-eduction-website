import React, { useState } from "react";
import { Box } from "../components/atomic/Container";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Popper from '@mui/material/Popper';
import Grow from "@mui/material/Grow";
import Paper from '@mui/material/Paper';
import { ClickAwayListener } from '@mui/base';
import { Link } from "react-router-dom";

/**
 * 
 */
export function SimpleMenu(props) {
  // const [anchorEl, setAnchorEl] = useState(null);
  const {routes, pageTitles} = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const anchorRef = React.useRef(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setIsMenuOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setIsMenuOpen(false);
    }
  }

  return (
    <Box className={"simple-menu"} >
      <IconButton
        edge="start"
        className={""}
        color="inherit"
        aria-label="menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        ref={anchorRef}
        aria-controls={isMenuOpen ? "menu-list-grow" : undefined}
        aria-haspopup="true"
      >
        <MenuIcon />
      </IconButton>

      <Popper
        open={isMenuOpen}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        placement={'top-end'}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={isMenuOpen}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {routes.map( (route, index) => (<MenuItem onClick={handleClose} component={Link} to={route} key={"menu-item-" + index}>{pageTitles[index]}</MenuItem>) )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}