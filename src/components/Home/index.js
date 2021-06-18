import React, { useContext, useState } from "react";

import { HomeContainer, Title } from "./styled";

import GameContext from "../../GameContext";
import { levels } from "../../constants";

function Home() {
  const { INSANE, NORMAL, OLD_MAN } = levels;
  const { difficultyLevel } = useContext(GameContext);
  const [, setLevel] = difficultyLevel;

  const handleOnClickedRadio = (e) => {
    setLevel(e.target.value);
  };

  return (
    <HomeContainer>
      <Title>Loteria, the game</Title>
      <fieldset>
        <label>
          <strong>Difficulty Level</strong>
        </label>
        <input
          type="radio"
          value={INSANE}
          name="level"
          onClick={handleOnClickedRadio}
        />{" "}
        Insane
        <input
          type="radio"
          value={NORMAL}
          name="level"
          onClick={handleOnClickedRadio}
        />{" "}
        Normal
        <input
          type="radio"
          value={OLD_MAN}
          name="level"
          onClick={handleOnClickedRadio}
        />{" "}
        Old Man
      </fieldset>
    </HomeContainer>
  );
}

export default Home;
