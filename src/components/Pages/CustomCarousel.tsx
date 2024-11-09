import React, { useState, useEffect } from "react";
import redGithubLogo from "../../assets/images/gitLogoBlack.png";
import liveTube from "../../assets/images/LiveTubesite.png";
import prevbtn from "../../assets/images/prevbtnLogo.png";
import nextbtn from "../../assets/images/nextrightLogo.png";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

interface CustomCarouselProps {
  projects: Project[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Update mobile state based on screen width
  useEffect(() => {
    const updateScreenWidth = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", updateScreenWidth);
    updateScreenWidth();
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  // Determine visible projects based on screen size
  const visibleProjects = isMobile
    ? [projects[currentIndex]]
    : [projects[currentIndex], projects[(currentIndex + 1) % projects.length]];

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6">
      {/* Visible Projects */}
      <div
        className={`flex ${
          isMobile ? "flex-col space-y-4" : "flex-row space-x-6"
        } w-full md:w-2/3 justify-center`}
      >
        {visibleProjects.map((project) => (
          <React.Fragment key={project.id}>
            <div
              key={project.id}
              className="relative flex flex-col items-center w-full md:w-1/2 p-4 bg-white rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="object-cover w-full h-64 md:h-80 rounded-lg shadow-md transition-transform duration-500 ease-in-out"
              />
              <div className="text-center mt-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  {project.description}
                </p>
              </div>

              {/* GitHub and Live Tube Icons */}
              <div className="flex items-center justify-center space-x-4 mt-4">
                <img
                  src={redGithubLogo}
                  alt="GitHub URL logo"
                  className="w-12 h-12 border border-black rounded-md object-contain"
                />
                <img
                  src={liveTube}
                  alt="Live Tube URL logo"
                  className="w-12 h-12 border border-black rounded-md object-contain"
                />
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Button Container */}
      {/* <div className="flex justify-center space-x-4 mt-4 md:mt-0 w-full md:w-auto">
        <button
          onClick={handlePrev}
          className="px-6 py-3 bg-gradient-to-r text-white shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-300"
          aria-label="Previous"
        >
          <img
            src={prevbtn}
            alt="prev button logo"
            className="w-12 h-12 border border-black rounded-md object-contain"
          />{" "}
        </button>

        <button
          onClick={handleNext}
          className="px-6 py-3 bg-gradient-to-r text-white shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-300"
          aria-label="Next"
        >
          <img
            src={nextbtn}
            alt="next button logo"
            className="w-12 h-12 border border-black rounded-md object-contain"
          />{" "}
        </button>
      </div> */}
      <div className="flex justify-center space-x-4 mt-4 md:mt-0 w-full md:w-auto">
  {/* Previous Button */}
  <button
    onClick={handlePrev}
    className="p-2 bg-gradient-to-r text-white rounded-full shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300"
    aria-label="Previous"
  >
    <img
      src={prevbtn}
      alt="Previous button logo"
      className="w-10 h-10 border border-black rounded-full object-contain"
    />
  </button>

  {/* Next Button */}
  <button
    onClick={handleNext}
    className="p-2 bg-gradient-to-r text-white bg-white rounded-full shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300"
    aria-label="Next"
  >
    <img
      src={nextbtn}
      alt="Next button logo"
      className="w-10 h-10 border border-black bg-white rounded-full object-contain"
    />
  </button>
</div>

    </div>
  );
};

export default CustomCarousel;

// <div className="flex items-center justify-center space-x-4 p-6">
//   {/* Previous Button */}
//   <button
//     onClick={handlePrev}
//     className="p-4 bg-gradient-to-r from-green-200 to-blue-300 text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none"
//     aria-label="Previous"
//   >
//     &lt;
//   </button>

//   {/* Visible Projects */}
//   <div className={`flex ${isMobile ? 'space-x-0' : 'space-x-6'} w-full md:w-2/3 justify-center mb-10`}>
//     {visibleProjects.map((project) => (
//       <div
//         key={project.id}
//         className="relative flex flex-col items-center space-y-6 w-full md:w-1/2 p-4 bg-white rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
//       >
//         <img
//           src={project.imageUrl}
//           alt={project.title}
//           className="object-cover w-full h-64 md:h-80 rounded-lg shadow-md transition-transform transform duration-500 ease-in-out"
//         />
//         <div className="text-center">
//           <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
//           <p className="text-sm text-gray-600 mt-2">{project.description}</p>
//         </div>
//       </div>
//     ))}
//   </div>

//   {/* Next Button */}
//   <button
//     onClick={handleNext}
//     className="p-4 bg-gradient-to-l from-green-200 to-blue-300 text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none"
//     aria-label="Next"
//   >
//     &gt;
//   </button>
// </div>
