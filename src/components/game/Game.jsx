import React, { useState } from "react";
import "./Game.css";
import Board from "../board/Board";
import { calculateWinner } from "../../helpers";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];

    const squares = [...current];
    //if user clicks an occupied square or if the game has been won, we just return
    if (winner || squares[i]) return;
    //put an X or an O in the clicked square
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setXIsNext(!xIsNext);
    setStepNumber(timeInHistory.length);
  };
  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };
  const renderMoves = () => {
    return history.map((_step, move) => {
      const destination = move ? `Go to move ${move}` : `Go to start`;
      return (
        <li key={move}>
          <button
            onClick={() => {
              jumpTo(move);
            }}
          >
            {destination}
          </button>
        </li>
      );
    });
  };
  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="staus">
        <p>
          {winner ? "Winner:" + winner : "Next Player " + (xIsNext ? "X" : "O")}
          <br />
          {renderMoves()}
        </p>
      </div>
    </>
  );
};

export default Game;
