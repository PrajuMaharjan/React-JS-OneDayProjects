const faces={
    1:"rotateX(0deg) rotateY(0deg)",
    6:"rotateX(180deg) rotateY(0deg)",
    2:"rotateX(-90deg) rotateY(0deg)",
    5:"rotateX(90deg) rotateY(0deg)",
    3:"rotateX(0deg) rotateY(90deg)",
    4:"rotateX(0deg) rotateY(-90deg)",
};

function Dice({value,isRolling}){
    return(
        <div className="dice" 
             style={{
                    animation:isRolling?"rolling 4s":"none",
                    transform:!isRolling && value ? faces[value]:undefined,}}>
            
            <div className="face one"/>
            <div className="face six"/>
            <div className="face two"/>
            <div className="face five"/>
            <div className="face three"/>
            <div className="face four"/>
        </div>
    );
}

export default Dice;