import React from 'react';
import styles from '../style/SubredditList.module.css';

const SubredditList = () => {
    const subreddits = [
        'Home',
        'AskReddit',
        'NoStupidQuestions',
        'BaldursGate3',
        'facepalm',
        'interestingasfuck',
        'Damnthatsinteresting',
        'LivestreamFail',
        'pics',
        'AmItheAsshole' 
    ];

    return (
        <div className={styles.subredditList}>
            <h2>Subreddits</h2>
            <ul>
                {subreddits.map((subreddit) => (
                    <li key={subreddit}>
                        {subreddit}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubredditList;
