import React, {useState, useEffect} from 'react'
import BlogCard from '@/components/blogCard/BlogCard'
import { getAllPosts } from '@/services/postService'
import { setLoading, setPostData, setError } from "@/redux/slices/postSlice";
import { useSelector, useDispatch } from 'react-redux';

const AllCategory = () => {
  const dispatch = useDispatch();
  const { postData, loading, error } = useSelector(
    (state) => state.postItem
  );
  const getAllPostData = async ()=>{       
    try {
      dispatch(setLoading());
      const data = await getAllPosts();
      dispatch(setPostData(data));
    } catch (err) {
      dispatch(setError(err.message));
    }
  }
  useEffect(() => {
    getAllPostData()
  }, []);

    if (loading) {
      return <div className="text-center py-10">Loading posts...</div>;
    }
    if (error) {
      return <div className="text-center py-10 text-red-500">{error}</div>;
    }

  return (
    <BlogCard postData={postData} />
  )
}

export default AllCategory