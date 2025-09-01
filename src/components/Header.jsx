import { Link, BrowserRouter as Router } from "react-router-dom";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <Router>
      <header className=" flex justify-between items-center px-6 py-4 rounded-2xl">
        {/* Left Section */}
        <div className="flex items-center gap-6 px-2 py-1 rounded-full">
          <Link to="/technology" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">O</span>
            </div>
            <span className="text-gray-800 font-medium">Technology</span>
          </Link>
          <Link to="/pricing" className="text-gray-800 font-medium">
            Pricing
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 px-2 py-1 rounded-full">
          <Link to="/about" className="text-gray-800 font-medium">
            About
          </Link>
          <Link to="/blog" className="text-gray-800 font-medium">
            Blog
          </Link>
          <Link
            to="/demo"
            className="bg-black text-white px-4 py-1 rounded-full hover:bg-gray-800 transition"
          >
            View Demo
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden block">
          <Menu size={24} />
        </div>
      </header>
    </Router>
  );
}
