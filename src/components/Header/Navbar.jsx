import Card from "../Card/Card";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [userData, setUserData] = useState({
    name: "Simpler Technologies",
    email: "example@gmail.com",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='#'>
              Simpler
            </a>
          </div>
          <ul className='nav'>
            <li className='nav-item'>
              <a className='nav-link active' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href='/' className='btn btn-primary'>
                <span className='glyphicon glyphicon-user'></span> Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Card name={userData.name} email={userData.email} />
    </>
  );
};

export default Navbar;
