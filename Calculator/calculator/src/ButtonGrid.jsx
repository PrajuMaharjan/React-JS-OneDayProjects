import React from 'react';
import Button from './Button';

const ButtonGrid = ({onInput,onDelete,onClear,onEquals}) => {
  return (
        <div className="buttons">
                <Button label="1" className='button-number' onClick={()=>onInput("1")} />
                <Button label="2" className='button-number' onClick={()=>onInput("2")} />                
                <Button label="3" className='button-number' onClick={()=>onInput('3')} />
                <Button label="/" className='button-operator' onClick={()=>onInput('/')} />

                <Button label="4" className='button-number' onClick={()=>onInput('4')} />
                <Button label="5" className='button-number' onClick={()=>onInput('5')} />
                <Button label="6" className='button-number' onClick={()=>onInput('6')} />
                <Button label="*" className='button-operator' onClick={()=>onInput('*')} />

                <Button label="7" className='button-number' onClick={()=>onInput('7')} />
                <Button label="8" className='button-number' onClick={()=>onInput('8')} />
                <Button label="9" className='button-number' onClick={()=>onInput('9')} />
                <Button label="-" className='button-operator' onClick={()=>onInput('-')} />

                <Button label="0" className="button-zero" onClick={()=>onInput('0')} />
                <Button label="." className='button-number' onClick={()=>onInput('.')} />
                <Button label="+" className='button-operator' onClick={()=>onInput('+')} />

                <Button label ="⌫" className='button-delete' onClick={onDelete} />
                <Button label ="CE" className='button-clear' onClick={onClear} />
                <Button label ="=" className='button-operator' onClick={onEquals} />
            </div>
  );
};

export default ButtonGrid;