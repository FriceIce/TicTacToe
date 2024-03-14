import { useState } from 'react'
import Row from './components/Row';
import './App.css'


function App() {
  const c1 = document.getElementById('c1')
  const c2 = document.getElementById('c2')
  const c3 = document.getElementById('c3')
  const c4 = document.getElementById('c4')
  const c5 = document.getElementById('c5')
  const c6 = document.getElementById('c6')
  const c7 = document.getElementById('c7')
  const c8 = document.getElementById('c8')
  const c9 = document.getElementById('c9')
  const allCells = [c1,c2,c3,c4,c5,c6,c7,c8,c9]; 
  
  const [playerTurn, setPlayerTurn] = useState('X');
  const [winner, setWinner] = useState('')

  function handleClick(event){

    if (event.target.innerText !== "") {
      alert("click and empty box")
      return 
    }
    playerTurn === 'X' ? setPlayerTurn('O') : setPlayerTurn('X')
    
    event.target.innerText = playerTurn;
    event.target.value = playerTurn;
    console.log(event.target); 
    
    results()
  }

  function resetGame(){
    allCells.forEach(cell => {
      cell.innerText = " ";
      cell.value = "";
    })
    setPlayerTurn("X");
    setWinner('')
  }

  function results(){
    const cellPos = [
       /* Vågrätt */ 
      [c1, c2, c3], [c4, c5, c6], [c7, c8, c9], 
      /* Lodrätt */ 
      [c1, c4, c7], [c2, c5, c8], [c3, c6, c9],
      /* Diagonalt */
      [c1, c5, c9], [c7, c5, c3]
      ]; 
    
  
    for (let i = 0; i < cellPos.length; i++) {
      let oAmount = 0; 
      let xAmount = 0; 
  
      for (let j = 0; j < cellPos[i].length; j++){
        if(cellPos[i][j].value == 'O'){
          oAmount++;
  
          if(oAmount === 3){
            setWinner('O');
          } 
        } else if (cellPos[i][j].value == 'X') {
          xAmount++; 
          if(xAmount === 3){
            setWinner('X')
          } 
        }
      }
    }
  }

  return (
    <>
    <h1>Tic tac Toe</h1>
    <div className="layout" 
      onClick={(event) => handleClick(event)}>
      <Row 
        first={"1"}
        second={"2"}
        third={"3"}/>
      <Row
        first={"4"}
        second={"5"}
        third={"6"}/>
      <Row
        first={"7"}
        second={"8"}
        third={"9"}/>
    </div>
    <p id='winner' > {winner && `Winner is: ${winner}`}</p>
    {winner && <button className='resetBtn'
    onClick={resetGame}>Play again</button>}
    </>
  )
}


export default App

