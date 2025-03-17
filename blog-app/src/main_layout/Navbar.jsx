import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" navbar flex justify-between p-4 bg-navbar shadow-md ">
      <h1 className="text-xl font-bold text-primary">BlogSpace</h1>
      <div className="space-x-6 text-xl font-bold text-primary">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
    </nav>
  );
};

export default Navbar;
