import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./UserPosts.css";
import Post from "../Post/Post";

function UserPosts() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const [response1, response2] = await Promise.all([
          axios.get(`https://dummyjson.com/posts/user/${userId}`),
          axios.get(`https://dummyjson.com/users/${userId}`),
        ]);
        setPosts(response1.data.posts);
        setUser(response2.data);
      } catch (err) {
        console.error(err);
      }
    };
    getPosts();
  }, [userId]);

  return (
    <div className='user-posts-container'>
      <h2 className='user-posts-heading'>Posts by User {userId}</h2>
      <div className='user-info'>{user && <p>{user.email}</p>}</div>
      <div className='user-posts-list'>
        <Post posts={posts} />
      </div>
    </div>
  );
}

export default UserPosts;
