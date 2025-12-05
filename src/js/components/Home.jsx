import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// Card Section
import Card from "./Cards";

//create your first component

const Home = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const secondString = seconds.toString().padStart(6, "0");

  // Function for stop watch
  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  // Digits split into each card
  const digits = secondString.split("");
  // JSX return

  return (
    <div className="d-flex justify-content-center gap-3 mt-5">
      {digits.map((digit, index) => (
        <Card key={index} number={digit} />
      ))}
      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-success" onClick={handleStart}>
          Start
        </button>
        <button className="btn btn-danger" onClick={handleStop}>
          Stop
        </button>
        <button className="btn btn-warning" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default Home;
