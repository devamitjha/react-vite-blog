import React from 'react'
import { Link } from 'react-router'
import { Bookmark, Heart, MessageSquareText } from 'lucide-react'
import { AspectRatio } from "@/components/ui/aspect-ratio"

const SingleBlogCard = () => {
  return (
    <div className="border rounded-md bg-white">
        <AspectRatio ratio={1 / 1} className="bg-muted rounded-lg">
            <img src="/images/port-6.jpg" alt="author-name" className="h-full w-full rounded-lg object-cover overflow-hidden"/>
        </AspectRatio>
        <div className="flex flex-col gap-5 justify-between items-start p-5">
            <div className="flex justify-start items-center gap-3">
                <div className="flex gap-2 items-center justify-start">
                    <Link to="/author/name" className="w-8 h-8 rounded-full overflow-hidden">
                        <img src="/images/author.jpg" alt="author-name" className="w-full h-full object-cover overflow-hidden"/>
                    </Link>
                    <h6 className="text-sm text-gray-500">By <Link to="/author/name" className="text-red-600">Amit Jha</Link></h6>
                </div>
                <span className="text-sm text-gray-500">|</span>
                <div className="text-sm text-gray-500">October 21, 2023</div>
            </div>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100"><Link to="/title">Modern and colorful style of caricatures created by AI</Link></h2>
            <div className="flex justify-between items-center gap-2 w-full">
                <div className="flex justify-start items-center gap-2">
                    <div className="flex gap-2 items-center cursor-pointer rounded-full px-3 py-1 bg-rose-50 hover:bg-rose-50 hover:text-red-500">
                        <Heart size={18}/>
                        <span className="text-base">50</span>
                    </div>
                    <div className="flex gap-2 items-center cursor-pointer rounded-full px-3 py-1 bg-rose-50 hover:bg-rose-50 hover:text-red-500">
                        <MessageSquareText  size={18}/>
                        <span className="text-base">50</span>
                    </div>
                </div>                            
                <div className="flex gap-2 justify-end items-center">
                    <span>2 min read</span>
                    <div className="flex items-center cursor-pointer rounded-full px-3 py-1 bg-rose-50 hover:bg-rose-50 hover:text-red-500">
                        <Bookmark  size={18}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleBlogCard