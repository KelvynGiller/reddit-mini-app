import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../slices/postsSlice'
import styles from '../style/SearchBar.module.css'


const SearchBar = () => {
    const dispatch = useDispatch();
    const { searchTerm } = useSelector((state) => state.posts);
    const [inputValue, setInputValue] = useState(searchTerm);

    const handleSearch = () => {
        dispatch(setSearchTerm(inputValue))
    }


    return (
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search..."
            className={styles.input}
          />
          <button onClick={handleSearch} className={styles.button}>
            Search
          </button>
        </div>
    );
};

export default SearchBar;


