import React, { useState } from "react";

import { CardItem, CardImage } from "./styled";

function Card({ row, col, image, cardClicked }) {
  const [clicked, setClicked] = useState(false);
  const isCenter = row === 2 && col === 2;

  const handleCardClicked = (row, col) => {
    setClicked(true);
    cardClicked(row, col);
  };

  return (
    <CardItem>
      <CardImage
        alt={image}
        src={`https://rawcdn.githack.com/gasandov/Bingo/bcea71c228bedc66505d454c3dff07ef5dc36a02/assets/${image}.jpeg`}
        onClick={() => handleCardClicked(row, col)}
        clicked={isCenter ? true : clicked}
      />
    </CardItem>
  );
}

export default Card;
