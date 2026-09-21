import { useState, useEffect } from "react";

function App() {
  const [setTimer, setShowTimer] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setShowTimer(x => !x);
    }, 5000);
  }, []);

  return <div>
    {setTimer && <Timer />}
  </div>
}

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let clock = setInterval(() => {
      console.log("from this clock.")
      setSeconds(prev => prev + 1)
    }, 1000);

    return () => {
      clearInterval(clock);
    }
  }, []);

  return <div>
    {seconds} seconds elapsed
  </div>;
}

export default App;