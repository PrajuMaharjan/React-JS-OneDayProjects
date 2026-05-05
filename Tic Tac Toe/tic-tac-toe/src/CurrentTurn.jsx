import React from 'react'

const CurrentTurn = ({playerName,symbol}) => {
  return (
    <div className='turnIndicator'>
        {playerName}'s Turn ({symbol})
    </div>
  )
}

export default CurrentTurn
