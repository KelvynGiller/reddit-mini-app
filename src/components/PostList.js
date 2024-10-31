import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../slices/postsSlice';
import Post from './Post';
import styles from '../style/PostList.module.css';


const PostList = () => {
    const dispatch = useDispatch();
    const { loading, posts, error, searchTerm, selectedCategory } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const filteredPosts = posts.filter(post => {
       const matchesSearchTerm = post.data.title.toLowerCase().includes(searchTerm.toLowerCase());
       const matchesCategory = selectedCategory ? post.data.subreddit === selectedCategory : true;

       return matchesSearchTerm && matchesCategory;
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div style={{ display: 'flex' }}>
            <div className={styles.postContainer}>
                {filteredPosts.map((post) => (
                    <Post key={post.data.id} post={post} />
                ))}
            </div>
            <div style={{ width: '33.33%' }}>
                <p>subreddit</p>
            </div>
        </div>
    );
};

export default PostList;