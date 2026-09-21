// import { useState } from "react";

// function App() {
//   return (
//     <div style={{ display: "flex", background: "gray" }}>
//       <Card>
//         {
//           <div style={{ color: "green" }}>
//             What do you want to post here?
//             <br />
//             <br />
//             <input type={"text"} />
//           </div>
//         }
//       </Card>
//       <Card>
//         <div>"Hi There!"</div>
//       </Card>
//     </div>
//   );
// }

// function Card({ children }) {
//   return (
//     <span
//       style={{
//         background: "white",
//         borderRadius: 10,
//         color: "black",
//         padding: 10,
//         margin: 10,
//       }}
//     >
//       {children}
//     </span>
//   );
// }

const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "20px",
        margin: "10px",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Card>
        <h2>Card Title</h2>
        <p>This is some content inside the card.</p>
      </Card>
      <Card>
        <h2>Another Card</h2>
        <textarea type={"text"}></textarea>
        <p>This card has different content!</p>
      </Card>
    </div>
  );
};

export default App;