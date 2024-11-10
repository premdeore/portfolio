import React from "react";
import CustomCarousel from "./CustomCarousel";
import newsPortal from "../../assets/images/newsportal.png";
import clockIt from "../../assets/images/clockIt.png";
import weatherForcast from "../../assets/images/Weatherforcast.png";


const projectsData = [
  {
    id: 1,
    title: "Clock-It",
    description: "Description for project One.",
    imageUrl: `${clockIt}`,
    githubUrl: "https://github.com/premdeore/Clock-It",
    siteUrl:"https://premrajdeore27.github.io/Clock_Project/"
  },
  {
    id: 2,
    title: "News Portal",
    description: "Description for project two.",
    imageUrl:`${newsPortal}`,
    githubUrl: "https://github.com/premdeore/NewsBlogApp",
    siteUrl:"https://eager-ritchie-5a9584.netlify.app/home"
  },
  {
    id: 3,
    title: "Weather forcasting",
    description: "Description for project three.",
    imageUrl:`${weatherForcast}`,
    githubUrl: "https://github.com/premdeore/weather-forecasting",
    siteUrl:"https://unique-marshmallow-668c6f.netlify.app/"
  },
  // {
  //   id: 4,
  //   title: "Project Four",
  //   description: "Description for project four.",
  //   imageUrl:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDu_A4GNMCGrX6wW78z69-g6zBIhag5ThjSw&s",
  //   githubUrl: "",
  //   siteUrl:""
  // },
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
