import { useState, useCallback } from 'react'
import completeImg from '../assets/quiz-complete.png'
import QUESTIONS from '../questions.js'
import Question from './Question.jsx'


export default function Quiz(){
    
    const[answers, setAnswer] = useState([])


    const currentlyQuestion = answers.length;
    const quizIsCompleted = answers.length === QUESTIONS.length
   

    const handleSelectedAnswer = useCallback(function handleSelectedAnswer(selectedAnswer) {
        setAnswer(prevState => {
            return [...prevState, selectedAnswer]
        });
    }, [])

    const handleSkip = useCallback(() => handleSelectedAnswer(null), [handleSelectedAnswer])

    if(quizIsCompleted) {
        return (
            <div id='summary'>
                <img src={completeImg} alt="Trophy icon" />
                <h2>Quiz completed!</h2>
            </div>
        )
    }

    
    return(
        <div id='quiz'>
            <Question 
                key={currentlyQuestion}
                index={currentlyQuestion} 
                onSelectAnswer={handleSelectedAnswer} 
                onSkipAnswer={handleSkip}
                />
        </div>
    )
}