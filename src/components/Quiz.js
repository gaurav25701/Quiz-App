import React, { useState } from 'react';
import { QuizData } from '../Data/QuizData';
import QuizResult from './QuizResult';

const Quiz = () => {

    const [currentQuestion , setCurrentQuestion] = useState(0);
    const [score , setScore] = useState(0);
    const [selectedOption , setSelectedOption] = useState(0);
    const [showResult , setShowResult] = useState(false);
    const [ error, setError] = useState('');

    const changeQuestion = () => {
      if(selectedOption !== 0){
        updateScore();
        if(currentQuestion < QuizData.length - 1){
            setCurrentQuestion(currentQuestion+1);
            setSelectedOption(0);
        }
       else {
        setShowResult(true);
       }
      }  
      else{
        alert("Please Select an option before proceeding.")
      }
    }

    const updateScore = () => {
      if (selectedOption === QuizData[currentQuestion].answer) {
          setScore(score + 1);
      }
  }
  

    const resetAll = () => {
      setShowResult(false);
      setCurrentQuestion(0);
      setSelectedOption(0);
      setScore(0);
      setError('');
    }

  return (
    <div>
      <p className="heading-txt">QUIZ APP</p>
      <div className="container">
      {showResult ? (
        <QuizResult score= {score} totalScore = {QuizData.length} playAgain = {resetAll}/>
      ):  (
        <>
     <div className="question">
        <span id = "question-number">{currentQuestion + 1}. </span>
        <span id= "question-txt">{QuizData[currentQuestion].question}</span>
      </div>
      <div className="option-container">
        {QuizData[currentQuestion].options.map((option, i) => {
            return(
                <button  
                className={`option-btn ${
                    selectedOption === i+1? "checked" : null
                }`}
                key = {i}
                onClick={() => setSelectedOption(i + 1)}
                
                >
                    {option}
                </button>
            )
        })}
        </div>
        <input type='button' value='Next' id = "next-button"
            onClick={changeQuestion}
        />
        </> )}
      </div>
    </div>  
  )
}

export default Quiz
