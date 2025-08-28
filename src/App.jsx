import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Signup from "./pages/signup/Signup.jsx";
import Navbar from "./components/Header/Header.jsx";
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/cart/Cart.jsx";
import { store } from "./store/store.js";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='app'>
          <Navbar />
          <div className='main-content'>
            <Routes>
              <Route path='/signup' element={<Signup />} />
              <Route path='/home' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
