import React from "react";
import PropTypes from "prop-types";
import Paper from '@mui/material/Paper';
import { Typography } from '../atomic/Typography';
import { Box } from '../atomic/Container';
import { Grid } from '../atomic/Grid';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import { LinksList } from "./LinksList";
import { green } from '@mui/material/colors';
import { muiTheme } from "../../styles";
import Video from "../Video/Video";
import { Title } from "./Title";
import { hasValidChar } from "../../utils";

NewsItem.propTypes = {
  title: PropTypes.string,
  descrt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  links: PropTypes.array,
};

export default function NewsItem(props) {
  // console.debug("NewsItem props", props);
  const { title, content, form_link: signupForm, video, images } = props;
  const theme = muiTheme;

  const hasFormLink = signupForm && hasValidChar(signupForm);

  return (
    <Paper sx={{
      background: "#fff",
      borderRadius: "2px",
      boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
      padding: theme.spacing(3),
      width: "100%",
    }}
    className="news-item-container"
    >
      {title ? (
        <Title text={title} sx={{
          paddingLeft: theme.spacing(1),
          display: "inline",
          marginBottom: theme.spacing(2),
          fontWeight: "bold",
        }} />
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

      {/* <Typography
        color={"primary"}
        className={title ? "" : classes.startText}
        gutterBottom
        key={"sentence-"}
      >
        <div style={{ whiteSpace: "pre-line" }}>{content}</div>
      </Typography> */}
      <div>
        <Typography
          color={"primary"}
          // className={title ? "" : classes.startText}
          gutterBottom
          key={"sentence-"}
          sx={title ? { whiteSpace: "pre-line" } : {
            paddingLeft: theme.spacing(1),
            display: "inline",
            marginBottom: theme.spacing(2),
            fontWeight: "bold",
            whiteSpace: "pre-line"
          }}
        >
          {content}
        </Typography>
      </div>

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
        // spacing={3}
        sx={{
          marginTop: theme.spacing(2),
          alignItems: "center",
          justifyContent: "space-between",
          //marginLeft: theme.spacing(1),
        }}
      >
        {hasFormLink ? <Grid sx={{ justifyContent: "center" }} >
          <LinksList links={signupForm} linkText={"按此報名"} />
        </Grid> : null}
      </Grid>
    </Paper>
  );
}
