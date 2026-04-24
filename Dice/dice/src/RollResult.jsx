function RollResult({value,isRolling}){
    if (isRolling) return <p className="result">Rolling...</p>;
    if (!value) return <p className="result">Roll the dice!</p>;
    return <p className="result">Latest Roll : {value} </p>
}

export default RollResult;