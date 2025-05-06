import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <nav className="bg-blue-600 dark:bg-gray-900 text-white px-4 py-3 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl">Loan Calculator</div>

          <ul className="hidden md:flex gap-6 items-center">
            <li className="hover:underline cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/exchange-rates">Exchange Rates (Live)</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/error">Error Page</Link>
            </li>
            {/* Dark mode toggle */}
            <li>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-600">
                  <div
                    className={`dot absolute w-5 h-5 bg-white rounded-full transition-all duration-300 transform ${
                      darkMode ? "translate-x-5" : "translate-x-1"
                    }`}
                  ></div>
                </div>
              </label>
            </li>
          </ul>

          <button className="md:hidden" onClick={toggleMenu}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Sidebar overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-600">
          <span className="text-lg font-semibold dark:text-white">Menu</span>
          <button onClick={toggleMenu}>
            <X size={24} className="dark:text-white" />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4 text-black dark:text-white">
          <li onClick={closeMenu}><Link to="/">Home</Link></li>
          <li onClick={closeMenu}><Link to="/exchange-rates">Exchange Rates</Link></li>
          <li onClick={closeMenu}><Link to="/about">About</Link></li>
          <li onClick={closeMenu}><Link to="/error">Error Page</Link></li>
        </ul>
      </div>
    </>
  );
}
