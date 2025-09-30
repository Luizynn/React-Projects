import { useState, useRef } from "react"
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge ({title, targetTime}){
    const timer = useRef();
    const dialog = useRef();

    const [timerRunning, setTimerRunning] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleClick(){
        timer.current = setTimeout(() => {
            setTimerExpired(() => true)
            dialog.current.open();
        }, targetTime * 1000)
        setTimerRunning(() => true)
    }
    

    function handleStop(){
        clearTimeout(timer.current)
        setTimerRunning(() => false)
    }

    return(
        <>
            <ResultModal ref={dialog} result="lost" targetTime={targetTime}/>
            
            <section className="challenge">
                <h2>{title}</h2>
                
                
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerRunning ?  handleStop : handleClick}>
                        {timerRunning ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerRunning ? 'active' : undefined}>
                    {timerRunning ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}