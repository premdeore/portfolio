import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon,CodeIcon, PersonIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';

// Array of menu items for easier configuration
const menuItems = [
  { path: '/', label: 'Home', icon: <HomeIcon /> },
  { path: '/projects', label: 'Projects', icon: <CodeIcon /> },
  { path: '/about', label: 'About', icon: <PersonIcon /> },
  { path: '/contact', label: 'Contact', icon: <EnvelopeClosedIcon /> },
];

const Navbar:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
<nav className="absolute top-0 left-0 right-0 z-50 bg-transparent border-b-2 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-500">
              MyPortfolio
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-gray-600 hover:text-gray-900 flex items-center gap-1 transition duration-150 ease-in-out"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={handleToggle}
              className="text-gray-600 bg-white hover:text-gray-900 focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md border-t border-gray-200"
        >
          <div className="px-4 pt-2 pb-4 space-y-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block text-gray-600 hover:text-gray-900 flex items-center gap-1 transition duration-150 ease-in-out"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar