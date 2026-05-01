import React from 'react'

const FlipResult = ({isFlipping,result}) => {
      if (isFlipping) return <p className='result'>Flipping...</p>;
      if (!result) return <p className="result">Flip the coin! </p>
      return <p className="result">You flipped : {result}</p>
};
export default FlipResult;