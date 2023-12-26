import { useState } from 'react'
import Player from './component/Player.jsx'
import Title from './component/Title.jsx'
import Board from './component/Board.jsx'
import tictac from "./assets/tictac.jpg"
function App() {
 // const [activePlayer, setActivePlayer]=useState("X");
  const [turns,setTurns]= useState([]);
  function onSelecthandler(rowIndex,columnIndex){
      setTurns((prevTurn)=>{
        let activePlayer="X";
        if(prevTurn.length>0 && prevTurn[0].player==="X"){
          activePlayer="O";
        }
        let updatedTurn=[
        {
          square:{
            row:rowIndex,
            column:columnIndex
          },
          player:activePlayer
        },...prevTurn
      ]
      return updatedTurn;
      })
      
  }
  return (
    <>
    <div style={{display:"flex",flexDirection:"column",width:"100%",height:"100%",alignItems:"center", paddingTop:"38px",backgroundImage:`url(${tictac})`}}>
      <Title/>
      <div style={{display:'flex', justifyContent:"center", flexDirection:"column", textAlign:"center",background:"#d5d367",width:"295px"}}> 
        <div>
          <Player name="player 1" symbol="X"/>
          <Player name="player 2" symbol="O"/>
        </div>
        <Board onSelect={onSelecthandler} turn={turns}/>
      </div>
    </div>
    </>
  )
}

export default App
