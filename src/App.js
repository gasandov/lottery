import { useState } from "react";

import Home from "./components/Home";
import Dealer from "./components/Dealer";
import Loteria from "./components/Loteria";

import GameContext from "./GameContext";

import { AppContainer, Button, Modal, ModalContent } from "./styled";

import "./style.css";

export default function App() {
  const [boards, setBoards] = useState([]);
  const [winner, setWinner] = useState(false);
  const [gameState, setGameState] = useState(false);
  const [difficultyLevel, setDifficultyLevel] = useState(null);

  const thereAreBoardsToPlay = boards.length > 0;
  const isGameReadyToPlay = gameState && thereAreBoardsToPlay;

  const store = {
    winner: [winner, setWinner],
    boards: [boards, setBoards],
    difficultyLevel: [difficultyLevel, setDifficultyLevel]
  };

  const handleGameStart = () => {
    setWinner(false);
    setGameState(true);
  };

  const handleBoardAdded = () => {
    const nextBoardId = boards.length + 1;
    const currentBoards = [...boards];
    currentBoards.push({ id: nextBoardId });
    setBoards(currentBoards);
  };

  const handleGameRest = () => {
    setBoards([]);
    setWinner(false);
    setGameState(false);
  };

  const handleChangeDifficulty = () => {
    setDifficultyLevel(null);
  };

  return (
    <GameContext.Provider value={store}>
      {!difficultyLevel && <Home />}
      <Modal show={winner} onClick={() => handleGameRest()}>
        <ModalContent>
          <p>Loteria!</p>
        </ModalContent>
      </Modal>
      {difficultyLevel && (
        <AppContainer>
          {isGameReadyToPlay && <Dealer />}
          {thereAreBoardsToPlay && (
            <Button onClick={handleGameStart} disabled={gameState}>
              Start Game
            </Button>
          )}
          <Button onClick={handleBoardAdded} disabled={gameState}>
            Add Board
          </Button>
          <Button onClick={handleGameRest}>Reset Game</Button>
          <Button onClick={handleChangeDifficulty} disabled={gameState}>
            Change Difficulty
          </Button>
          <Loteria />
        </AppContainer>
      )}
    </GameContext.Provider>
  );
}
