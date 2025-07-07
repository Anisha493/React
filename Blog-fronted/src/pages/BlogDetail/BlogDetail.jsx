import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
    const params =useParams();
    const navigate =useNavigate();
    const [blog, setBlog] = useState("");
    
    useEffect(()=>{
        const fetchBlog = async () =>{
            const res = await axios.get(`http://localhost:4000/blog/${params.id}`);
            console.log(res.data.data);
            setBlog(res.data.data);
        };
        fetchBlog();
    },[]);

    const handleDeleteClick = async () => {
      const isConfirmed =confirm("Are you sure, Do you want to delete this blog?");
      if(isConfirmed){
        await axios.delete(`http://localhost:4000/blog/${params.id}`)
        alert("blog is deleted")

        navigate("/home");
    }
  }
  return (
    <div>
        <Navbar/>
  <div className="flex flex-col p-5 lg:px-48 lg:py-11">
    <div className="bg-gray-100 p-5 mb-10">
      <h1 className="font-bold text-2xl mb-2">{blog.title}</h1>
      <h1 className="font-bold text-2xl mb-2">{blog.subTitle}</h1>
       <p className="my-3">{blog.description}</p>
      <Link to = {`/updateBlog/${blog._id}`} className="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded">
        Edit Blog
      </Link>
      <button onClick={handleDeleteClick} className="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded">
        Delete blog
      </button>
    </div>
  </div>
</div>

  );
};

export default BlogDetail;
