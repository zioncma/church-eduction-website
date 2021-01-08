import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, Paper, Grid } from "@material-ui/core";
import moment from "moment";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import LinkArea from "./LinkArea";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

NewsItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  links: PropTypes.array,
};

export default function NewsItem(props) {
  const { title, content, date, links } = props;
  const useStyles = makeStyles((theme) => ({
    paper: {
      background: "#fff",
      borderRadius: "2px",
      boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
      padding: theme.spacing(2),
    },
    startText: {
      paddingLeft: theme.spacing(1),
      display: "inline",
    },
    icon: {
      verticalAlign: "text-bottom",
    },
    container: {
      marginTop: theme.spacing(1)
    }
  }));
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <AnnouncementIcon className={classes.icon} style={{ color: green[300] }}/>
      {title ? (
        <Typography
          variant={"h2"}
          display={"inline"}
          className={classes.startText}
        >
          {title}
        </Typography>
      ) : null}
      <Typography color={"primary"} className={title ? "" : classes.startText}>
        {content}
      </Typography>
      <Grid container justify="flex-end" spacing={3} alignItems={'center'} className={classes.container}>
        <Grid item>
          <LinkArea links={links} />
        </Grid>
        <Grid item >
          <Typography color={"secondary"}>
            {moment(date).format("DD/MM/YYYY")}
          </Typography>
        </Grid>
      </Grid>

      {/* <Box display="flex" justifyContent="flex-end" mt={2}>
        <Typography color={"secondary"}>
          {moment(date).format("DD/MM/YYYY")}{" "}
        </Typography>
      </Box>
      <Box display="flex" mt={2}>
        <LinkArea links={links} />
      </Box> */}
    </Paper>
  );
}
