import React from "react";
import { PropTypes } from "prop-types";
import ReactPlayer from 'react-player/lazy'; //https://github.com/CookPete/react-player#props
import './Video.css';

Video.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string
};

function extractId(str) {
  //Link formats:
  // https://www.youtube.com/watch?v=w30P5c4aQek
  // https://youtu.be/w30P5c4aQek
  let result = str;
  result = result.replace("https://www.youtube.com/watch?v=");
  result = result.replace("https://youtu.be/");
  return result;
}


export default function Video(props) {

  return (
    <div className={"player-wrapper"}>
      <ReactPlayer
        url={props.id}
        className={"react-player"}
        width='100%'
        height='100%'
        controls
      />
    </div>
  );
}