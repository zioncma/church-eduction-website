import React, { useContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import {
  Box,
  Grid,
  Paper,
  Divider,
  CircularProgress,
  Container,
} from "@material-ui/core";
import Resources from "./Resources/Resources";
import Title from "./Title";
import Share from "./Share";
import Description from "./Description";
import Video from "./Video";
import { useParams, useRouteMatch } from "react-router-dom";

// import Loading from "./Loading";
import loadData from "./loadData";

// import Theme from "../Theme";
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
  },
}));

ItemPage.propTypes = {
  title: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
  description: PropTypes.string,
  video: PropTypes.string,
  files: PropTypes.array,
};

const LoadedContent = (props) => {
  const classes = useStyles();
  const { item } = props;
  const { title, subtitle, description, video, files } = item;
  const fullTitle = title + (subtitle ? ": " + subtitle : "");

  return (
    <Container>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Paper square className={classes.item}>
            <Box>
              <Title text={fullTitle} />
              <Share text={fullTitle} url={props.shareUrl} />
              <Divider classes={{ root: classes.divider }} />
              <Description text={description} />
            </Box>
            <Video link={video} title={fullTitle} />
            <Divider classes={{ root: classes.divider }} />
            <Resources files={files} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default function ItemPage(props) {
  const shareUrl = window.location.href;
  const { url, params } = useRouteMatch();
  const { id } = params; //pure item id

  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState("");

  useEffect(() => {
    loadData(url, id).then((item) => {
      //close isLoading
      setIsLoading(false);
      setItem(item);
    });
  });

  return (
    <>
      {isLoading ? <CircularProgress /> : <LoadedContent shareUrl={shareUrl} item={item} />}
    </>
  );
}
