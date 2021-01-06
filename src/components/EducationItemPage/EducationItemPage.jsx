import React from "react";
import {
  Typography,
  Box,
  Container,
  Avatar,
  Grid,
  Paper,
  Divider,
} from "@material-ui/core";
import Resources from "../Resources";
import Title from "./Title";
import Share from "./Share";
import Description from "./Description";
import Video from "./Video";
import { PropTypes } from "prop-types";
import Theme from "../Theme";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  item: {
    padding: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }
}));

EducationItemPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  video: PropTypes.string,
  files: PropTypes.object
};

export default function EducationItemPage(props) {
  const classes = useStyles();
  const url = window.location.href;

  return (
    <Theme>
      <Grid container xs={12} md={10} className={classes.container}>
        <Paper square className={classes.item}>
          <Box>
            <Title text={props.title} />
            <Share text={props.title} url={url} />
            <Divider classes={{root: classes.divider}}/>
            <Description text={props.description} />
          </Box>
          {/* <Grid item centered xs={12}> */}
            <Video id={props.video} title={props.title} />
          {/* </Grid> */}
          <Divider classes={{root: classes.divider}}/>
          <Resources files={props.files} />
        </Paper>
      </Grid>
    </Theme>
  );
}
