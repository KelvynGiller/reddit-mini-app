import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../slices/postsSlice';
import styles from '../style/PostList.module.css';

const PostList = () => {
    const dispatch = useDispatch();
    const { loading, posts, error } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div>
            {posts.map((post => (
                <div key={post.data.id} className={styles.post}>
                    <h3 className={styles.title}>{post.data.title}</h3>
                    <p>{post.data.selftext}</p>
                </div>
            )))}
        </div>
    );
};

export default PostList;