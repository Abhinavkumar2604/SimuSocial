import { useEffect, useState } from "react";
import axios from "axios";
import Search from "../Search/Search";
import "./Users.css";

const API = "https://dummyjson.com/users";

const GetDataComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(API);
                console.log("API Response:", response.data); // check structure
                setUsers(response.data.users); // extract array
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getData();
    }, []);

    return (
        <>
        <div>
            <h2 className="heading">Users List</h2>
        </div>
        <div>
            <Search />
        </div>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" style={{ height: "200px", overflowY: "scroll" }} >
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.username}</td>
                            <td>{`${user.firstName} ${user.lastName}`}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    );
};

export default GetDataComponent;
