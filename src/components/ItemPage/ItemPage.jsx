import React, { useContext } from "react";
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
import { useParams } from "react-router-dom";
import AppContext from "../AppContext";

import Loading from "./Loading";

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

// ItemPage.propTypes = {
//   title: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   description: PropTypes.string,
//   video: PropTypes.string,
//   files: PropTypes.object,
// };

export default function ItemPage(props) {
  const classes = useStyles();
  const shareUrl = window.location.href;
  const { id } = useParams();
  console.log('current param - id: ' + id);
  const { isLoading } = useContext(AppContext);

  const LoadedContent = () => {
    const { item } = useContext(AppContext);
    const { title, itemId, description, video, files } = item;

    return (
      <Container>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Paper square className={classes.item}>
              <Box>
                <Title text={title} />
                <Share text={title} url={shareUrl} />
                <Divider classes={{ root: classes.divider }} />
                <Description text={description} />
              </Box>
              <Video id={video} title={title} />
              <Divider classes={{ root: classes.divider }} />
              <Resources files={files} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  };

  return (
    <>
      <Loading id={id} />
      {isLoading ? <CircularProgress /> : <LoadedContent />}
    </>
  );
}
