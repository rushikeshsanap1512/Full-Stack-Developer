import { useState, useEffect, useRef } from "react";
import { useFetch } from "./hooks/useFetch";

// function App() {
//   const [currentPost, setCurrentPost] = useState(1);
//   const {finalData, loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

//   if (loading) {
//     return <div>
//       Loading...
//     </div>
//   }

//   return(
//     <>
//       <button onClick={() => setCurrentPost(1)}>1</button>
//       <button onClick={() => setCurrentPost(2)}>2</button>
//       <button onClick={() => setCurrentPost(3)}>3</button>
//     {JSON.stringify(finalData)}
//   </>)
// }

function App() {
  function sendDataToBackend() {
    fetch("api.amazon.com/search/");
  }

  const debouncedFn = useDebounced(sendDataToBackend);

  return (
    <>
      <input type="text" onChange={debouncedFn}></input>
    </>
  );
}

function useDebounced(sendDataToBackend) {
  const currentClock = useRef();

  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(sendDataToBackend, 200);
  };

  return fn;
}
export default App;
