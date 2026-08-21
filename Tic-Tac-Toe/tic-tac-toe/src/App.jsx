import { useState } from 'react';
import './App.css';
import CurrentTurn from './CurrentTurn';
import Header from './Header';
import BoxGrid from './BoxGrid';
import WinnerText from './WinnerText';
import RestartButton from './RestartButton';

function App() {
  const [currentPlayer,setCurrentPlayer]=useState("Player 1");
  const [currentSymbol,setCurrentSymbol]=useState("X");
  const [winner,setWinner]=useState("");
  const [boardValues,setBoardValues]=useState(["", "", "", "", "", "", "", "", ""]);
  const [gameActive,setGameActive]=useState(true);

  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6],             // Diagonals
  ];

  const handleGamePlay=(box_number)=>{
    if(gameActive){
    const newBoard=[...boardValues];
    newBoard[box_number]=currentSymbol;
    setBoardValues(newBoard);
    if(!checkWinner(newBoard)){
      changeTurnAndSymbol();
    }
  }
  }

  const changeTurnAndSymbol=()=>{
    if(gameActive){
      if(currentPlayer==="Player 1"){
        setCurrentPlayer("Player 2");
        setCurrentSymbol("O");
      }
      else{
      setCurrentPlayer("Player 1");
      setCurrentSymbol("X");
    }
    }
    }

  const checkWinner=(boardValues)=>{
    for(let [a,b,c] of winConditions){
      if(boardValues[a] && boardValues[a]===boardValues[b] && boardValues[a]===boardValues[c]){
        setGameActive(false);
        setWinner(currentPlayer);
        return true;
      }
    }
    
    if(!boardValues.includes("")){
      setWinner("Noone");
      setGameActive(false);
      return true;
    }
    return false;
  }

  const handleRestart=()=>{
    console.log("Restart Button Clicked!");
    setBoardValues(["", "", "", "", "", "", "", "", ""]);
    setGameActive(true);
    setWinner("");
    setCurrentPlayer("Player 1");
    setCurrentSymbol("X");
  }
  return (
    <div className='container'>
    <Header headerText="Tic Tac Toe"/>
    <CurrentTurn playerName={currentPlayer} symbol={currentSymbol} />
    <BoxGrid onBoxClick={handleGamePlay} boardValues={boardValues} currentSymbol={currentSymbol}/>
    <WinnerText gameActive={gameActive} winnerName={winner}/>
    <RestartButton onClick={handleRestart}/>
    </div>
  );
}

export default App;
