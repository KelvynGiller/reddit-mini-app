import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsDetails } from '../slices/postsDetailsSlice';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const { postDetails, loading, error } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPostsDetails(postId));
    }, [dispatch, postId]);

  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!postDetails) return <p>No post details available.</p>;

    return (
        <div>
            <h2>{postDetails.title}</h2>
            <p>{postDetails.selftext}</p>
            <p>Author: {postDetails.author}</p>
            <p>Number of comments: {postDetails.num_comments}</p>
            <p>Score: {postDetails.score}</p>
        </div>
    );
};

export default PostDetail;

