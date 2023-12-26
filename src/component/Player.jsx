import React, { useState } from "react";

const Player=({name,symbol})=>{
    const [isEditing,setisEditing]=useState(false);
    const [inputValue,setinputValue]= useState(name)
    let playerName=inputValue;
    function handleClick(){
            setisEditing(editing=>!editing);
    }
    if(isEditing){
        playerName=<input type="text" required value={inputValue} onChange={(e)=>setinputValue(e.target.value)}/>
    }
    return(
        <>
        <li style={{listStyle:"none"}}>
            <div style={{margin:"10px", display:"flex", justifyContent:"center",gap:15, fontSize:"large"}}>
                <span style={{fontWeight:"bold"}}>{playerName}</span>
                <span style={{fontWeight:"bold"}}>{symbol}</span>
                <button onClick={handleClick} style={{fontWeight:"bold", background:"#d9e52f", borderRadius:"10px", width:"65px",height:"20px",border:"none"}}>{!isEditing?"edit":"save"}</button>
            </div>
        </li>
        </>
    )

}

export default Player;