import React, { Fragment, useContext } from "react";

import Board from "./Board";

import GameContext from "../../GameContext";

function Loteria() {
  const { boards: gameBoards } = useContext(GameContext);
  const [boards] = gameBoards;

  return (
    <>
      {boards.map(({ id }) => (
        <Fragment key={`board-${id}`}>
          <h3>Board {id}</h3>
          <Board key={`board-${id}`} id={id} />
        </Fragment>
      ))}
    </>
  );
}

export default Loteria;
