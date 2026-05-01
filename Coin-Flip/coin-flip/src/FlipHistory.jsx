import React from 'react'
const FlipHistory = ({results}) => {
  return (
    <div className='history'>
        <p id="history-text">Latest Five Flip Results : </p>
        <p id="results">
        {results.map((result,index)=>(
            <span key={index}> | {result} | </span>
        ))}
        </p>
    </div>
  );
};
export default FlipHistory;