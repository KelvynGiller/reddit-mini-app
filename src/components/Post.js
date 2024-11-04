import React, { useState } from 'react';
import styles from '../style/Post.module.css';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const [showComments, setShowComments] = useState(false);
    const postDate = new Date(post.data.created_utc * 1000).toLocaleDateString();

    const handleCommentsToggle = () => {
        setShowComments(!showComments);
    }


    return (
        <div className={styles.post}>
            <Link to={`/post/${post.data.id}`}>
                <h3 className={styles.title}>{post.data.title}</h3>
            </Link>
            <p>Author: {post.data.author} | Posted: {postDate}</p>
            {post.data.url && (
                <img 
                    src={post.data.url} 
                    alt={post.data.title} 
                    className={styles.image} 
                />
            )}
            <p>{post.data.selftext}</p>
            <button onClick={handleCommentsToggle}>
                {showComments ? 'Hide Comments' : 'Show Comments'}
            </button>
            {showComments && (
                <div className={styles.comments}>
                    <p>comments</p>
                </div>
            )}
        </div>
    );
};

export default Post;