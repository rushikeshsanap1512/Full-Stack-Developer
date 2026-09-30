import { useState } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter";

function App() {
  
  return (
    <RecoilRoot>
      <div style={{ display: "flex", justifyContent: "center", alignContent: "center"}}>
        <Counter />
      </div>
    </RecoilRoot>
  );
}

function Counter() {
  return (
    <>
      <div style={{marginRight: 50, marginTop: 50}}>
        <CurrentCount />
      </div>
      <div style={{marginLeft: 20, marginTop: 50}}>
        <Increase />
      </div>
      <div style={{marginLeft: 20, marginTop: 50}}>
        <Decrease />
      </div>
    </>
  );
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom);
  return (
    <div>
      Count: {count}
    </div>
  )
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);
  function increase() {
      console.log("increase render");

    setCount(c => c + 1);
  }

  return (
    <>
      <button onClick={increase}>Increase Button</button>
    </>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  function decrease() {
    console.log("decrease render");
    setCount(c => c - 1);
  }

  return (
    <>
      <button onClick={decrease}>Decrease Button</button>
    </>
  );
}

export default App;