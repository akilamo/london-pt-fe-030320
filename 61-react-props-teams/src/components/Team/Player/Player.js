import React from "react";

const Player = ({ player }) => {
  return (
    <li className="player" key={player}>
      {player}
    </li>
  );
};

export default Player;
