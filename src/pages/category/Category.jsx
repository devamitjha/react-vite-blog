import React from 'react'
import BlogCard from '@/components/blogCard/BlogCard'
import { useParams } from "react-router";

const Category = () => {
  let params = useParams();
 console.log(params);
  return (
    <div>
      <h2 className="text-2xl mb-4 uppercase text-black font-semibold">{params.catname}</h2>
      <BlogCard/>
    </div>
  )
}

export default Category