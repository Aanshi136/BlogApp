import { FaEdit, FaTrash } from "react-icons/fa";

const BlogCard = ({ blog, onEdit, onDelete }) => {
  // const formattedContent = blog.content.replace(/\n/g, " ");

  return (
    <div className="p-4 bg-cardBg shadow-md rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-btn">{blog.title}</h3>

        <div className="flex space-x-3">
          <button
            onClick={() => onEdit(blog)}
            className="text-btn hover:text-primary cursor-pointer"
          >
            <FaEdit size={18} />
          </button>
          <button
            onClick={() => onDelete(blog.id)}
            className="text-btn hover:text-primary cursor-pointer"
          >
            <FaTrash size={16} />
          </button>
        </div>
      </div>

      <p className="text-btn">by {blog.name}</p>
      <p className="mt-2 text-btn whitespace-break-spaces">{blog.content}</p>
    </div>
  );
};

export default BlogCard;
