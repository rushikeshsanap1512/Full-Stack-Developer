import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return {
    count: count,
    increaseCount: increaseCount,
  };
}

function App() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

function Counter() {
  const { count, increaseCount } = useCounter();

  return (
    <>
      <button onClick={increaseCount}>Increase {count}</button>
    </>
  );
}

export default App;
