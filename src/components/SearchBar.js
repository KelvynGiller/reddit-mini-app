import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../slices/postsSlice'

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setSearchTerm(event.target.value));
    }

    return (
        <input
            type="text"
            placeholder='Search posts...'
            onChange={handleChange}        
        />
    )
}

export default SearchBar;


