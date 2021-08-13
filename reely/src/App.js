import axios from "./axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Reel from "./Reel";

function App() {
  const [reels, setReels] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setReels(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  return (
    //BEM NAMING CONVENTION
    <div className="app">
      <div className="app_reels">
        {reels.map(({ url, channel, song, likes, comments, shares }) => (
          <Reel
            url={url}
            channel={channel}
            song={song}
            likes={likes}
            comments={comments}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
