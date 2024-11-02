import React from "react";
import mainPicture from "./../assets/images/cartoonlogo.png";

const Home: React.FC = () => {
  return (
    <>
  <div className="flex flex-col md:flex-row items-center justify-center  p-8 ">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start justify-center p-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">I'm Premraj Deore</h1>
        <h3 className="text-2xl font-medium text-gray-600">Fullstack Developer</h3>
        <p className="text-lg mt-4 max-w-md text-gray-500">
          Passionate about building responsive web applications with modern technologies.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex items-center justify-center p-4">
        <img src={mainPicture} alt="Portfolio" className="w-3/4 md:w-2/3 lg:w-1/2 " />
      </div>
    </div>
    </>
  );
};

export default Home;
