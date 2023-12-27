import React from 'react'

export const Gameover = ({winner}) => {
  return (
    <div>
        <h2>Game Over !</h2>
        {winner!==null?
        <div style={{fontWeight:"bold", marginTop:"15px", marginBottom:"15px"}}>{winner}</div>:
        <div style={{fontWeight:"bold", marginTop:"15px", marginBottom:"15px"}}>It's a draw</div>}
        <button style={{fontWeight:"bold", background:"#d9e52f", borderRadius:"10px", width:"75px",height:"30px",border:"none"}}>Rematch</button>
    </div>
  )
}

