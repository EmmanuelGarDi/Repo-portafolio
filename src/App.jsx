import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Informativa from "./pages/Informativa";

function App() {
  const isAuth = !!localStorage.getItem("user");

  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* HOME (landing) */}
        <Route
          path="/home"
          element={isAuth ? <Home /> : <Navigate to="/" />}
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={isAuth ? <Dashboard /> : <Navigate to="/" />}
        />

        {/* INFO PANEL */}
        <Route
          path="/info"
          element={isAuth ? <Informativa /> : <Navigate to="/" />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;