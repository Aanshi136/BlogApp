import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./main_layout/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";


const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null); 
 

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/posts");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const addBlog = async (blog) => {
    if (blog.id) {
      try {
        await axios.put(`http://localhost:5000/api/posts/${blog.id}`, blog);
        setBlogs(blogs.map((b) => (b.id === blog.id ? { ...blog, id: blog.id } : b)));
        setEditingBlog(null);
      } catch (error) {
        console.error("Error updating blog:", error);
      }
    } else {
      try {
        const response = await axios.post("http://localhost:5000/api/posts", blog);
        setBlogs([...blogs, { ...blog, id: response.data.id }]);
      } catch (error) {
        console.error("Error adding blog:", error);
      }
    }
  };

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`);
      setBlogs  (blogs.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const onEdit = (blogs) => {
    setEditingBlog(blogs);
   
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addBlog={addBlog} existingBlog={editingBlog} />} />
        <Route path="/blogs" element={<Blogs blogs={blogs} onEdit={onEdit} onDelete={deleteBlog} />} />
        
      </Routes>
    </Router>
  );
};

export default App;
