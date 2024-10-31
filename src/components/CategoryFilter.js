import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory, applyFilters } from '../slices/postsSlice';

const CategoryFilter = () => {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setCategory(event.target.value));
        dispatch(applyFilters());
    }

    return (
        <select onChange={handleChange}>
            <option value="">All Categories</option>
            <option value="technology">Technology</option> 
            <option value="science">Science</option> 
            <option value="entertainment">Entertainment</option> 
            <option value="games">Games</option>
            <option value="music">Music</option> 
            <option value="movies">Movies</option>      
        </select>
    );
};

export default CategoryFilter;