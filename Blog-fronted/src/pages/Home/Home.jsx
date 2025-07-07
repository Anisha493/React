import React, { useEffect, useState } from "react";

import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  //const[title, setTitle] = useState("hi");
  //const[subTitle, setSubTitle] = useState("subTittle");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    //alert ='alerted'
    const fetchBlogs = async () => {
      const res = await axios.get("http://localhost:4000/blog");
      //console.log(res.data.data[0].title);
      //setTitle(res.data.data[0].title);
      console.log(blogs);
      setBlogs(res.data.data);
    };
    fetchBlogs();
  });
  return (
    <div>
      <Navbar />

      <div className="flex flex-col p-5 lg:px-48 lg:py-11">
        {blogs.map((item) => (
          <div key={item._id} className="bg-gray-100 p-5 mb-10">
            <h1 className="font-bold text-2xl mb-2">{item.title}</h1>
            <p className="my-3">{item.subTitle}</p>
            <p className="my-3">{item._id}</p>
            <Link to={`/blogDetail/${item._id}`} className="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded">
              Read More...
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
