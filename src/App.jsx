import { useEffect, useState } from "react";
import "./App.css";
import Cell from "./components/Cell";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);
  const message = "it is now " + go + "'s go";
  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [0, 1, 2],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    winningCombos.forEach((arr) => {
      let circleWins = arr.every((cell) => cells[cell] === "circle");
      let crossWins = arr.every((cell) => cells[cell] === "cross");
      if (circleWins) {
        setWinningMessage('Circle Wins!!!')
        return
      }
      if (crossWins) {
        setWinningMessage('Cross Wins!!!')
        return
      }
      
    });
  };
  useEffect(() => {
    checkScore();
  }, [cells]);

  return (
    <>
      <div className="gameboard">
        {cells.map((cell, idx) => {
          return (
            <Cell
              key={idx}
              id={idx}
              cell={cell}
              cells={cells}
              go={go}
              setGo={setGo}
              setCells={setCells}
              winningMessage={winningMessage}
            />
          );
        })}
      </div>
      <p>{winningMessage || message}</p>
    </>
  );
}

export default App;
