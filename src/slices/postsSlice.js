import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://www.reddit.com/r/popular.json');
  return response.data.data.children;
});


const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    loading: false,
    allPosts: [],
    posts: [],
    error: '',
    searchTerm: '',
    selectedCategory: '',
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      postsSlice.caseReducers.applyFilters(state);
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
      postsSlice.caseReducers.applyFilters(state);
    },
    applyFilters: (state) => {
      state.posts = state.allPosts.filter((post) => {
        const matchesSearchTerm = post.data.title.toLowerCase().includes(state.searchTerm.toLowerCase());
        const matchesCategory = state.selectedCategory
          ? post.data.subreddit === state.selectedCategory
          : true;
        return matchesSearchTerm && matchesCategory;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.allPosts = action.payload;
        state.error = '';
        postsSlice.caseReducers.applyFilters(state);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export const { setSearchTerm, setCategory, applyFilters } = postsSlice.actions;

export default postsSlice.reducer;