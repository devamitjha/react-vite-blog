import React, {useState} from 'react'
import { Link, useNavigate  } from 'react-router'
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Heart, MessageSquareText, Bookmark, Facebook, Twitter, Linkedin, Undo2, Ghost  } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"


const SinglePost = () => {
  const [openReply, setOpenReply] = useState(false);
  let navigate = useNavigate();

  const replyComment = ()=>{
    setOpenReply(!openReply);
  }
  const cancleComment = ()=>{
    setOpenReply(false);
  }
  return (
    <div className="singlePage">
      <div className="p-6 bg-white border border-gray-300 rounded-md">
        <div className="sectionTitle">
          <Badge variant="destructive" onClick={()=>navigate("/category/categoryname")} className="cursor-pointer">Category Name</Badge>
          <h1 className="text-4xl font-bold my-8">Modern and colorful style of caricatures created by AI</h1>
          <Separator className="mb-6" />
            <div className="flex justify-between gap-4">
              <div className="flex justify-start items-start gap-3">
                <Link to="/author/name" className="w-10 h-10 rounded-full overflow-hidden">
                    <img src="/images/author.jpg" alt="author-name" className="w-full h-full object-cover overflow-hidden"/>
                </Link>
                <div className="flex items-start flex-col justify-start">                
                    <h6 className="text-sm text-gray-500">By <Link to="/author/name" className="text-red-600">Amit Jha</Link></h6>
                    <div className="text-sm text-gray-500">October 21, 2023</div>
                </div> 
              </div>
              <div className="flex justify-end items-center gap-2">
                <div className="flex gap-2 items-center cursor-pointer rounded-full px-3 py-1 hover:bg-rose-50 hover:text-red-500">
                  <Heart size={18}/>
                  <span className="text-base">50</span>
                </div>
                <div className="flex gap-2 items-center cursor-pointer rounded-full px-3 py-1 hover:bg-rose-50 hover:text-red-500">
                  <MessageSquareText  size={18}/>
                  <span className="text-base">50</span>
                </div>
                <div className="flex gap-2 items-center cursor-pointer rounded-full p-2 bg-gray-100 hover:bg-rose-50 hover:text-red-500">
                  <Bookmark  size={18}/>
                </div>
              </div>
            </div>
        </div>
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg mt-10 mb-6">
          <img src="/images/author.jpg" alt="author-name" className="h-full w-full rounded-lg object-cover overflow-hidden"/>
        </AspectRatio>
        <div className="flex flex-col space-y-4 text-md text-black/90">
          <p>Qproin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. As technology continues to advance at a rapid pace, the way we work and interact with our devices is also changing. One area that has seen significant growth in recent years is the intersection of user experience (UX) and user interface (UI) design, artificial intelligence (AI), and the modern work station.</p>
          <p>In this blog post, we will explore how these three elements are coming together to revolutionize the workplace.Nulla aliquam rerum nesciunt velit iusto. Deserunt fugiat tempora sed voluptatibus neque suscipit minima qui. Beatae ipsa autem adipisci. Iusto numquam maxime vitae natus molestiae.</p>
          <h2 className="text-2xl font-semibold">What's up with UX and UI?</h2>
          <p>UX/UI design refers to the process of designing products, such as software, that are easy to use and intuitive for the user. This includes everything from the layout of buttons and menus to the overall aesthetic of the product. In the workplace, good UX/UI design can make a huge difference in terms of productivity and user satisfaction.</p>
          <p>AI, on the other hand, is the simulation of human intelligence in machines. It has the potential to automate many tasks and make them more efficient. In the workplace, AI can be used to assist with tasks such as scheduling, data analysis, and customer service.</p>
        </div>
        <Separator className="my-6" />
        <div className="flex justify-start items-center flex-wrap gap-4">
          <Link to="/tags/tagname" className="flex items-center rounded-full border bg-white px-3 py-1 text-sm hover:bg-black hover:text-white">#Crypto</Link>
          <Link to="/tags/tagname" className="flex items-center rounded-full border bg-white px-3 py-1 text-sm hover:bg-black hover:text-white">#cryptocurrency</Link>
          <Link to="/tags/tagname" className="flex items-center rounded-full border bg-white px-3 py-1 text-sm hover:bg-black hover:text-white">#Bitcoin</Link>
          <Link to="/tags/tagname" className="flex items-center rounded-full border bg-white px-3 py-1 text-sm hover:bg-black hover:text-white">#Block Chain</Link>
        </div>
        <Separator className="my-6" />
          <div className="flex justify-between items-center gap-4">
            <div className="flex justify-start items-start gap-3 w-full">               
              <Avatar className="w-20 h-20">
                <AvatarImage src="/images/author.jpg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>                
              <div className="flex items-start flex-col justify-start space-y-1">                
                  <p className="text-sm text-gray-500">Written by</p>
                  <h6 className="text-sm text-gray-500"><Link to="/author/name" className="text-red-600">Amit Jha</Link></h6>
                  <div className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div> 
            </div>
            <div className="flex flex-col space-y-2 items-center justify-between">
              <div className="flex w-8 h-8 bg-gray-300 rounded-full border justify-center items-center cursor-pointer  hover:bg-black hover:text-white"><Facebook size={16}/></div>
              <div className="flex w-8 h-8 bg-gray-300 rounded-full border justify-center items-center cursor-pointer  hover:bg-black hover:text-white"><Twitter size={16}/></div>
              <div className="flex w-8 h-8 bg-gray-300 rounded-full border justify-center items-center cursor-pointer  hover:bg-black hover:text-white"><Linkedin size={16}/></div>
            </div>
          </div>
      </div>
      <div className="p-6 bg-white border border-gray-300 rounded-md mt-6">
          <h3 className="text-2xl font-bold">Responses (10)</h3>
          <div className="mt-6">
            <Textarea placeholder="Type your Comment here." id="comment" />
            <Button className="mt-4 cursor-pointer">Post Comment</Button>
          </div>
      </div>
      <div className="p-6 bg-white rounded-md mt-6 flex justify-start items-start gap-4">
        <Avatar className="w-8 h-8">
          <AvatarImage src="/images/author.jpg" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar> 
        <div className="border border-gray-300 rounded-md w-full p-6">
          <div className="flex justify-start items-center gap-3">
              <h6 className="text-sm text-gray-500">By <Link to="/author/name" className="text-red-600">Amit Jha</Link></h6>
              <span className="text-sm text-gray-500">|</span>
              <div className="text-sm text-gray-500">October 21, 2023</div>
          </div>          
          <div className="mt-2 space-y-2 text-base text-gray-600">
            <p>Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.</p>
          </div>
          {
            openReply && 
            <div className="mt-6">
              <Textarea placeholder="Type your Comment here." id="reply" />
                <div className="flex justify-start items-center gap-4">
                  <Button className="mt-4 cursor-pointer" variant={Ghost} onClick={cancleComment}>Cancle</Button>
                  <Button className="mt-4 cursor-pointer" onClick={replyComment}>Submit</Button>
                </div>
            </div>
          }
          {
            !openReply && <div className="flex justify-start items-center mt-4 gap-2">
              <div className="flex gap-2 items-center cursor-pointer rounded-full px-3 py-1 bg-rose-50 hover:bg-rose-80 hover:text-red-500">
                <Heart size={16}/>
                <span className="text-[12px]">50</span>
              </div>
              <div className="flex gap-2 items-center cursor-pointer rounded-full px-3 py-1 bg-rose-50 hover:bg-rose-80 hover:text-red-500" onClick={replyComment}>
                <Undo2 size={16} className="transform scale-y-[-1]"/>
                <span className="text-[12px]">Reply</span>
              </div>
            </div> 
            
          }
          
        </div>
      </div>
    </div>
  )
}

export default SinglePost
