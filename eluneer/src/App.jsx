//every routes
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Add from "./components/Add";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Hero from "./components/Hero";
import Bookform from "./components/Bookform";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/newbooks" element={<Add />} />
        <Route path="/bookform" element={<Bookform />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
