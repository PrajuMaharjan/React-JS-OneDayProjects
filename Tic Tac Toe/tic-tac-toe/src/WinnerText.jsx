import React from 'react'

const WinnerText = ({gameActive,winnerName}) => {
  return (
    <div className='winnerText'>
    {!gameActive &&(
      winnerName==="Noone"?
        "Its a Draw"
      :`🎉 ${winnerName} wins! 🎉`
    )}
      </div>
  );
};

export default WinnerText;
