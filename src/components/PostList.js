import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../slices/postsSlice';
import styles from '../style/PostList.module.css';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';

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
    }
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
          <SearchBar />
          <CategoryFilter />
            {filteredPosts.map((post) => (
                <div key={post.data.id} className={styles.post}>
                    <Link to={`/post/${post.data.id}`}>
                        <h3 className={styles.title}>{post.data.title}</h3>
                    </Link>
                    <p>{post.data.selftext}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;