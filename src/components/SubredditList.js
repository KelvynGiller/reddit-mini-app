import React, { useEffect, useState } from 'react';
import styles from '../style/SubredditList.module.css';
import { useDispatch } from 'react-redux';
import { setCategory, fetchPosts } from '../slices/postsSlice';
import axios from 'axios';

const SubredditList = () => {
    const dispatch = useDispatch();
    const [subreddits, setSubreddits] = useState([]);

    useEffect(() => {
        const fetchSubreddits = async () => {
            try {
                const response = await axios.get('https://www.reddit.com/subreddits/popular.json');
                const subredditList = response.data.data.children.map(subreddit => subreddit.data.display_name);
                setSubreddits(subredditList);
            } catch (error) {
                console.error("Error", error);
            };
        };
        fetchSubreddits();
    }, []);

    const handleCategoryClick = (subreddit) => {
        console.log(`Selected subreddit: ${subreddit}`);
        dispatch(setCategory(subreddit));
        dispatch(fetchPosts(subreddit));
    };
    console.log('SubredditList rendered');
    return (
        <div className={styles.subredditList}>
            <h2>Subreddits</h2>
            <ul>
                {subreddits.map((subreddit) => (
                    <li key={subreddit} onClick={()=> handleCategoryClick(subreddit)}>
                        {subreddit}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubredditList;
