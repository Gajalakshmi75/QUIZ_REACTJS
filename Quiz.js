import React, { useState } from 'react';
import "./quizz.css";
import questions from './QuizData';
import QuizResult from './QuizResult';

const Quiz =() => {

    const[currentQues,setCurrentQues]=useState(0);
    const[score,setScore]=useState(0);
    const[correctAns,setCorrectAns]=useState(0);
    const [ShowResult,setShowResult]=useState(false);
    const[clicked,setclicked]=useState(false);

    const handleNext=()=>{
        setclicked(false)
        const nextQues=currentQues+1
        if(nextQues<questions.length){
            setCurrentQues(nextQues);
        }
        else{
            setShowResult(true);
        }
    }

    const handleAns=(isCorrect)=>{
        if(isCorrect){
            setScore(score+5)
            setCorrectAns(correctAns+1)

        }
        setclicked(true)
    };
    const handlePlatAgain=()=>{
    setCurrentQues(0);
    setScore(0);
    setCorrectAns(0);
    setShowResult(false);
    }

  return (
   <>
   <div className='app'>
    {ShowResult ? (<QuizResult score={score} correctAns={correctAns} handlePlatAgain={handlePlatAgain}/>)
    :(
        <>
        <div className='ques-sec'>
            <h4>Score:{score}</h4>
            <div className='ques-count'>
                <span>Question {currentQues+1} to {questions.length}</span>
            </div> 
            <div className='ques-text'>
                {questions[currentQues].questionText}
            </div>
        </div>
        <div className='ans-sec'>
            {questions[currentQues].answerOptions.map((answ,i)=>{
                return <button 
                className={`button ${ clicked &&  answ.isCorrect ? "correct" : "button"}`}
                disabled={clicked}
                key={i} onClick={()=>handleAns(answ.isCorrect)}>{answ.ansText}</button>;
            })}
            
            <div className='actions'>
            <button onClick={handlePlatAgain}>Quit</button>
            <button disabled={!clicked} onClick={handleNext}>Next</button>
            </div>
        </div>
        </>
     ) }
   </div>
   </>
  )
}

export default Quiz;