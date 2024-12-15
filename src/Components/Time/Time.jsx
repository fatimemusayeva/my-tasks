import React, { useState, useEffect } from 'react';

const Time = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const current_hours = now.getHours();
            const current_minutes = now.getMinutes();
            const current_seconds = now.getSeconds();

            const formattedHours = current_hours < 10 ? `0${current_hours}` : current_hours;
            const formattedMinutes = current_minutes < 10 ? `0${current_minutes}` : current_minutes;
            const formattedSeconds = current_seconds < 10 ? `0${current_seconds}` : current_seconds;

            const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
            setCurrentTime(formattedTime);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>{currentTime}</h1>
        </div>
    );
};

export default Time;
