import React from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Separator } from '@/components/ui/separator'
import { Bookmark} from 'lucide-react'

import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import SingleBlogCard from '@/components/blogCard/SingleBlogCard'

const Author = () => {
  return (
    <div className="author-page w-full">
        <div className="p-6 bg-white borderborder-gray-300 rounded-md">
            <div className="flex justify-center items-center flex-col">
                <Avatar className="w-20 h-20">
                    <AvatarImage src="/images/author.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>   
                <h2 className="text-[20px] font-semibold mt-2">Amit Jha</h2>
            </div>
            <div className="flex justify-center items-center gap-6 w-full mt-6 h-12">
                <div className="flex items-center flex-col">
                    <p className="font-semibold">1</p>
                    <p className="text-gray-500">Posts</p>
                </div>
                <Separator className="my-4" orientation="vertical"/>
                <div className="flex items-center flex-col">
                    <p className="font-semibold">1</p>
                    <p className="text-gray-500">Total Views</p>
                </div>
                <Separator className="my-4" orientation="vertical"/>
                <div className="flex items-center flex-col">
                    <p className="font-semibold">1</p>
                    <p className="text-gray-500">Total Likes</p>
                </div>
            </div>
            <div className="filter flex justify-between items-center mt-20 mb-8">
                <div className="flex gap-2 items-center cursor-pointer rounded-full px-4 py-2 border hover:bg-rose-50 hover:text-red-500">
                  <Bookmark  size={18}/>
                   <span className="text-base">Saved</span>
                </div>
                <NativeSelect>
                    <NativeSelectOption value="">Most Recent</NativeSelectOption>
                    <NativeSelectOption value="most-appreciated">Most Appreciated</NativeSelectOption>
                    <NativeSelectOption value="most-discussed">Most Discussed</NativeSelectOption>
                    <NativeSelectOption value=">most-viewed">Most Viewed</NativeSelectOption>
                    <NativeSelectOption value="most-lked">Most Liked</NativeSelectOption>
                </NativeSelect>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <SingleBlogCard/>    
                ))}
                            
            </div>
        </div>
    </div>
  )
}

export default Author