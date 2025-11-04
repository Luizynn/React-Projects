import { useState, useCallback } from 'react'
import completeImg from '../assets/quiz-complete.png'
import QUESTIONS from '../questions.js'
import QuizTimer from './QuizTimer.jsx'

export default function Quiz(){
    
    const[answers, setAnswer] = useState([])

    const currentlyQuestion = answers.length;
    const quizIsCompleted = answers.length === QUESTIONS.length
   

    const handleSelectedAnswer = useCallback(function handleSelectedAnswer(selectedAnswer) {
        setAnswer(prevState => {
            return [...prevState, selectedAnswer]
        });
        console.log(selectedAnswer);
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

    const shuffledAnswers = [...QUESTIONS[currentlyQuestion].answers]
    shuffledAnswers.sort(() => Math.random() - 0.5)

    return(
        <div id='quiz'>
            <div id='question'>
                <QuizTimer 
                    key={currentlyQuestion}
                    onTimeout={handleSkip}
                    timeout={10000}/>
                <h2>{QUESTIONS[currentlyQuestion].text}</h2>
                <ul id='answers'>
                    {shuffledAnswers.map((answer) => (
                    <li key={answer} className='answer'>
                        <button onClick={() => handleSelectedAnswer(answer)}>{answer}</button>
                    </li>
                ))
                }
                </ul>
            </div>
        </div>
    )
}