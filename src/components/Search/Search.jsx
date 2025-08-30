import { useState, useEffect } from "react";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Search({ setUsers, getData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    function handleSearch(searchTerm) {
      if (searchTerm.trim().length) {
        axios
          .get(
            `https://dummyjson.com/users/search?q=${encodeURIComponent(
              searchTerm
            )}`
          )
          .then((response) => {
            setUsers(response.data.users);
          })
          .catch((error) => {
            console.error("Error fetching users:", error);
          });
      } else {
        getData();
      }
    }
    handleSearch(searchTerm);
  }, [searchTerm]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div className='search-container'>
      <input
        className='search-input'
        type='search'
        placeholder='Search users...'
        aria-label='Search'
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
