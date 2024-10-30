import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://www.reddit.com/r/popular.json');
  return response.data.data.children;
});

export const fetchPostsDetails = createAsyncThunk('posts/fetchPostDetails', async (postId) => {
  const response = await fetch(`https://www.reddit.com/comments/${postId}.json`);
  const data = await response.json();
  return data[0].data.children[0].data; // Obtendo detalhes do post
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    loading: false,
    posts: [],
    error: '',
    postDetails: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.error = '';
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPostsDetails.pending, (state) => {
        state.loading = true; 
      })
      .addCase(fetchPostsDetails.fulfilled, (state, action) => {
        state.loading = false; 
        state.postDetails = action.payload; 
        state.error = ''; 
      })
      .addCase(fetchPostsDetails.rejected, (state, action) => {
        state.loading = false; 
        state.error = action.error.message; 
      });
  },
});

export default postsSlice.reducer;