
import Signup from "./components/Signup/Signup.jsx";
import { BrowserRouter} from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Signup/Header/Navbar.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
/*
  The routing setup in your code is incorrect. 
  You should use the `Routes` component to wrap your `Route` components in React Router v6+.
  Also, do not alias `Route` as `Router`.
  Here is the corrected routing setup:
*/


// ...rest of your code...

// Replace your routing section with:
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Signup />} />
  </Routes>
</BrowserRouter>