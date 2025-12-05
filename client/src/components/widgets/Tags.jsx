import React from 'react'
import { Link } from 'react-router'

const Tags = () => {
    const TagsItem = [
        {title:"Bitcoin", url:"/tags/bitcoin"},
        {title:"Altcoins", url:"/tags/altcoins"},
        {title:"DeFi", url:"/tags/defi"},
        {title:"Forex Trading", url:"/tags/forex-trading"},
        {title:"Gold", url:"/tags/gold"},
        {title:"Crude Oil", url:"/tags/crude-oil"},
        {title:"Smart Contracts", url:"/tags/smart-contracts"},
        {title:"Blockchain", url:"/tags/blockchain"},
        {title:"Global Economy", url:"/tags/global-economy"},
        {title:"Trade Wars", url:"/tags/trade-wars"},
    ]
  return (
    <div className="rounded-md border p-4 bg-white mb-4">       
        <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-md uppercase">Popular Tags</h3>
            <div className="text-sm flex flex-wrap gap-3">  
                {
                    TagsItem.map((item)=>(
                        <Link to={item.url} key={item.url} className="text-sm border-2 bg-white px-3 py-1 flex items-center justify-center rounded-2xl hover:bg-primary hover:border-primary hover:text-white transform transition-all ease-in-out duration-150">{item.title}</Link>
                    ))
                }   
                    
            </div>
        </div>
    </div>
  )
}

export default Tags