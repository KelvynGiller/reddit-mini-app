import React from 'react';
import Post from './Post';
import SubredditList from './SubredditList';
import styles from '../style/Home.module.css';

const Home = ({ posts }) => {
    return (
        <div className={styles.pageWrapper}>
          <div className={styles.container}>
            <div className={styles.subredditContainer}>
                <SubredditList />
            </div>
            <div className={styles.postsContainer}>
                {posts.map(post => (
                    <Post key={post.data.id} post={post} />
                ))}
            </div>
         </div>
        </div>
    );
};

export default Home;