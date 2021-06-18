import React, { useContext, useEffect, useState } from "react";

import GameContext from "../../GameContext";
import { images } from "../../utils";
import { DealerBox, CardImage } from "./styled";

const noContentImage = "https://img.icons8.com/officel/80/000000/no-image.png";

const getRandomizedImageAndIndex = (cards) => {
  const random = Math.floor(Math.random() * cards.length);
  const image = cards[random];

  return [image, random];
};

function Dealer() {
  const { winner: winnerStore, difficultyLevel } = useContext(GameContext);
  const [nextCard, setNextCard] = useState("");
  const [cards, setCards] = useState(images);
  const [winner] = winnerStore;
  const [level] = difficultyLevel;

  useEffect(() => {
    let dealCardsInterval = setInterval(() => {
      if (!winner || cards.length === 0) {
        const [image, index] = getRandomizedImageAndIndex(cards);
        const temp = cards.slice();
        temp.splice(index, 1);
        setCards(temp);
        setNextCard(image);
      }
    }, level);
    return () => clearInterval(dealCardsInterval);
  }, [winner, cards, setNextCard, level]);

  return (
    <DealerBox>
      <CardImage
        alt={nextCard}
        src={
          nextCard
            ? `https://rawcdn.githack.com/gasandov/Bingo/bcea71c228bedc66505d454c3dff07ef5dc36a02/assets/${nextCard}.jpeg`
            : noContentImage
        }
      />
    </DealerBox>
  );
}

export default Dealer;
