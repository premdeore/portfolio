import React from "react";
import mainPicture from "./../assets/images/cartoonlogo.png";
import pencilTexture from "./../assets/images/pencil_Texture.png";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center h-screen justify-center p-8">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start justify-center p-4">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            I'm Premraj Deore
          </h1>
          <h3 className="text-2xl font-medium text-gray-600">
            Fullstack Developer
          </h3>
          <p className="text-lg mt-4 max-w-md text-gray-500">
            Passionate about building responsive web applications with modern
            technologies.
          </p>
        </div>

        {/* Right Section */}
        {/* <div className="md:w-1/2 flex items-center justify-center p-4">
        <img src={mainPicture} alt="Portfolio" className="w-3/4 md:w-2/3 lg:w-1/2 " />
      </div> */}
        <div
          className="md:w-1/2 flex items-center justify-center p-4 z-10"
          style={{
            backgroundImage: `url(${pencilTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
          }}
        >
          <img
            src={mainPicture}
            alt="Portfolio"
            className="w-3/4 md:w-2/3 lg:w-1/2"
          />
        </div>
      </div>
      <About/>
      <Projects/>
      <hr/>
      <hr/>
      <hr/>
      <Contact/>
    </>
  );
};

export default Home;
