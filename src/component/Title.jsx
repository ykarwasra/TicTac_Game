import React from "react";
import gameIcon from "../assets/Game_icon.png"
const Title=()=>{
    return(
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <img style={{width:"100px", height:"100px"}} src={gameIcon}/>
        <h1 style={{color:"white", textShadow:"initial"}}>Tic Tac Game</h1>
      </div>
    )
}

export default Title;