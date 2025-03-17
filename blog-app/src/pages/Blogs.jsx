import { useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { useState } from "react";

const Blogs = ({ blogs, onDelete, onEdit }) => {
  console.log(blogs);

  const navigate = useNavigate();

  const handleEdit = (blog) => {
    onEdit(blog);

    navigate("/");
  };

  return (
    <div className="p-6 grid gap-4">
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          blog={blog}
          onEdit={() => handleEdit(blog)}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Blogs;
