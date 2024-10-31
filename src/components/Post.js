import React from "react";

const Post = ({post}) => {
    return (
        <div className="post">
            <h2>{post.data.title}</h2>
            {post.data.thumbnail && (
                <img src={post.data.thumbnail} alt={post.data.title} />
            )}
            <p>{post.data.num_comments} comments</p>
        </div>
    )
}

export default Post;
