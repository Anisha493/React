import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();


    const handleTitleChange = (e)=>{
        //console.log(e.target.value);
        setTitle(e.target.value);
        //console.log(title);
    }
    const handleSubTitleChange = (e)=>{
        //console.log(e.target.value);
        setSubTitle(e.target.value);
        //console.log(subTitle);
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(title, subTitle, description);

        const res = await axios.post('http://localhost:4000/blog',{
            title,
            subTitle,
            description
        });
        
        if (res.status ==200) {
            alert("Successfully created Blog")
            navigate("/home")
        }
    }
   

  return (
    <div>
      <Navbar />
      <section className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create a New Blog Post
        </h1>
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              id="title"
              name="title"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter blog title"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subtitle"
              className="block text-gray-700 font-semibold mb-2"
            >
              Sub Title
            </label>
            <input
              type="text"
              value={subTitle}
              onChange={handleSubTitleChange}
              id="subtitle"
              name="subtitle"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter blog title"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              name="description"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your blog content here"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Publish Post
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default CreateBlog