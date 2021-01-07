import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, Paper } from '@material-ui/core';
import moment from 'moment';
import { makeStyles } from "@material-ui/core/styles";
import AnnouncementIcon from '@material-ui/icons/Announcement';
export default function NewsItem(props) {
  const news = props;
  const useStyles = makeStyles((theme) => ({
    paper: {
      background: "#fff",
      borderRadius: "2px",
      boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
      padding: theme.spacing(2)
    },
    newsTitle: {
      paddingLeft: theme.spacing(1),
    },
    icon: {
      verticalAlign: 'text-bottom',
    }
  }));
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <AnnouncementIcon className={classes.icon}/>
      {news.title ? <Typography variant={"h2"} display={'inline'} className={classes.newsTitle}>{news.title}</Typography> : null}
      <Typography color={'primary'}>{news.content} </Typography>
      <Box display="flex" justifyContent="flex-end">
        <Typography color={'secondary'}>{moment(news.date).format('DD/MM/YYYY')} </Typography>
      </Box>
    </Paper>
  );
}

NewsItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};
