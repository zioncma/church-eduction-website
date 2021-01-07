import React from 'react';
import { Typography } from '@material-ui/core';
import { PropTypes } from "prop-types";

Title.propTypes = {
  title: PropTypes.string
};

export default function Title(props) {
    return (
        <>
          <Typography variant="h1" >{props.text}</Typography>
        </>
    )
}
