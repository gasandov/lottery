import React, { useContext, useEffect, useState } from "react";

import Card from "./Card";

import {
  isWinner,
  getRandomizedImages,
  fillLoteriaWithCardSlots
} from "./helpers";
import GameContext from "../../GameContext";

import { BoardContainer } from "./styled";

function Board({ id }) {
  const [slots, setSlots] = useState(fillLoteriaWithCardSlots());
  const [images, setImages] = useState([]);
  const { winner: winnerStore } = useContext(GameContext);
  const [, setWinner] = winnerStore;

  useEffect(() => {
    setImages(getRandomizedImages());
  }, []);

  const handleCardClicked = (row, col) => {
    const currentSlots = [...slots];
    if (!currentSlots[row][col]) {
      currentSlots[row][col] = true;
      setSlots(currentSlots);
      if (isWinner(row, col, currentSlots)) {
        console.log("we have a winner!");
        setWinner(true);
      }
    }
  };

  return (
    <BoardContainer>
      {slots.map((row, rowIndex) =>
        row.map((_, colIndedx) => (
          <Card
            key={`board-${id}-row-${rowIndex}-col-${colIndedx}`}
            row={rowIndex}
            col={colIndedx}
            image={images[rowIndex * 5 + colIndedx]}
            cardClicked={handleCardClicked}
          />
        ))
      )}
    </BoardContainer>
  );
}

export default Board;
