import { useState, useRef } from "react";

const Stopwatch = () => {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);

    const handleStart = () => {
        // Start counting.
        setStartTime(Date.now());
        setNow(Date.now());

        setInterval(() => {
            // Update the current time every 10ms.
            setNow(Date.now());
        }, 10);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <>
            <h1>Time passed: {secondsPassed.toFixed(2)}</h1>
            <button onClick={handleStart}>
                Start
            </button>
        </>
    )
}

const Stopwatch1 = () => {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    const handleStart = () => {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    const handleStop = () => {
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <>
            <h1>Time passed: {secondsPassed.toFixed(2)}</h1>
            <button onClick={handleStart}>
                Start
            </button>
            <button onClick={handleStop}>
                Stop
            </button>
        </>
    )
}

export {Stopwatch1, Stopwatch};