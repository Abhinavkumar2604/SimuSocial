import { useState } from "react";
import "./Search.css";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <>
      <div className='search-container'>
        <input
          className='search-input'
          type='search'
          placeholder='Search users...'
          aria-label='Search'
          value={searchTerm}
          onChange={handleChange}
        />

        <button className='go-to-cart-btn' onClick={() => navigate("/cart")}>
          Go To Cart
        </button>
      </div>
    </>
  );
}

export default Search;
