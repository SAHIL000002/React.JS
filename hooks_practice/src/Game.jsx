import React, { useState } from "react";
function Game(props) {
  const { team } = props;
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {team}
      </button>
    </div>
  );
}

export default Game;
