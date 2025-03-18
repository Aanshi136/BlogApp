import BlogForm from "../components/BlogForm";

const Home = ({ addBlog, existingBlog}) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[url('./assets/bg.jpg')] bg-cover bg-center">
      <div className="p-6">
        <BlogForm addBlog={addBlog}  existingBlog={existingBlog}/>
      </div>
    </div>
  );
};

export default Home;
