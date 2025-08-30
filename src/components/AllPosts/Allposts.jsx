import axios from "axios"
import { useEffect, useState } from "react"
import "./Allposts.css"


function Allposts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const allPosts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/posts')
                setPosts(response.data.posts)

            }
            catch (err) {
                console.error(err)
            }
        }
        allPosts()
    }, [])
    return (
  <div className="all-posts-container">
    <h2 className="all-posts-heading">All Posts</h2>
    <div className="all-posts-list">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  </div>
);

}

export default Allposts