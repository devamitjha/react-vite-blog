import React from 'react'
import { useNavigate } from 'react-router';
import { Bell } from 'lucide-react';
import Logo from './logo';
import HeaderSearch from './HeaderSearch';
import Auth from './Auth';
import { useSelector } from 'react-redux';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from './ui/badge';


const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state)=> state.user.isLoggedIn);
  const userDetails = useSelector((state)=> state.user.userDetails);
  console.log(userDetails);
  return (
    <div className="w-full bg-white shadow-1 ">
      <div className="container h-15 flex justify-between items-center mx-auto gap-10">
        <Logo/>
        <HeaderSearch/>
        {
          isLoggedIn ?
          <div className="flex flex-row flex-wrap items-center gap-4">
            <Avatar className="cursor-pointer" onClick={()=>navigate("/admin")}>
              <AvatarImage src="/images/author.jpg" alt="author" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="relative w-8 h-8 flex justify-center items-center bg-gray-100 rounded-full mr-3 cursor-pointer">
              <Bell size={18}/>
              <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums bg-red-600 text-white absolute top-0 -right-3">
                8
              </Badge>
            </div>
          </div>
          : <Auth/>
        }
        
      </div> 
    </div>
  )
}

export default Header