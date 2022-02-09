import React from "react";
import {
  TwitterTweetEmbed,
} from "react-twitter-embed";

export default function Tweets({ id }) {
  return (
    <div className="">
      <TwitterTweetEmbed
        tweetId={id}
      />
    </div>
  );
}
