import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, Paper, Grid } from "@material-ui/core";
import moment from "moment";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import LinksList from "./LinksList";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Video from "../Video/Video";
import { Title } from "./Title";

NewsItem.propTypes = {
  title: PropTypes.string,
  descrt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  links: PropTypes.array,
};

export default function NewsItem(props) {
  const { title, content, date, signupForm, video, images } = props;
  const useStyles = makeStyles((theme) => ({
    paper: {
      background: "#fff",
      borderRadius: "2px",
      boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
      padding: theme.spacing(3),
    },
    startText: {
      paddingLeft: theme.spacing(1),
      display: "inline",
      marginBottom: theme.spacing(2),
    },
    container: {
      marginTop: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      {title ? (
        <Title text={title} startText={classes.startText} />
      ) : (
        <AnnouncementIcon
          style={{ color: green[300], verticalAlign: "text-bottom" }}
        />
      )}
      {video ? (
        <Box maxWidth={720} mx={"auto"}>
          <Video link={video} />
        </Box>
      ) : null}

      <Typography
        color={"primary"}
        className={title ? "" : classes.startText}
        gutterBottom
        key={"sentence-"}
      >
        <div style={{ whiteSpace: "pre-line" }}>{content}</div>
      </Typography>

      {!!images && images.length > 0
        ? images?.map((imgUrl, index) => (
            <img
              src={imgUrl}
              alt={`news-${title}-${index}`}
              key={`news-${title}-${index}`}
              style={{ maxWidth: "100%", objectFit: "contain" }}
            />
          ))
        : null}
      <Grid
        container
        justify="space-between"
        spacing={3}
        alignItems={"center"}
        className={classes.container}
      >
        <Grid item justify="center">
          <LinksList links={signupForm} linkText={"按此報名"} />
        </Grid>
        {/*      <Grid item>
          <Typography
            color={"secondary"}
            variant={"h6"}
            align="center"
            className={classes.container}
          >
            {moment(date, "MM/DD/YYYY").format("MM/DD/YYYY")}
          </Typography>
        </Grid> */}
      </Grid>
    </Paper>
  );
}
