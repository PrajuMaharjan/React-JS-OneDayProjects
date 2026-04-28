import React from 'react'
import { useState } from 'react';
import "./App.css";
import Display from './Display';
import ButtonGrid from './ButtonGrid';

const App = () => {
    const [input,setInput]=useState("");

    const handleClick=(value)=>{
        setInput((prev)=>prev+value);
    }
    
    const handleDelete=()=>{
        setInput((prev)=>prev.slice(0,-1));
    }

    const handleClear=()=>{
        setInput("");
    }

    const handleEquals=()=>{
        try{
            setInput(eval(input).toString());
        }catch(error){
            setInput("Error");
        }
    }

  return (
    <div className="calculator-container">
        <div className='calculator'>
            <Display input={input} />
            <ButtonGrid 
                onInput={handleClick}
                onDelete={handleDelete}
                onClear={handleClear}
                onEquals={handleEquals}
            />
        </div>
    </div>
  );
};

export default App;