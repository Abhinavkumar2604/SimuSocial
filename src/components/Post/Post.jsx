import { useState, useEffect } from "react";
import "./Post.css";
import PropTypes from "prop-types";
import axios from "axios";

const Post = ({ posts }) => {
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState({});
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});

  // ✅ Toggle Like
  const toggleLike = (postId) => {
    setLikes((prev) => {
      const isLiked = !!prev[postId];
      // if liking, remove dislike
      if (!isLiked) {
        setDislikes((dPrev) => ({ ...dPrev, [postId]: false }));
      }
      return { ...prev, [postId]: !isLiked };
    });
  };

  // ✅ Toggle Dislike
  const toggleDislike = (postId) => {
    setDislikes((prev) => {
      const isDisliked = !!prev[postId];
      // if disliking, remove like
      if (!isDisliked) {
        setLikes((lPrev) => ({ ...lPrev, [postId]: false }));
      }
      return { ...prev, [postId]: !isDisliked };
    });
  };

  // Sync posts from parent
  useEffect(() => {
    setUserPosts(posts || []);
  }, [posts]);

  // Comments toggle
  const toggleComments = async (postId) => {
    const targetPost = userPosts.find((p) => p.id === postId);
    if (!targetPost) return;

    if (targetPost.open) {
      setUserPosts((prev) =>
        prev.map((p) => (p.id === postId ? { ...p, open: false } : p))
      );
      return;
    }

    try {
      setLoading((prev) => ({ ...prev, [postId]: true }));
      const response = await axios.get(
        `https://dummyjson.com/comments/post/${postId}`
      );
      const comments = response.data.comments || [];

      setUserPosts((prev) =>
        prev.map((p) =>
          p.id === postId ? { ...p, comments, open: true } : p
        )
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading((prev) => ({ ...prev, [postId]: false }));
    }
  };

  if (!userPosts || userPosts.length === 0) {
    return <p className="text-center mt-3">No posts available.</p>;
  }

  return (
    <div className="posts-container">
      <h2 className="posts-heading">User Posts</h2>
      <div className="posts-list">
        {userPosts.map((post) => (
          <div key={post.id} className="post-card">
            <h4>{post.title}</h4>
            <p className="post-id">
              Tags: {post.tags?.length ? post.tags.join(", ") : "No tags"}
            </p>
            <p>{post.body}</p>

            {/* Post Footer */}
            <div
              className="d-flex align-items-center justify-content-between post-footer"
              style={{ marginTop: "15px" }}
            >
              <p className="post-stats">
                {/* ✅ Likes */}
                <span
                  className="likes me-3"
                  onClick={() => toggleLike(post.id)}
                  style={{ cursor: "pointer" }}
                >
                  {likes[post.id] ? (
                    <i className="bi bi-hand-thumbs-up-fill text-primary"></i>
                  ) : (
                    <i className="bi bi-hand-thumbs-up"></i>
                  )}
                  {" "}
                  {post.reactions.likes + (likes[post.id] ? 1 : 0)}
                </span>

                {/* ✅ Dislikes */}
                <span
                  className="dislikes me-3"
                  onClick={() => toggleDislike(post.id)}
                  style={{ cursor: "pointer" }}
                >
                  {dislikes[post.id] ? (
                    <i className="bi bi-hand-thumbs-down-fill text-danger"></i>
                  ) : (
                    <i className="bi bi-hand-thumbs-down"></i>
                  )}
                  {" "}
                  {post.reactions.dislikes + (dislikes[post.id] ? 1 : 0)}
                </span>

                {/* Views */}
                <span className="views">
                  <i className="bi bi-eye-fill"></i> {post.views}
                </span>
              </p>

              {/* Comments */}
              <i
                className="bi bi-chat-left-text-fill comment-icon"
                onClick={() => toggleComments(post.id)}
              ></i>

              {loading[post.id] && (
                <div
                  className="spinner-border spinner-border-sm text-info"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
            </div>

            {/* Comments Section */}
            {post.comments && post.open && (
              <div className="comments-section mt-3">
                <h6>Comments ({post.comments.length})</h6>
                {post.comments.map((comment) => (
                  <div key={comment.id} className="comment-item mb-2">
                    <strong>{comment.user?.fullName}:</strong> {comment.body}
                  </div>
                ))}
              </div>
            )}
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
      tags: PropTypes.arrayOf(PropTypes.string),
      reactions: PropTypes.shape({
        likes: PropTypes.number,
        dislikes: PropTypes.number,
      }),
      views: PropTypes.number,
    })
  ),
};

export default Post;
