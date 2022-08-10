import React from "react";

function App() {
  // const [count, setCount] = React.useState("")
  const time = 5
  const [text, setText] = React.useState("");
  const [timeRemaining, setTimeRemaining] = React.useState(time)
  const [gameOn, setGameOn] =React.useState(false)
  const [wordCount, setWordCount] = React.useState()
  const textBoxRef = React.useRef(null)

  function handleChange(event) {
    setText(event.target.value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.split(" ");
    const filteredWords = wordsArr.filter(word => word !== '')
    return filteredWords.length;
  }
  function startGame(){
    setGameOn(true)
    setText("")
    setTimeRemaining(time)
    setWordCount("")
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }
  function endGame(){
    setGameOn(false)
    setWordCount(calculateWordCount(text))
  }
  React.useEffect(function(){
    if(gameOn===true){
      if(timeRemaining===0){
        endGame()
      }
      else{
        setTimeout(()=>{
          setTimeRemaining(prevTime => {return prevTime - 1})
        },1000)
      }
     
    }
  },[timeRemaining,gameOn])

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
