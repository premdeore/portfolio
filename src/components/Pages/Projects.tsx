import React from "react";
import CustomCarousel from "./CustomCarousel";

const projectsData = [
  {
    id: 1,
    title: "Project One",
    description: "Description for project one.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrjRWCRtytQf1MSgxvVtpbPaX-AZN1ScGU8Q&s",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description for project two.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9ZMzEIOwklMVioIiJBYnUZ9VVh0uwcHpDA&s",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description for project three.",
    imageUrl:
      "https://www.projectstoday.com/images/PTHomePage2023/unlockImg-4.jpg",
  },
  {
    id: 4,
    title: "Project Four",
    description: "Description for project four.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDu_A4GNMCGrX6wW78z69-g6zBIhag5ThjSw&s",
  },
];

const Projects: React.FC = () => {
  return (
    <>
      <div className="container mx-auto p-6 mt-5">
        <h1 className="font-bold text-black text-center mb-8 underline text-4xl mt-3">
          Projects
        </h1>
        <CustomCarousel projects={projectsData} />
      </div>
    </>
  );
};

export default Projects;
