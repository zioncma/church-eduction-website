import React from 'react';
// import img from '../assets/404.jpg';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  fof: {
    width: "100%",
    height: "80vh",
    // backgroundImage: `url(${img})`,
    textAlign: "center",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  '& *': {
    fontFamily: "'Montserrat', Helvetica, sans-serif",
    color: "#bbb",
  },
  h: {
    margin: "30px 15px",
    fontSize: "4rem"
  }
}));


export default function NoMatchPage() {
  const classes = useStyles();
  return (
    <div className={classes.fof}>
      <h1 className={classes.h}>Error 404</h1>
      <p>Sorry, this page doesn't exist...</p>
    </div>
  )
}
