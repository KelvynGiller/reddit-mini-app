import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPostsDetails } from '../slices/postsSlice';
import styles from '../style/PostDetail.module.css';

const PostDetail = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const postDetails = useSelector((state) => state.posts.postDetails);

    useEffect(() => {
        dispatch(fetchPostsDetails(postId));
    }, [dispatch, postId]);

    if (!postDetails) return <p>Loading...</p>

    return (
        <div className={styles.postDetail}>
            <h2>{postDetails.title}</h2>
            <p>{postDetails.author}</p>
            <p>{postDetails.selftext}</p>
            <div>
                <span>Comments: {postDetails.num_comments}</span>
                <span>Votes: {postDetails.score}</span>
            </div>
        </div>
    );
};

export default PostDetail;

