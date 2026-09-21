// import { useState, useEffect } from "react";
// import { PostComponent } from "./Post";

// function App() {
//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     setCount(count => count + 1);
//   }

//   useEffect(function () {
//     setInterval(increaseCount, 2000);
//   }, []);

//   return (
//     <div>
//       <div style={{ display: "flex" }}>
//         <div
//           style={{
//             background: "red",
//             borderRadius: 20,
//             width: 20,
//             height: 25,
//             paddingLeft: 10,
//             paddingTop: 5,
//           }}
//         >
//           {count}
//         </div>
//       </div>
//       <img
//         style={{ cursor: "pointer" }}
//         src={
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSIRidJ0b8M1VEa9yXUtU63yJ7HmA5ytfQnLBGD9mhHg&s=10"
//         }
//         width={20}
//       />
//       <button onClick={increaseCount}>Increase the count</button>
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   function increaseCount(currentValue) {
//     setCount((currentValue) => currentValue + 1);
//   }

//   useEffect(() => {
//     console.log("Above Interval");
//     setInterval(increaseCount, 1000);
//   }, []);

//   return <div>{count}</div>;
// }

// export default App;

import { useState, useEffect } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState("true");

  useEffect(() => {
    console.log("Send request to backend to get data for tab" + currentTab);

    setLoading("true");
    fetch("https://jsonplaceholder.typicode.com/todos/1" + currentTab).then(
      async (res) => {
        const json = await res.json();
        setTabData(json);
      },
    );
  }, [currentTab]);

  return (
    <div>
      <button
        onClick={() => {
          setCurrentTab("1");
        }}
        style={{ color: currentTab == "1" ? "red" : "black" }}
      >
        Todo #1
      </button>
      <button
        onClick={() => {
          setCurrentTab("2");
        }}
        style={{ color: currentTab == "2" ? "red" : "black" }}
      >
        Todo #2
      </button>
      <button
        onClick={() => {
          setCurrentTab("3");
        }}
        style={{ color: currentTab == "3" ? "red" : "black" }}
      >
        Todo #3
      </button>
      <button
        onClick={() => {
          setCurrentTab("4");
        }}
        style={{ color: currentTab == "4" ? "red" : "black" }}
      >
        Todo #4
      </button>
      <br />

      {tabData.title}
    </div>
  );
}

export default App;
