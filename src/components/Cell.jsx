import React from "react";

export default function Cell({
  id,
  cell,
  go,
  setGo,
  setCells,
  cells,
  winningMessage,
}) {
  const hadleCellChange = (classname) => {
    const nextCells = cells.map((val, idx) => {
      if (idx === id) {
        return classname;
      } else {
        return val;
      }
    });
    setCells([...nextCells]);
  };
  const handleClick = (e) => {
    const taken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");
    if (!taken) {
      if (go === "circle") {
        e.target.firstChild.classList.add("circle");
        setGo("cross");
        hadleCellChange("cross");
      }
      if (go === "cross") {
        e.target.firstChild.classList.add("cross");
        setGo("circle");
        hadleCellChange("circle");
      }
    }
  };

  return (
    <div onClick={!winningMessage && handleClick} id={id} className="square">
      <div className={cell}></div>
    </div>
  );
}
