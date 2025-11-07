import React from 'react'
import Logo from './logo';
import HeaderSearch from './HeaderSearch';
import Auth from './Auth';


const Header = () => {
  return (
    <div className="w-full bg-white shadow-1 ">
      <div className="container h-15 flex justify-between items-center mx-auto gap-10">
        <Logo/>
        <HeaderSearch/>
        <Auth/>
      </div> 
    </div>
  )
}

export default Header