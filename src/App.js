import React from "react";
import useGameLogic from "./useGameLogic";

function App() {
  const {text,gameOn,timeRemaining,wordCount,textBoxRef,startGame,handleChange} = useGameLogic()
  
  return (  
    <div className="App">
      <h1>Speed typing game</h1>
      <textarea ref={textBoxRef} disabled={!gameOn} value={text} onChange={handleChange} name={"textarea"} />
      <h4>Amount of time remaining: {timeRemaining} s</h4>
      <button disabled={gameOn} onClick={startGame}>Start game</button>
      <h4>Word count: {wordCount}</h4>
    </div>
  );
}

export default App;
