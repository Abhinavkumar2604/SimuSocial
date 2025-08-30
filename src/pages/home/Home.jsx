import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Search from "../../components/Search/Search";
import "./Home.css";

const API = "https://dummyjson.com/users";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(API);
      const userData = response.data.users;
      if (Array.isArray(userData)) {
        setUsers(userData);
      } else {
        throw new Error("Data received is not an array");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <h1 className='heading'>Users List</h1>
      </div>
      <div>
        <Search setUsers={setUsers} getData={getData} />
      </div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <div className='user-cards'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
          {Array.isArray(users) &&
            users.map((user) => (
              <div className='col' key={user.id}>
                <div className='profile-card'>
                  <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                    className='profile-img'
                  />
                  <h5 className='profile-name'>{`${user.firstName} ${user.lastName}`}</h5>
                  <p className='profile-email'>{user.email}</p>
                  <Link to={`/user/${user.id}`}>View Profile</Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      {!isLoading && Array.isArray(users) && users.length === 0 && (
        <div>No users found</div>
      )}
    </>
  );
};

export default Home;
