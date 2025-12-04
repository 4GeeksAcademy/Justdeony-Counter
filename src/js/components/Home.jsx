import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// Card Section
import Card from "./Cards";

//create your first component

const Home = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // JSX return

  return (
    <div className="text-center">
      <h2>{seconds}</h2>
    </div>
  );
};
export default Home;
