import { useState } from 'react'
import Player from './component/Player.jsx'
import Title from './component/Title.jsx'
import Board from './component/Board.jsx'
import tictac from "./assets/tictac.jpg"
import { Gameover } from './component/Gameover.jsx'

const intialBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null],
];
const winningCombinations=[
  [
    {row:0,column:0},
    {row:0,column:1},
    {row:0,column:2}
  ],
  [
    {row:0,column:0},
    {row:1,column:0},
    {row:2,column:0}
  ],
  [
    {row:0,column:0},
    {row:1,column:1},
    {row:2,column:2}
  ],
  [
    {row:2,column:2},
    {row:1,column:1},
    {row:2,column:0}
  ],
  [
    {row:1,column:0},
    {row:1,column:1},
    {row:1,column:2}
  ],[
    {row:2,column:0},
    {row:2,column:1},
    {row:2,column:2}
  ],
  [
    {row:0,column:1},
    {row:1,column:1},
    {row:2,column:1}
  ],
  [
    {row:0,column:2},
    {row:1,column:2},
    {row:2,column:2}
  ]

]
function App() {
 // const [activePlayer, setActivePlayer]=useState("X");
 let board=intialBoard;
 let winner=null;
 const [turns,setTurns]= useState([]);

    
    for(let turn of turns){
        let {square,player}=turn;
        let {row,column}=square;

        board[row][column]=player;
    }

    for(let combination of winningCombinations){
      let firstLetter=board[combination[0].row][combination[0].column];
      let secondLetter=board[combination[1].row][combination[1].column];
      let thirdLetter=board[combination[2].row][combination[2].column];

      if(firstLetter && firstLetter===secondLetter && firstLetter===thirdLetter){
          winner=firstLetter;
      }
    }

  const draw=turns.length===9?true:false;

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
      <div style={{display:'flex', justifyContent:"center", flexDirection:"column", textAlign:"center",background:"#d5d367",width:"295px",height:"247px"}}> 
        <div>
          <Player name="player 1" symbol="X"/>
          <Player name="player 2" symbol="O"/>
        </div>
        {(winner!==null ||draw===true) ? <Gameover winner={winner}/>:
        <Board onSelect={onSelecthandler} board={board} winner={winner}/>}
      </div>
    </div>
    </>
  )
}

export default App
