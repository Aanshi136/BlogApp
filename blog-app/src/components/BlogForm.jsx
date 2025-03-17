import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const BlogForm = ({ addBlog,  existingBlog }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (existingBlog) {
      setName(existingBlog.name || " ");
      setTitle(existingBlog.title || " ");
      setContent(existingBlog.content || " ");
    }
  }, [existingBlog]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const blogData = { id: existingBlog?.id, name, title, content };  

    addBlog(blogData);  
    
    navigate("/blogs");
    
    
  };


  return (
    <div className="p-6 max-w-lg mx-auto bg-transparent bg- shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-primary  ">Add a Blog</h2>
      <form onSubmit={handleSubmit}  className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          
          className="w-full p-2 border "
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your blog..."
          className="w-full p-2 border"
          rows="4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-btn text-white p-2 rounded">
        {existingBlog ? "Update Blog" : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
