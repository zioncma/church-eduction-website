import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
//https://www.npmjs.com/package/react-share

export default function Share(props) {
  const text = props.text;
  const iconSize = 26;

  return (
    <div width="auto">
      <EmailShareButton subject={text} url={props.url}>
        <EmailIcon size={iconSize} round={true} />
      </EmailShareButton>
      <FacebookShareButton quote={text} url={props.url}>
        <FacebookIcon size={iconSize} round={true} />
      </FacebookShareButton>
      <TwitterShareButton title={text} url={props.url}>
        <TwitterIcon size={iconSize} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton title={text} url={props.url}>
        <WhatsappIcon size={iconSize} round={true} />
      </WhatsappShareButton>
    </div>
  );
}
