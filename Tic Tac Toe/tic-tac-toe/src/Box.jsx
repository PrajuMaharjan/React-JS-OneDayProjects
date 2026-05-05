import React from 'react'

const Box = ({box_number,value,onBoxClick}) => {
  return (
    <div className="box" onClick={()=>onBoxClick(box_number)} >{value}</div>
  )
}

export default Box
