function Coin({rotation}){
    
    return(
        <div className="coin" 
            style={{
                     transform:`rotateX(${rotation}deg)`,
                     transition:"transform 3s ease-in-out"
                  }}>
            
            <div className="heads"  />
            <div className="tails"  />

        </div>
    )
}

export default Coin;