import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import DescriptionIcon from "@material-ui/icons/Description";
import { PropTypes } from "prop-types";
import blue from "@material-ui/core/colors/blue";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    lineHeight: "1rem",
    // textAlign: "center",
    "& > *": {
      display: "inline-block",
      verticalAlign: "middle",
      lineHeight: "1rem",
    },
  },
}));

File.propTypes = {
  title: PropTypes.string.isRequired,
  doc: PropTypes.string,
};

export default function File(props) {
  const classes = useStyles();

  return (
    <Box width={130} className={classes.container}>
      <DescriptionIcon style={{ color: blue[500] }} fontSize="small" />
      <Typography component="span">{props.title}</Typography>
      <Button variant="contained" href={props.doc} size="small" endIcon={<CloudDownloadIcon />}>
        Download
      </Button>
    </Box>
  );
}
