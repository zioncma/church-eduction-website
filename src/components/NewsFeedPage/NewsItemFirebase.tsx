import React from "react";
import { Typography, Box, Paper, Grid } from "@material-ui/core";
import moment from "moment";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import LinksList from "./LinksList";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { Title } from "./Title";

type NewsItemT = {
  title: string,
  content: string,
  date: string,
  links: string[],
  descrt: string,
  signupForm: any,
  linkText: any,
};

export default function NewsItem({news}: {news: NewsItemT}) {
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

  // const renderMultiLinedContent = content.split('\n').map((line, index) => {
  //   return (
  //     <Typography
  //       color={'primary'}
  //       className={title ? '' : classes.startText}
  //       gutterBottom
  //       key={'sentence-' + index}
  //     >
  //       {line}
  //     </Typography>
  //   );
  // });

  return (
    <Paper className={classes.paper}>
      {news.title ? (
        <Title text={news.title} startText={classes.startText} />
      ) : (
        <AnnouncementIcon
          style={{ color: green[300], verticalAlign: "text-bottom" }}
        />
      )}
      {/* {video ? (
        <Box maxWidth={720} mx={'auto'}>
          <Video link={video} />
        </Box>
      ) : null} */}
      <Typography
        color={"primary"}
        className={news.title ? "" : classes.startText}
        gutterBottom
        key={"sentence-"}
      >
        <div style={{ whiteSpace: "pre-line" }}>{news.descrt}</div>
      </Typography>

      {/* {!!images && images.length > 0
        ? images?.map((imgUrl, index) => (
            <img
              src={imgUrl}
              alt={`news-${title}-${index}`}
              key={`news-${title}-${index}`}
              style={{ maxWidth: '100%', objectFit: 'contain' }}
            />
          ))
        : null} */}
      <Grid
        container
        justify="space-between"
        spacing={3}
        alignItems={"center"}
        className={classes.container}
      >
        <Grid item justify="center">
          <LinksList
            links={news.signupForm}
            linkText={news.linkText}
          />
        </Grid>
        <Grid item>
          <Typography
            color={"secondary"}
            variant={"h6"}
            align="center"
            className={classes.container}
          >
            {moment(news.date, "MM/DD/YYYY").format("MM/DD/YYYY")}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
