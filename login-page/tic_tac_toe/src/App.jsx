import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./components/GameOver"

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function derivePlayer(gameTurns){
  let playerSymbol = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
      playerSymbol = 'O';
  }
  return playerSymbol
}

function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])]
  for(const turn of gameTurns){
    const { square, player } = turn;
    const { row, col } = square

    gameBoard[row][col] = player
  }
  return gameBoard

}

function deriveWinner(gameBoard, player){
    let winner;

    for(const combinations of WINNING_COMBINATIONS){
      const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column];
      const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column];
      const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column];
      
      if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
        winner = player[firstSquareSymbol]
      }
    }
    return winner

}


function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [player, setPlayer] = useState(PLAYERS)
  const activePlayer = derivePlayer(gameTurns)
  const gameBoard = deriveGameBoard(gameTurns)

  
  const winner = deriveWinner(gameBoard, player)
  

  function handlePlayer(symbol, newName){
    setPlayer((player) => {
      return{
        ...player,
        [symbol]: newName
      }
    }
    )
  }
  
  function handleRematch(){
    setGameTurns([])
    
  }

  function handleActivePlayer(rowIndex, colIndex){
    setGameTurns((prevTurn) => {
      const prevPlayer = derivePlayer(prevTurn);

      const plays = [{ square : {row: rowIndex, col: colIndex}, player: prevPlayer} , ...prevTurn]
      return plays;
    })
  }
  const hasDrawn = gameTurns.length === 9

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">

          <Player 
            name = {PLAYERS.X}
            symbol="X" 
            isActive={activePlayer === 'X'} 
            onChangeName={handlePlayer}
            />

          <Player 
            name = {PLAYERS.O} 
            symbol="O" 
            isActive={activePlayer === 'O'}
            />

        </ol>
        {(winner || hasDrawn) && 
          <GameOver 
            winner={winner} 
            rematch={handleRematch}
          />
        }

        <GameBoard 
          onSelectSquare={handleActivePlayer} 
          board = {gameBoard}
          />

      </div>

      <Log turns = {gameTurns}/>
    </main>
  )
}

export default App
