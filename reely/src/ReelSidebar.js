import React, { useState } from "react";
import "./ReelSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function ReelSidebar({ likes, comments, shares }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="reelSidebar">
      <div className="reelSidebar_button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="reelSidebar_button">
        <MessageIcon fontSize="large" />
        <p>{comments}</p>
      </div>
      <div className="reelSidebar_button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default ReelSidebar;
