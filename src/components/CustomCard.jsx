import React from "react";
// import Image from "material-ui-image";
import {
  Button,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Box,
} from "@material-ui/core";
import { PropTypes } from "prop-types";
import moment from "moment";
import defaultCard from "../assets/defaultCard.jpg"; //Image by <a href="https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=918459">Free-Photos</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=918459">Pixabay</a>
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  media: {
    height: 160,
  },
  date: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(2),
    color: theme.palette.text.white,
  },
  container: {
    position: 'relative'
  },
  descrip: {
    opacity: 0.8
  },
  button: {
    marginLeft: theme.spacing(1)
  }
}));

export default function CustomCard(props) {
  function handleClick() {}
  const classes = useStyles();

  return (
    <Card>
        <Box className={classes.container}>
          <Typography component="span" className={classes.date}>
            {moment(props.date).format("DD/MM/YYYY")}
          </Typography>
          <CardMedia
            className={classes.media}
            image={props.bg ? props.bg : defaultCard}
            cover={true}
            title={props.title}
          />
        </Box>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
            className={classes.descrip}
          >
            {props.description}
          </Typography>
        </CardContent>
      <CardActions>
        <Button variant={'outlined'} size="small" color="primary" onClick={handleClick} className={classes.button}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

Card.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  bg: PropTypes.string,
};
