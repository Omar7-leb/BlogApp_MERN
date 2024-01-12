import React from "react";
import Header from "./components/Header";
import {Route, Routes } from "react-router-dom";
import AddBlog from "./components/AddBlog";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import Auth from "./components/Auth";
import Blog from "./components/Blog";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn);
  return <React.Fragment>
    <header>
    <Header/>
    </header>
    <main>
       <Routes>
        <Route path="/auth" element={<Auth/>} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/myBlogs" element={<UserBlogs />} />
        <Route path="/myBlogs/:id" element={<BlogDetail />} />
        <Route path="/blogs/add" element={<AddBlog />} />
       </Routes>
    </main>
  </React.Fragment>
   ;
}

export default App;
