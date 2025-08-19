import Signup from "./components/Signup1/Signup.jsx";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar.jsx";
import GetDataComponent from "./components/API/Users.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/home" element={<GetDataComponent />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
