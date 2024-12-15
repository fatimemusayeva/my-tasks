import React, { useState, useEffect } from 'react';

const Second = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const start = () => setIsRunning(true);
    const pause = () => setIsRunning(false);
    const reset = () => {
        setSeconds(0);
        setIsRunning(false);
    };

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
            return () => clearInterval(interval); 
        }
    }, [isRunning]);

    const hours = Math.floor(seconds / 3600); 
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60; 

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    return (
        <div>
            <h1>{formattedHours}:{formattedMinutes}:{formattedSeconds}</h1>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Second;
