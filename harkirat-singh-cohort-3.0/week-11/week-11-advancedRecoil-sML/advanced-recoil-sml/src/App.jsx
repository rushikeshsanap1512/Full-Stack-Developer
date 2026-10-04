import { useEffect } from "react";
import { notifications, totalNotificationSelector } from "./atoms";
import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil";
import axios from 'axios';

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    axios.get("https://temp.staticsave.com/d82205ed85a030e0.json")
      .then(res => {
        setNetworkCount(res.data)
      })
  }, []);


  return (
    <>
      <button>Home</button>
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount}) </button>
    </>
  );
}

export default App;