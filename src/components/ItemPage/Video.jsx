import React, { useState } from "react";
import { PropTypes } from "prop-types";
import ReactPlayer from "react-player/lazy"; //https://github.com/CookPete/react-player#props
import "./Video.css";
import VideoSkeleton from "./VideoSkeleton";

Video.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string,
};

// function extractId(str) {
//   //Link formats:
//   // https://www.youtube.com/watch?v=w30P5c4aQek
//   // https://youtu.be/w30P5c4aQek
//   let result = str;
//   result = result.replace("https://www.youtube.com/watch?v=");
//   result = result.replace("https://youtu.be/");
//   return result;
// }

export default function Video(props) {
  const [isReady, setIsReady] = useState(false);
  function updateIsReady() {
    setIsReady(true);
  }

  return (
    <>
    <div className={"player-wrapper"} style={{ display: isReady ? null : 'none' }}>
      <ReactPlayer
        url={props.link}
        className={"react-player"}
        width="100%"
        height="100%"
        controls
        onReady={updateIsReady}
      />
    </div>
    {isReady ? null : <VideoSkeleton />}
    </>
  );
}
