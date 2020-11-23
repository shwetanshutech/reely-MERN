import React, { useRef, useState } from "react";
import "./Reel.css";
import Reelfooter from "./Reelfooter";
import ReelSidebar from "./ReelSidebar";

function Reel({ url, channel, description, song, likes, comments, shares }) {
  const reelRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const handleReelPress = () => {
    //if video is playing ...stop it
    if (playing) {
      reelRef.current.pause();
      setPlaying(false);
    } else {
      //otherwise if not playing ....play it
      reelRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="reel">
      <video
        onClick={handleReelPress}
        className="reel_player"
        loop
        ref={reelRef}
        src={url}
      ></video>
      {/* Reel Footer */}
      <Reelfooter channel={channel} description={description} song={song} />
      <ReelSidebar likes={likes} comments={comments} shares={shares} />
      {/* ReelSiderbar */}
    </div>
  );
}

export default Reel;
