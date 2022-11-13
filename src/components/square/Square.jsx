import React, { useState } from "react";
import "./Square.css";

const Square = ({ value, onClick }) => {
  // const [isClicked, setIsClicked] = useState();

  //   const handleClick = () => {
  //     setIsClicked("X");
  //     console.log("click");
  //   };

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
