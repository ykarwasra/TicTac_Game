import React, { useState } from "react";

function Board({onSelect,board}){
    return (
        <ul style={{listStyle:"none", marginTop:"20px", padding:"0px"}}>
            {board.map((row,rowIndex)=>{
                return (
                <li style={{margin:"10px"}} key={rowIndex}>
                        <ol style={{listStyle:"none", margin:"0px", padding:"0px"}}>
                            {row.map((value,columnIndex)=>{
                                return (<li style={{display:"inline",margin:"10px"}} key={columnIndex}>
                                    <button style={{height:"30px", width:"30px",fontSize:"small",border:"none",background:"rgb(219 216 23)", fontWeight:"bold"}} onClick={()=>onSelect(rowIndex,columnIndex)}>{value}</button>
                                </li>
                            )})}
                        </ol>
                </li>
            )})}
        </ul>

    )
}

export default Board