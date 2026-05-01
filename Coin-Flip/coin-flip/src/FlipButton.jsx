import React from "react";
const FlipButton = ({onClick,isFlipping}) => {
  return (
    <button className="btn-flip" onClick={onClick} disabled={isFlipping}>
        <h2>{isFlipping ? "Flipping...":"Flip the coin"}</h2>
    </button>
  )
}
export default FlipButton