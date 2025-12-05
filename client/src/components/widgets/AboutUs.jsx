import React from 'react'

const AboutUs = () => {
  return (
    <div className="rounded-md border p-4 bg-white mb-4">       
        <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-md uppercase">About Us</h3>
            <div className="flex justify-start items-center w-full gap-2">
                <div className="w-15 h-15 overflow-hidden rounded-full border-2 shadow-md">
                    <img src="/images/author.jpg" alt="author" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-md line-clamp-1">George Washington</h3>
                    <span className="text-sm line-clamp-1 text-gray-500">India</span>
                </div>
            </div>
            <div className="text-sm">
                Hello! My name is Adriana Martins working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our ticket system.
            </div>
        </div>
    </div>
  )
}

export default AboutUs