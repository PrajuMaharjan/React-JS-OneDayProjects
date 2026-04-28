import React from 'react'

const Display = ({input}) => {
  return (
    <div className='display'>
        {input || "0"}
    </div>
  );
};

export default Display;
