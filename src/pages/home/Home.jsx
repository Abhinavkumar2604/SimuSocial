import { useEffect, useState } from "react";
import axios from "axios";
import Search from "../../components/Search/Search";
import { useDispatch } from "react-redux";
import "./Home.css";
import { addUser } from "../../store/slices/users.slice";

const API = "https://dummyjson.com/users";

const Home = () => {
  const dispatch = useDispatch();
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
        <h2 className='heading'>Users List</h2>
      </div>
      <div>
        <Search />
      </div>
      <div
        data-bs-spy='scroll'
        data-bs-target='#navbar-example2'
        data-bs-offset='0'
        className='scrollspy-example'
        style={{ height: "300px", overflowY: "scroll" }}>
        <table className='table'>
          <thead className='thead-light'>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>User Name</th>
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th scope='row'>{user.id}</th>
                <td>{user.username}</td>
                <td>{`${user.firstName} ${user.lastName}`}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(addUser(user));
                    }}>
                    ADD
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
