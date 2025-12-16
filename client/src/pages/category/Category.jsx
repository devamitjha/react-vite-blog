import React, {useState, useEffect } from 'react'
import BlogCard from '@/components/blogCard/BlogCard'
import { getPostsByCategorySlug } from '@/services/categoryService'
import { useParams } from "react-router";
import { setLoading, setPostData, setError } from "@/redux/slices/postSlice";
import { useSelector, useDispatch } from 'react-redux';

const Category = () => {
    let params = useParams();
    const dispatch = useDispatch();
    const { postData, loading, error } = useSelector(
      (state) => state.postItem
    );
      const getAllPostData = async ()=>{       
        try {
           dispatch(setLoading());
          const data = await getPostsByCategorySlug(params.catname);
          dispatch(setPostData(data));
        } catch (err) {
         dispatch(setError(err.message));
        }
      }
      useEffect(() => {
        getAllPostData()
      }, [dispatch]);
  return (
    <div>
      <h2 className="text-2xl mb-4 uppercase text-black font-semibold">{params.catname}</h2>
      <BlogCard postData={postData}/>
    </div>
  )
}

export default Category