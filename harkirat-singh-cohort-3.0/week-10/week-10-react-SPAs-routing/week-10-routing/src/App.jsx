import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/neet" element={<Landing />} />
            <Route
              path="/neet/online-coaching-class-11"
              element={<Class11Program />}
            />
            <Route
              path="/neet/online-coaching-class-12"
              element={<Class12Program />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh" }}>
      <Link to="/neet">Allen</Link>
      <Link to="/neet/online-coaching-class-11">Class 11</Link>
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
      <div style={{ height: "90vh" }}>
        <Outlet />
      </div>
      Footer
    </div>
  );
}

function Landing() {
  return <div>Welcome to allen</div>;
}

function Class11Program() {
  return <div>NEET courses for Class 11th</div>;
}

function Class12Program() {
  const navigate = useNavigate();

  function redirect() {
    navigate("/");
  }

  return (
    <div>
      NEET courses for Class 12th
      <button onClick={redirect}>Go back to landing page</button>
    </div>
  );
}

export default App;
