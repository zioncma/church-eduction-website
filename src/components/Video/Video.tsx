import React, { useState } from "react";
import ReactPlayer from "react-player/lazy"; //https://github.com/CookPete/react-player#props
import "./Video.css";
import VideoSkeleton from "./VideoSkeleton";

/**
 * 
 */
export default function Video({ link, ...optionals }: { link: string, [x: string]: any }) {
  const [isReady, setIsReady] = useState(false);
  function updateIsReady() {
    setIsReady(true);
  }

  return (
    <div style={{ position: "relative" }}>
      <div
        className={"player-wrapper"}
        style={isReady ? {} : { opacity: 0, position: "absolute", width: "100%", top: 0, zIndex: -1 }}
      >
        <ReactPlayer
          url={link}
          className={"react-player"}
          width="100%"
          height="100%"
          controls
          onReady={updateIsReady}
        />
      </div>
      {isReady ? null : <VideoSkeleton />}
    </div>
  );
}