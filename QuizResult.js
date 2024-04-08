import React from 'react';
import questions from './QuizData';

const QuizResult = (props) => {
  return (
    <div className='score-sec'>
        <h2>Completed</h2>
        <h4>Total score {props.score}/20</h4>
        <h4>Your correct Questions {props.correctAns} out of {questions.length}</h4>
        <button onClick={props.handlePlatAgain}>Play Again</button>
    </div>
  )
}

export default QuizResult;