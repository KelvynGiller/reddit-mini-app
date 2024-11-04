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
                const subredditList = response.data.data.children.map(subreddit => ({
                    name: subreddit.data.display_name,
                    icon: subreddit.data.icon_img || subreddit.data.community_icon || '', // Deixa vazio se não tiver ícone
                }));
                setSubreddits(subredditList);
            } catch (error) {
                console.error("Error", error);
            }
        };
        fetchSubreddits();
    }, []);

    const handleCategoryClick = (subreddit) => {
        dispatch(setCategory(subreddit.name));
        dispatch(fetchPosts(subreddit.name));
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.subredditList}>
                <h2>Subreddits:</h2>
                <ul>
                    {subreddits.map((subreddit) => (
                        <li key={subreddit.name} onClick={() => handleCategoryClick(subreddit)}>
                            {subreddit.icon && (
                                <img 
                                    src={subreddit.icon} 
                                    alt="" 
                                    className={styles.icon} 
                                    onError={(e) => e.target.style.display = 'none'} // Remove a imagem se falhar ao carregar
                                />
                            )}
                            {subreddit.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SubredditList;