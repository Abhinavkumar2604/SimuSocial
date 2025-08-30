import "./Post.css";
import PropTypes from "prop-types";
const Post = ({ posts }) => {
  return (
    <div className="posts-container">
      <h2 className="posts-heading">User Posts</h2>
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h4>{post.title}</h4>
            <p className="post-id">Tags : {post.tags.join(", ")}</p>
            <p>{post.body}</p>
            <i className="bi bi-chat-left-text-fill comment-icon"   ></i>
          </div>
        ))}
      </div>
    </div>
  );
};

Post.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Post;
