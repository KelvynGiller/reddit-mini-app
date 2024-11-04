import React from 'react';
import styles from '../style/Comment.module.css';

const Comments = ({ author, body, createdUtc }) => {
    const commentDate = new Date(createdUtc * 1000).toLocaleString();

    return (
        <div className={styles.comment}>
            <p><strong>{author}</strong>: {body}</p>
            <p className={styles.timestamp}>Posted: {commentDate}</p>
        </div>
    );
};

export default Comments;