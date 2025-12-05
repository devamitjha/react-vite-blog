import React from 'react'
import { Link } from 'react-router';

const Logo =()=>{
  return(
    <Link to="/" className="text-xl font-bold text-primary tracking-wide uppercase w-[20%]">
      Dev Blog
    </Link>
  );
}

export default Logo