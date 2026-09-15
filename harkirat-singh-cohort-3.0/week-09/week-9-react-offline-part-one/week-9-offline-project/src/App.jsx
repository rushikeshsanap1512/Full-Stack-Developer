// notification count code
import { useState } from "react";

function App() {
  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <ToggleMessage />
      <ToggleMessage />
      <ToggleMessage />
    </div>
  );
}

const ToggleMessage = () => {
  let [notificationCount, setNotificationCount] = useState(0);

  function increment() {
    setNotificationCount((notificationCount = notificationCount + 1));
  }

  return (
    <div>
      <button onClick={increment}>Increase count</button>
      {notificationCount}
    </div>
  );
};

export default App;
