import { useState } from "react";
import "./Search.css";

function Search() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    };

return (
    <>
        <div className="search-container">
            <input 
                className="search-input" 
                type="search" 
                placeholder="Search users..." 
                aria-label="Search"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    </>
);
}

export default Search;