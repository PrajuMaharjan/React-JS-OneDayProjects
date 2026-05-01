import {useRef,useState,useEffect} from "react";
import FlipButton from "./FlipButton";
import Coin from "./Coin";
import FlipResult from "./FlipResult";
import FlipHistory from "./FlipHistory";
import './App.css';

const App = () => {
  const [rotation,setRotation]=useState(0);
  const [displayResult,setDisplayResult]=useState(null);
  const [isFlipping,setIsFlipping]=useState(false);
  const [flipHistory,setFlipHistory]=useState([]);
  const timeOutRef=useRef(null);

  useEffect(()=>{
    return()=>clearTimeout(timeOutRef.current);
  },[]);

  const handleFlip=()=>{
    if(isFlipping) return;

    const result=Math.random()<0.5?"Heads":"Tails";

    setIsFlipping(true);
    setDisplayResult(null);

    setRotation((prev)=>{
      const targetAngle=result==="Heads"?0:180;
      const currentAngle=((prev%360)+360)%360;
      const neededRotation=(targetAngle-currentAngle+360)%360;
      
      return prev+1800+neededRotation;
    });

    timeOutRef.current=setTimeout(()=>{
      setIsFlipping(false);
      setDisplayResult(result);
      setFlipHistory(prev=>[...prev,result].slice(-5));
    },3000);
  };  
  

  return (
    <div className="container">
        <Coin rotation={rotation} isFlipping={isFlipping}/>
        <FlipButton onClick={handleFlip} isFlipping={isFlipping} />
        <FlipResult result={displayResult} isFlipping={isFlipping} />
        <FlipHistory results={flipHistory}/>
    </div>
  )
}

export default App;
