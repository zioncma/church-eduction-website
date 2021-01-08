import React from "react";
import PropTypes from "prop-types";
import { Grid, Button } from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";

LinkItem.defaultProps = {
  text: "訪問鏈接",
};

LinkItem.propTypes = {
  text: PropTypes.string,
  address: PropTypes.string.isRequired,
};

export default function LinkItem(props) {
  const { address, text } = props;
  return (
    <Grid item>
      {/* <LinkIcon />
      <a href={address}>{text}</a> */}
      <Button
        variant="contained"
        href={address}
        size="small"
        startIcon={<LinkIcon />}
      >
        {text}
      </Button>
    </Grid>
  );
}
