import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Blogs from './Blogs';
const UserBlogs = () => {
  const [blogs, setBlogs] = useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async() => {
      const res = await axios.get(`http://localhost:5000/api/blog/user/${id}`).catch(err=>console.log(err));
      const data = await res.data;
      return data;
  }
  useEffect(()=>{
    sendRequest().then((data)=>setBlogs(data.blogs.blogs))
  },[])
  console.log(blogs);
  return (
    <div>{blogs && blogs.map((blog, index) => (
      <Blogs title={blog.title} description={blog.description} imageURL={blog.image} userName={blog.userName}/>
    ))}</div>
  )
}

export default UserBlogs