import React from 'react'
import Box from './Box'

const BoxGrid = ({onBoxClick,boardValues}) => {
  return (
    <div className='board'>
     {boardValues.map((value,index)=>(
        <Box key={index} box_number={index} value={value} onBoxClick={onBoxClick}/>
     ))}
    </div>
  );
};

export default BoxGrid;
