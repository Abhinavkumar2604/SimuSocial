import Signup from "./components/Signup/Signup.jsx";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/home' element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
