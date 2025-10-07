import { useState, useRef } from "react"
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge ({title, targetTime}){
    const timer = useRef();
    const dialog = useRef();

    const [timerRunning, setTimerRunning] = useState(targetTime * 1000)
    const timerActive = timerRunning > 0 && timerRunning < targetTime * 1000

    if(timerRunning <= 0){
        clearInterval(timer.current)
        dialog.current.open()
    }

    function handleReset(){
        setTimerRunning(targetTime * 1000)
    }

    function handleClick(){
        timer.current = setInterval(() => {
            setTimerRunning(prevTime => prevTime - 10)
            
        }, 10)
    }
    

    function handleStop(){
        dialog.current.open()
        clearInterval(timer.current)
    }
    

    return(
        <>
            <ResultModal ref={dialog} targetTime={targetTime} timeRemaining={timerRunning} onReset = {handleReset}/>
            
            <section className="challenge">
                <h2>{title}</h2>
                
                
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerActive ?  handleStop : handleClick}>
                        {timerActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerActive ? 'active' : undefined}>
                    {timerActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}