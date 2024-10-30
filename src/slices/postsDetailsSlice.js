import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPostsDetails = createAsyncThunk('posts/fetchPostDetails', async (postId) => {
    const response = await fetch(`https://www.reddit.com/comments/${postId}.json`);
    const data = await response.json();
    return data[0].data.children[0].data;
  });

const postsDetailsSlice = createSlice({
    name: 'postsDetails',
    initialState: {
        loading: false,
        postDetails: null,
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
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

export default postsDetailsSlice.reducer;
