import React from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon,CodeIcon, PersonIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';

const Navbar:React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent border-b-2 shadow-sm">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-500">
            MyPortfolio
          </Link>
        </div>
        <div className="flex space-x-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-1 transition duration-150 ease-in-out"
          >
            <HomeIcon />
            Home
          </Link>
          <Link
            to="/projects"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-1 transition duration-150 ease-in-out"
          >
            <CodeIcon />
            Projects
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-1 transition duration-150 ease-in-out"
          >
            <PersonIcon/>
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-1 transition duration-150 ease-in-out"
          >
            <EnvelopeClosedIcon/>
            Contact
          </Link>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
    // <div className='bg-black p-5 flex items-center m-5 justify-center space-x-10'>
    //             <Link to={"/"}>HOme</Link>
    //             <Link to={"/projects"}>projects</Link>
    //             <Link to={"/about"}>about</Link>
    //             <Link to={"/contact"}>contact</Link>
    // </div>