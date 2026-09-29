import { useState } from "react";

function App() {
  
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignContent: "center"}}>
        <Counter />
      </div>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div style={{marginRight: 50, marginTop: 50}}><CurrentCount count={count} /></div>
      <div style={{marginLeft: 20, marginTop: 50}}><Increase setCount={setCount} /></div>
      <div style={{marginLeft: 20, marginTop: 50}}><Decrease setCount={setCount} /></div>
    </>
  );
}

function CurrentCount({count}) {
  return (
    <>
      Count: {count}
    </>
  )
}

function Increase({ setCount }) {
  function increase() {
    setCount(c => c + 1);
  }

  return (
    <>
      <button onClick={increase}>Increase Button</button>
    </>
  );
}

function Decrease({ setCount }) {
  function decrease() {
    setCount(c => c - 1);
  }

  return (
    <>
      <button onClick={decrease}>Decrease Button</button>
    </>
  );
}

export default App;