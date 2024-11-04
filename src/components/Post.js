import React, { useState, useCallback } from 'react';
import styles from '../style/Post.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Post = ({ post }) => {
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const postDate = new Date(post.data.created_utc * 1000).toLocaleString();

    const fetchComments = useCallback(async () => {
        const url = `https://www.reddit.com/r/${post.data.subreddit}/comments/${post.data.id}.json`;
        try {
            const response = await axios.get(url);
            setComments(response.data[1].data.children);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    }, [post.data.subreddit, post.data.id]);

    const handleCommentsToggle = () => {
        if (!showComments) {
            fetchComments();
        }
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
                    {comments.length > 0 ? (
                        comments.map((comment) => (
                            <div key={comment.data.id}>
                                <p><strong>{comment.data.author}</strong>: {comment.data.body}</p>
                            </div>
                        ))
                    ) : (
                        <p>No comments available.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Post;