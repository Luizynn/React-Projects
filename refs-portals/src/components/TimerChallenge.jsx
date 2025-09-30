import { useState, useRef } from "react"

export default function TimerChallenge ({title, targetTime}){
    const timer = useRef();

    const [timeRunning, setTimeRunnig] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleClick(){
        timer.current = setTimeout(() => {
            setTimerExpired(() => true)
        }, targetTime * 1000)
        setTimeRunnig(() => true)
    }

    function handleStop(){
        clearTimeout(timer.current)
    }

    return(
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You Lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timeRunning ?  handleStop : handleClick}>
                    {timeRunning ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timeRunning ? 'active' : undefined}>
                {timeRunning ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    )
}