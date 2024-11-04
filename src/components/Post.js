import React, { useState, useCallback } from 'react';
import styles from '../style/Post.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Comments from './Comments';

const Post = ({ post }) => {
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [votes, setVotes] = useState(post.data.ups || 0);
    const [userVote, setUserVote] = useState(null);
    const postDate = new Date(post.data.created_utc * 1000).toLocaleString();

    const fetchComments = useCallback(async () => {
        const url = `https://www.reddit.com/r/${post.data.subreddit}/comments/${post.data.id}.json`;
        const response = await axios.get(url);
        setComments(response.data[1].data.children);
    }, [post.data.subreddit, post.data.id]);

    const handleCommentsToggle = () => {
        if (!showComments) {
            fetchComments();
        }
        setShowComments(!showComments);
    };

    const handleVote = (direction) => {
        if (userVote === null) {
            setVotes(direction === 'up' ? votes + 1 : votes - 1);
            setUserVote(direction);
        } else if (userVote !== direction) {
            setVotes(direction === 'up' ? votes + 2 : votes - 2);
            setUserVote(direction);
        }
    };

    return (
        <div className={styles.post}>
            <Link to={`/post/${post.data.id}`}>
                <h3 className={styles.title}>{post.data.title}</h3>
            </Link>
            <p className={styles.meta}>Author: {post.data.author} | Posted: {postDate}</p>
            {post.data.url && <img src={post.data.url} alt={post.data.title} className={styles.image} />}
            <p>{post.data.selftext}</p>

            <div className={styles.voting}>
                <button onClick={() => handleVote('up')} disabled={userVote === 'up'}>↑</button>
                <span>{votes}</span>
                <button onClick={() => handleVote('down')} disabled={userVote === 'down'}>↓</button>
            </div>

            <button onClick={handleCommentsToggle}>
                {showComments ? 'Hide Comments' : 'Show Comments'}
            </button>
            {showComments && (
                <div className={styles.comments}>
                    {comments.length > 0 ? (
                        comments.map((comment) => (
                            <Comments 
                                key={comment.data.id}
                                author={comment.data.author}
                                body={comment.data.body}
                                createdUtc={comment.data.created_utc}
                            />
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