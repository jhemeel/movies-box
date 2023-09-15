import { Button } from "@mui/material";
import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="DescriptionBox">
      <div>
        <span> John Wick 3 : </span> <br />
        <span>Parabellum</span>
      </div>
      <div>
        <span className="imdb"></span>
        <span className="rotten-tomatoe"></span>
      </div>
      <div>
        <p>
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
      </div>
      <button type="submit" className="trailer-btn">Watch Later</button>
    </div>
  );
};

export default DescriptionBox;
