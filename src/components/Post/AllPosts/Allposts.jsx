import axios from "axios";
import { useEffect, useState } from "react";
import "./Allposts.css";
import Post from "../Post";

function Allposts() {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const allPosts = async () => {
      try {
        const [response, tagsResponse] = await Promise.all([
          axios.get("https://dummyjson.com/posts"),
          axios.get("https://dummyjson.com/posts/tags"),
        ]);
        setTags(tagsResponse.data);
        setPosts(response.data.posts);
      } catch (err) {
        console.error(err);
      }
    };
    allPosts();
  }, []);

  const handleTagClick = async (url) => {
    try {
      const response = await axios.get(url);
      setPosts(response.data.posts);
    } catch (err) {
      console.error(err);
    }
  };

  if (posts.length === 0 || tags.length === 0) {
    return (
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ height: "60vh" }}>
        <div className='spinner-border text-success' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className='all-posts-container'>
      <h2 className='all-posts-heading'>All Posts</h2>
      </div>
      <div className='tags-container d-flex flex-wrap gap-2 mb-4'>
        {tags?.map((tag, index) => (
          <button
            key={index}
            onClick={() => handleTagClick(tag.url)}
            className='btn btn-outline-primary rounded-pill'>
            {tag.name}
          </button>
        ))}
      </div>

      <div className='all-posts-list'>
        <Post posts={posts} />
      </div>
    
    </>
  );
}

export default Allposts;
