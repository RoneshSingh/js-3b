import React, { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: any;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((time) => time + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <p>"Life is a waste of Time, Time is a waste of life.</p>
      <p>Why not get wasted all the Time and have the time of our life"</p>
      <h1>Timer: {seconds} seconds</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default Timer;
