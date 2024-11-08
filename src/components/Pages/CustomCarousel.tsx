
import React, { useState, useEffect } from 'react';

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
    window.addEventListener('resize', updateScreenWidth);
    updateScreenWidth();
    return () => window.removeEventListener('resize', updateScreenWidth);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % projects.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + projects.length) % projects.length
    );
  };

  // Determine visible projects based on screen size
  const visibleProjects = isMobile
    ? [projects[currentIndex]]
    : [
        projects[currentIndex],
        projects[(currentIndex + 1) % projects.length],
      ];

  return (
    <div className="flex items-center justify-center space-x-4 p-6">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="p-4 bg-gradient-to-r from-green-200 to-blue-300 text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none"
        aria-label="Previous"
      >
        &lt;
      </button>

      {/* Visible Projects */}
      <div className={`flex ${isMobile ? 'space-x-0' : 'space-x-6'} w-full md:w-2/3 justify-center mb-10`}>
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="relative flex flex-col items-center space-y-6 w-full md:w-1/2 p-4 bg-white rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="object-cover w-full h-64 md:h-80 rounded-lg shadow-md transition-transform transform duration-500 ease-in-out"
            />
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="p-4 bg-gradient-to-l from-green-200 to-blue-300 text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none"
        aria-label="Next"
      >
        &gt;
      </button>
    </div>
  );
};

export default CustomCarousel;
