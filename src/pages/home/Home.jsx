import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Search from "../../components/Search/Search";
import "./Home.css";

const API = "https://dummyjson.com/users";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(API);
        const userData = response.data.users;
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div>
        <h1 className='heading'>Users List</h1>
      </div>
      <div>
        <Search />
      </div>
      <div className="user-cards">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {users.map((user) => (
            <div className="col" key={user.id}>
              <div className="profile-card">
                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="profile-img"
                />
                <h5 className="profile-name">{`${user.firstName} ${user.lastName}`}</h5>
                <p className="profile-email">{user.email}</p>
                <Link to={`/posts/user/${user.id}`}>View Posts</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

   
    </>
  );
};

export default Home;
