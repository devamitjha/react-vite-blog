import React from 'react'
import { Link } from 'react-router'
import { Button } from '../ui/button'
import { Bookmark } from 'lucide-react';

const BlogCard = ({postData}) => {
  return (
    <div className="flex flex-col space-y-6">
        {postData.map((item) => (
            <div className="flex justify-between items-center gap-10 p-6 bg-white border border-gray-300 rounded-md" key={item.id}>
                <Link to={`/${item.slug}`} className="w-[40%] rounded-xl shadow-md overflow-hidden">
                    <img src={`https://ik.imagekit.io/devamitjha/react/${item.featured_image}`} alt="blog post" className="w-full h-full object-cover overflow-hidden hover:scale-105 transform transition-all ease-in-out duration-500"/>
                </Link>
                <div className="w-[60%] flex flex-col space-y-4">
                    <h2 className="text-3xl text-black line-clamp-2 font-bold"><Link to={`/${item.slug}`}>{item.title}</Link></h2>
                    <div className="flex justify-start items-center gap-3">
                        <div className="flex gap-2 items-center justify-start">
                            <Link to={`/author/${item.user_name}`} className="w-8 h-8 rounded-full overflow-hidden">
                                <img src="/images/author.jpg" alt="author-name" className="w-full h-full object-cover overflow-hidden"/>
                            </Link>
                            <h6 className="text-sm text-gray-500">By <Link to={`/author/${item.user_name}`} className="text-red-600">{item.user_name}</Link></h6>
                        </div>
                        <span className="text-sm text-gray-500">|</span>
                        <div className="text-sm text-gray-500">
                            {new Date(item.created_at).toLocaleDateString("en-IN", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            })}
                        </div>
                    </div>
                    <p className="text-md line-clamp-2">{item.excerpt}</p>
                    {/* <div className="flex flex-wrap space-x-2 space-y-1 text-sm text-gray-500">
                        <Link to="tags/tags">#blockchain</Link>
                        <Link to="tags/tags">#blockchain</Link>
                        <Link to="tags/tags">#blockchain</Link>
                        <Link to="tags/tags">#blockchain</Link>
                        <Link to="tags/tags">#blockchain</Link>
                    </div> */}
                    <div className="flex justify-between items-center gap-4">
                        <Button className="cursor-pointer"><Link to={`/${item.slug}`}>Read More</Link></Button>
                        <div className="flex gap-2 justify-end items-center">
                            <span>2 min read</span>
                            <Button variant="ghost" className="cursor-pointer"><Bookmark /></Button>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default BlogCard