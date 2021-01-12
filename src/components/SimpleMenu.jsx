import React, { useState } from "react";
import { IconButton, MenuItem, Popper, Grow, Paper, ClickAwayListener, MenuList, Box } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
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
    <Box>
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
                  <MenuItem onClick={handleClose} component={Link} to={"/church-eduction-website/news"}>最新消息</MenuItem>
                  <MenuItem onClick={handleClose} component={Link} to={"/church-eduction-website/course"}>成人主日學</MenuItem>
                  <MenuItem onClick={handleClose} component={Link} to={"/church-eduction-website/growth"}>信仰成長路</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}