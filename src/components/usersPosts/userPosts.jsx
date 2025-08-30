import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./UserPosts.css";

function UserPosts() {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/posts/user/${userId}`
        );
        setPosts(response.data.posts);
      } catch (err) {
        console.error(err);
      }
    };
    getPosts();
  }, [userId]);

  return (
  <div className="user-posts-container">
    <h2 className="user-posts-heading">Posts by User {userId}</h2>
    <div className="user-posts-list">
      {posts.map((post) => (
        <div key={post.id} className="user-post-card">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  </div>
);

}

export default UserPosts;
