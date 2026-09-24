// import { useRef } from "react";

// function App() {
//   const inputRef = useRef();

//   function focusOnInput() {
//     // document.getElementById("name").focus();
//     inputRef.current.focus();
//   }

//   return (
//     <div>
//       Sign Up
//       <input ref={inputRef} type={"text"} />
//       <input type={"text"} />
//       <button onClick={focusOnInput}>Submit</button>
//     </div>
//   );
// }

// export default App;


import { useState, useRef } from "react";

function App() {
  const [currentCount, setCurrentCount] = useState(1);
  const timer = useRef();

  function startClock(){
    let value = setInterval(function () {
      setCurrentCount(timer => timer + 1);
    }, 1000);
    timer.current = value;
  }

  function stopClock() {
    console.log(timer);
    clearInterval(timer.current);
  }

  return <div>
    {currentCount}
    <br />
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>
  </div>
}

export default App;