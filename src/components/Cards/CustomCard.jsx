import React, { useContext } from "react";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
} from "@material-ui/core";
import { PropTypes } from "prop-types";
import moment from "moment";
import { Link, useRouteMatch } from "react-router-dom";
import AppContext from "../../providers/AppContext";

import defaultCard from "../../assets/defaultCard.jpg"; //Image by <a href="https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=918459">Free-Photos</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=918459">Pixabay</a>
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column"
    // gridTemplateRows: "auto 1fr auto"
  },
  main: {
    flexGrow: 3,
  },
  media: {
    height: theme.spacing(20),
  },
  date: {
    position: "absolute",
    bottom: theme.spacing(1),
    right: theme.spacing(2),
    color: theme.palette.text.white,
  },
  imageContainer: {
    position: "relative",
  },
  descrip: {
    opacity: 0.8,
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  bg: PropTypes.string,
};

CustomCard.defaultProps = {
  // date: new Date(),
  title: "",
  subtitle: "",
  bg: defaultCard,
};

export default function CustomCard(props) {
  const classes = useStyles();
  const { date, title, subtitle, itemId, description, bg } = props;
  const fullTitle = title + (subtitle ? ": " + subtitle : "");
  const { url } = useRouteMatch();
  const { updateIsLoading } = useContext(AppContext);

  function handleClick() {
    updateIsLoading(true);
  }

  return (
    <>
      <Card className={classes.root}>
        <Box className={classes.imageContainer}>
          {date ? (
            <Typography component="span" className={classes.date}>
              {moment(date).format("DD/MM/YYYY")}
            </Typography>
          ) : null}
          <CardMedia
            className={classes.media}
            image={bg}
            cover={true}
            title={fullTitle}
          />
        </Box>
        <CardContent className={classes.main}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {fullTitle}
          </Typography>
          {/* <Typography
            variant="body2"
            color="textPrimary"
            component="p"
            className={classes.descrip}
          >
            {description}
          </Typography> */}
        </CardContent>
        <CardActions>
          <Button
            variant={"outlined"}
            size="small"
            color="primary"
            className={classes.button}
            component={Link}
            to={`${url}/${itemId}`}
            onClick={handleClick}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
