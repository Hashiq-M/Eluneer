import Add from "./components/Add";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Hero from "./components/Hero";
import Bookform from "./components/Bookform";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/newbooks" element={<Add />} />
        <Route path="/bookform" element={<Bookform />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
