import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./UserPosts.css";
import Post from "../../components/Post/Post";

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
    <>
      <div className='user-posts-container'>
        <h2 className='user-posts-heading'>Profile</h2>
        <div className="card">
          <div className="card-body">
            {user &&
              <div className="user-card">
                <h3 className="user-name">{`${user.firstName} ${user.lastName}`}</h3>
                <p className="user-username">@{user.username}</p>
                <p className="user-company">{user.company.title}</p>
                <p className="user-email">{user.email}</p>
                <p className="user-phone">{user.phone}</p>
                <p className="user-country">{user.address.country}</p>
              </div>
            }
          </div>

        </div>
      </div>
      <div className='user-posts-list'>
        <Post posts={posts} />
      </div>
    </>
  );
}

export default UserPosts;
