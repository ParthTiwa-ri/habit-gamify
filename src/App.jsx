import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="signup" element={<Signup />} />

        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
