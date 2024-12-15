import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [displayHours, setDisplayHours] = useState(0); 
    const [displayMinutes, setDisplayMinutes] = useState(0);
    const [displaySeconds, setDisplaySeconds] = useState(0); 
    const [isRunning, setIsRunning] = useState(false);

    const start = () => setIsRunning(true);
    const pause = () => setIsRunning(false);

    const reset = () => {
        setDisplayHours(0);
        setDisplayMinutes(0);
        setDisplaySeconds(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setIsRunning(false);
    };

    useEffect(() => {
        let timer;

        if (isRunning) {
            timer = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(prev => prev - 1);
                } else if (minutes > 0) {
                    setMinutes(prev => prev - 1); 
                    setSeconds(59);  
                } else if (hours > 0) {
                    setHours(prev => prev - 1);  
                    setMinutes(59);  
                    setSeconds(59);  
                } else {
                    clearInterval(timer); 
                    setIsRunning(false);
                    alert("Vaxt bitdi!");
                }
            }, 1000);
        } else {
            clearInterval(timer); 
        }

        return () => clearInterval(timer);
    }, [isRunning, seconds, minutes, hours]);

    const handleHoursChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setDisplayHours(value); 
            setHours(value); 
        }
    };

    const handleMinutesChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setDisplayMinutes(value);  
            let newValue = parseInt(value);

            if (newValue >= 60) {
                let additionalHours = Math.floor(newValue / 60); 
                newValue = newValue % 60; 
                setHours(prev => prev + additionalHours); 
            }

            setMinutes(newValue); 
        }
    };

    const handleSecondsChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setDisplaySeconds(value);  
            let newValue = parseInt(value);

            if (newValue >= 60) {
                let additionalMinutes = Math.floor(newValue / 60); 
                newValue = newValue % 60; 
                setMinutes(prev => prev + additionalMinutes);
            }

            setSeconds(newValue); 
        }
    };

    return (
        <div>
            <input
                type="number"
                value={displayHours}
                onChange={handleHoursChange}
                placeholder="Saat"
                min="0"
            />
            <input
                type="number"
                value={displayMinutes}
                onChange={handleMinutesChange}
                placeholder="Dəqiqə"
                min="0"
                max="59"
            />
            <input
                type="number"
                value={displaySeconds}
                onChange={handleSecondsChange}
                placeholder="Saniyə"
                min="0"
                max="59"
            />
            <h1>{hours || '00'}:{minutes || '00'}:{seconds || '00'}</h1>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Timer;
