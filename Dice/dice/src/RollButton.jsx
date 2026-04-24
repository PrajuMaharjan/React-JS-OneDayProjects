 function RollButton({onClick,isRolling}){
    return(
        <button className="roll" onClick={onClick} disabled={isRolling}>
            <h2>{isRolling ? "Rolling...":"Roll Dice"}</h2>
        </button>
    );
}

export default RollButton;