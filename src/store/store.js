import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../slices/postsSlice';
import postsDetailsReducer from '../slices/postsDetailsSlice';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        postsDetails: postsDetailsReducer,
    },
});

export default store;