import {useState, useEffect, useRef} from "react"

export default function useGameLogic(time = 10){
    const [text, setText] = useState("");
    const [timeRemaining, setTimeRemaining] = useState(time)
    const [gameOn, setGameOn] =useState(false)
    const [wordCount, setWordCount] = useState()
    const textBoxRef = useRef(null)
  
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
    useEffect(function(){
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
    return {text,gameOn,timeRemaining,wordCount,textBoxRef,startGame,handleChange}
}