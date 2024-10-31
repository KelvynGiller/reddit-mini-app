import React from 'react';
import styles from '../style/Post.module.css';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <div className={styles.post}>
            <Link to={`/post/${post.data.id}`}>
                <h3 className={styles.title}>{post.data.title}</h3>
            </Link>
            {post.data.url && (
                <img 
                    src={post.data.url} 
                    alt={post.data.title} 
                    className={styles.image} 
                />
            )}
            <p>{post.data.selftext}</p>
        </div>
    );
};

export default Post;