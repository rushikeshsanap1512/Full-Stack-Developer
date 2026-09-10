import { useState, useEffect } from "react";

// function App() {
//   const [counterVisible, setCounterVisible] = useState(true);

//   useState(() => {
//     setInterval(() => {
//       setCounterVisible(c => !c);
//     }, 5000);
//   }, []);
//   return (
//     <>
//       {counterVisible && <Counter></Counter>}
//     </>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   // function increaseCount() {
//   //   setCount(count + 1);
//   // }
//   console.log("counter");

//   useEffect(() => {
//     let clock = setInterval(() => {
//       setCount(count => count + 1);
//     }, 1000);
//     console.log("mounter");

//     return function () {
//       clearInterval(clock);
//     };
//   }, []);

//   // function decreaseCount() {
//   //   setCount(count - 1);
//   // }
//   // function resetCount() {
//   //   setCount(0);
//   // }

//   return (
//     <div>
//       <h1>{count}</h1>
//       {/* <button onClick={increaseCount}>Increase Count</button>
//       <button onClick={decreaseCount}>Decrease Count</button>
//       <button onClick={resetCount}>Reset Count</button> */}
//     </div>
//   );
// }

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <Counter count={count}></Counter>
      <button onClick={increaseCount}>Increase Count!</button>
    </div>
  );
}

function Counter(props) {
  useEffect(() => {
    console.log("Mount");

    return () => {
      console.log("Unmount");
    };
  }, []);

  useEffect(() => {
    console.log("count is changed");
  }, [props.count]);

  return <div>Counter {props.count}</div>;
}
export default App;
