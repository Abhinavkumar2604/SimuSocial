import React from "react";

const Post = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className='post-card'>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Post;
