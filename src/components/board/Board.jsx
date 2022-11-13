import React, { useState } from "react";
import "./Board.css";
import Square from "../square/Square";

const Board = ({ squares, onClick }) => {
  //   const status = "Next player: X";
  //   const [isBoard, setIsBoard] = useState([
  //     ["", "", ""],
  //     ["", "", ""],
  //     ["", "", ""],
  //   ]);
  //   const [isPlayer, setIsPlayer] = useState(false);
  //   const [winner, setWinner] = useState(null);

  return (
    <div className="board">
      {squares.map((square, i) => {
        return <Square key={i} value={square} onClick={() => onClick(i)} />;
      })}
    </div>
  );
};

export default Board;
