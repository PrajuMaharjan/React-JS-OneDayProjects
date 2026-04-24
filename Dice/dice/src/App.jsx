import { useRef, useState } from "react";
import Dice from "./Dice";
import RollButton from "./RollButton";
import RollResult from "./RollResult";
import "./style.css";

function App() {
  const [diceValue,setDicevalue]=useState(null);
  const [isRolling,setIsRolling]=useState(false);
  const timeOutRef=useRef(null);

  const handleRoll=()=>{
    if (isRolling) return;
    
    const result=Math.floor(Math.random()*6)+1;
    
    setIsRolling(true);
    setDicevalue(null);

    timeOutRef.current=setTimeout(()=>{
      setDicevalue(result);
      setIsRolling(false);
    },4050);
  };
  
  return(
    <div className="container">
      <Dice value={diceValue} isRolling={isRolling} />
      <RollButton onClick={handleRoll} isRolling={isRolling} />
      <RollResult value={diceValue} isRolling={isRolling}/>
    </div>
  )
}

export default App;
