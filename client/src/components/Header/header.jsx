import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="h-8 w-8 rounded bg-blue-600"></div>
            <span className="font-bold text-xl text-gray-900">apna</span>
          </Link>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="flex-1 flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs, skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="ml-2 w-full outline-none text-sm"
              />
            </div>
          </form>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Jobs
            </Link>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Companies
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Career Guide
            </a>
          </div>

          {/* Login/Register Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-900 hover:bg-gray-50 transition-colors">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Register
            </button>
          </div>

          {/* Mobile Header - Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="flex md:hidden items-center gap-4 text-gray-900"
          >
            <Menu size={24} />
          </button>

        </div>
      </header>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="bg-white h-full w-72 p-5 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded bg-blue-600"></div>
                <span className="font-bold text-xl">apna</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-gray-600 hover:text-gray-900">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mb-8 flex-1">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="text-gray-900 hover:text-blue-600 font-medium transition-colors"
              >
                Jobs
              </Link>
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                Companies
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                Career Guide
              </a>
            </nav>

            <div className="space-y-3 border-t border-gray-200 pt-4">
              <button className="w-full px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-900 hover:bg-gray-50 transition-colors">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;