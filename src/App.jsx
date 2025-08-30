import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./components/Header/Header.jsx";
import Home from "./pages/home/Home.jsx";
import UserPosts from "./components/UsersPosts/UserPosts.jsx";

import { store } from "./store/store.js";

import "./App.css";
import Allposts from "./components/AllPosts/Allposts.jsx";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='app'>
          <Navbar />
          <div className='main-content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/user/:userId' element={<UserPosts />} />
              <Route path='/posts' element={<Allposts />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
