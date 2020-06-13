import React, { useState } from "react";
import "./App.css";
import Team from "./components/Team/Team"

/**
 * Exercise:
 * 
 * 1. Render all players in default column. Column class - "players".
 * 1.1 Layout for player item 
 * <li>
 * 		<span>{player}</span>
		<button>Team 1</button>
		<button>Team 2</button>
	</li>
 * 2. Each player in default column should have button to move to team 1
 * and button to move to team 2
 * 3. Create component <Team /> and pass players from each team to it.
 * 4. Create <Player /> component and inside <Team /> component use it to render
 * each player.
 * 5. When I click on a button to move a player to the selected team, that player 
 * should be removed from the main column and added to the corresponding team.
 * 6. div rendered by <Team/> should have class "team"
 * 7. div rendered by <Player/> should have class "player"
 */

const App = () => {
  const [players, setPlayers] = useState([
    "Tom",
    "Sam",
    "Vasile",
    "Guy",
    "Ben",
    "Daniel",
    "Ed",
    "Alex",
    "Andrew",
    "Mat",
  ]);

  const [teamOne, setTeamOne] = useState([]);
  const [teamTwo, setTeamTwo] = useState([]);

  const removePlayer = (selectedPlayer) => {
    const filteredPlayers = players.filter((p) => p !== selectedPlayer);
    setPlayers(filteredPlayers);
  };

  const addTeamOne = (event) => {
    const playerName = event.target.value;
    setTeamOne([...teamOne, playerName]);
    removePlayer(playerName);
  };

  const addTeamTwo = (event) => {
    const playerName = event.target.value;
    setTeamTwo([...teamTwo, playerName]);
    removePlayer(playerName);
  };

  return (
    <div className="app">
      <ul className="players">
        {players.map((player, i) => (
          <li className="player" key={i}>
            <span>{player}</span>
            <button onClick={addTeamOne} value={player}>Team 1</button>
            <button onClick={addTeamTwo} value={player}>Team 2</button>
          </li>
        ))}
      </ul>
      <Team players={teamOne} />
      <Team players={teamTwo} />
    </div>
  );
};

export default App;
