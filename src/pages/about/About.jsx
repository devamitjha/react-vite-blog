import React,{useState, useEffect} from 'react'

const About = () => {
  const [post, setPost] = useState([]);
  const postData = "https://jsonplaceholder.typicode.com/posts";

  const getData = async()=>{
    const data = await fetch(postData);
    const allPosts = await data.json();
    setPost(allPosts);
  }

  useEffect(()=>{
   getData();
    // fetch(postData)
    //   .then((response)=>{
    //     if(!response.ok){
    //       console.log("womething wrong");
    //     }
    //     return response.json();
    //   })
    //   .then((data)=>{
    //     setPost(data);
    //   })
    //   .catch((err)=>{
    //     console.log(err);
    //   })
  },[])

  console.log(post);

  return (
    <div className="w-full flex flex-1 h-full">
      <div className="flex flex-col space-y-6">
        {
          post.slice(0,20).map((item)=>(
            <div key={item.title} className="flex justify-between flex-col items-start gap-4 p-6 bg-white border border-gray-300 rounded-md">
              <div className="text-lg font-semibold">{item.title}</div>
              <div className="text-base">{item.body}</div>
            </div>
          ))
        }        
      </div>
    </div>
  )
}

export default About