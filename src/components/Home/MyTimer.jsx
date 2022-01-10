import React from 'react';
import { useStopwatch } from 'react-timer-hook';

function MyTimer() {
    const {
        seconds,
        minutes,
        hours,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: true });


    const handleStop = () => {
        pause()
        const time = `${hours}hrs:${minutes}min`
        console.log(time);
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '30px' }}>
                <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <p>{isRunning ? 'Running' : 'Not running'}</p>
            <button onClick={start}>Start</button>
            <button onClick={handleStop}>Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default MyTimer