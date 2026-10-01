import './store/atoms/counter.js';
import { RecoilRoot, useSetRecoilState, useRecoilValue } from 'recoil';
import { counterAtom, evenSelector } from './store/atoms/counter.js';

function App() {
  return <div>
    <RecoilRoot>
      <Buttons />
      <Counter />
      <IsEven />
    </RecoilRoot>
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount(c => c + 2);
  }

  function decrease() {
    setCount(c => c - 1);
  }

  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
}

function Counter() {
  const count = useRecoilValue(counterAtom);

  return <div>
    {count}
  </div>
}

function IsEven() {
  const count = useRecoilValue(evenSelector);

  return <div>
    {count ? "even" : "odd"}
  </div>
}

export default App;