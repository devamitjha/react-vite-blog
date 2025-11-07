import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { NavLink, Outlet } from 'react-router';

import {
 Send
} from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import AboutUs from './components/widgets/AboutUs';
import Tags from './components/widgets/Tags';

const SideBarMenu = ()=>{
  const MenuData=[
    {title:"home", url:"/"},   
    {title:"Cryptocurrency", url:"/category/cryptocurrency"},
    {title:"Forex & Currency Markets", url:"/category/forex-currency-markets"},
    {title:"Commodities & Metals", url:"/category/commodities-metals"},
    {title:"Artificial Intelligence", url:"/category/artificial-intelligence"},
    {title:"Tech Trends", url:"/category/tech-trends"},
    {title:"World Politics", url:"/category/world-politics"},
    {title:"About", url:"about"},
    {title:"Contact", url:"contact"},
  ]
  return(
    <ul className="space-y-1">
      {MenuData.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.url}
            className={({ isActive }) =>
              `block p-2 rounded hover:bg-gray-100 text-sm uppercase ${
                isActive ? "text-black font-semibold" : "text-gray-700"
              }`
            }
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

const Layout = () => {
  return (  
    <div className='w-full bg-gray-50 min-h-screen'>
        <Header/>
        <div className="container mx-auto flex justify-between items-start gap-8 mt-4 relative">
          <div className="leftSidebar w-[20%] sticky top-2">
            <SideBarMenu/>
            <div className="w-full bg-white my-4 rounded-md px-2 pt-2 pb-4">
                <p className="text-base mb-2">Subscribe for newsletter</p>
                <InputGroup>
                  <InputGroupInput placeholder="Enter Email Address" />
                  <InputGroupAddon align="inline-end">
                    <Send className="cursor-pointer"/>
                  </InputGroupAddon>
                </InputGroup>
            </div>
          </div>
          <div className="flex flex-1 h-full">
            <Outlet/>
          </div>
          <div className="rightSideBar w-[20%] sticky top-2">
            <AboutUs/>
            <Tags/>
          </div>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Layout