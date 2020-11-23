import React from "react";
import "./Reelfooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function Reelfooter({ channel, description, song }) {
  return (
    <div className="reelFooter">
      <div className="reelFooter_text">
        <h3>@ {channel}</h3>
        <p>{description}</p>
        <div className="reelFooter_ticker">
          <MusicNoteIcon clasName="reelFooter_icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="reelFooter_record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default Reelfooter;
