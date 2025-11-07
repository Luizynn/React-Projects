import { useState, useCallback } from 'react'
import QUESTIONS from '../questions.js'
import Question from './Question.jsx'
import Summary from './Summary.jsx'


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
       return <Summary answersState={answers}/>
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