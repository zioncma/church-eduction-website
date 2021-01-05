import React from "react";
import { Typography, Box } from "@material-ui/core";
import Image from "material-ui-image";
import Title from "./Title";
import Description from "./Description";
import PropTypes from "prop-types";
// import bg from "../../assets/bg.jpg";
import defaultbg from "../../assets/defaultBg.jpg";
import { makeStyles } from "@material-ui/core/styles";

export default function Intro(props) {
  const useStyles = makeStyles((theme) => ({
    intro: {
      maxHeight: "40vh",
      minHeight: "20vh",
      overflow: "hidden",
      backgroundImage: `url(${props.bg ? props.bg : defaultbg})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    text: {
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      paddingLeft: theme.spacing(3),
      marginTop: theme.spacing(5),
    },
  }));
  const classes = useStyles();

  return (
    <Box maxWidth={1} className={classes.intro}>
      <Box className={classes.text} width="36%" >
        <Title text={props.title} />
        <Description text={props.description} />
      </Box>
    </Box>
  );
}

Intro.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bg: PropTypes.string,
};
