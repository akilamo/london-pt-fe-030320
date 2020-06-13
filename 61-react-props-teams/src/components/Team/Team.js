import React from "react";
import Player from "./Player/Player";

const Team = ({ players }) => {
  return (
    <div className="team">
      <ul>
        {players.map((p, index) => (
          <Player key={index} player={p} />
        ))}
      </ul>
    </div>
  );
};

export default Team;
