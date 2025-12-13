import React, {useState, useEffect} from 'react'
import BlogCard from '@/components/blogCard/BlogCard'
import { getAllPosts } from '@/services/postService'

const Home = () => {
  const [posts, setPosts] = useState([]);
  const getAllPostData = async ()=>{       
    try {
      const data = await getAllPosts();
      setPosts(data);
    } catch (err) {
      console.log( err.response?.data || err);
    }
  }
  useEffect(() => {
    getAllPostData()
  }, []);

  return (
    <BlogCard postData={posts}/>
  )
}

export default Home