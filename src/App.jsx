import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [isAuth, setIsAuth] = useState(
    !!localStorage.getItem("user")
  );

  return isAuth ? (
    <Home />
  ) : (
    <Login onLogin={() => setIsAuth(true)} />
  );
}

export default App;