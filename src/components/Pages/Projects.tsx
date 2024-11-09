import React from "react";
import CustomCarousel from "./CustomCarousel";
import newsPortal from "../../assets/images/newsportal.png";
import clockIt from "../../assets/images/clockIt.png";

const projectsData = [
  {
    id: 1,
    title: "Clock-It",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iste tempore molestiae cupiditate nesciunt odio quaerat voluptatibus minus assumenda error?",
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
    title: "Project Three",
    description: "Description for project three.",
    imageUrl:
      "https://www.projectstoday.com/images/PTHomePage2023/unlockImg-4.jpg",
    githubUrl: "",
    siteUrl:""
  },
  {
    id: 4,
    title: "Project Four",
    description: "Description for project four.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDu_A4GNMCGrX6wW78z69-g6zBIhag5ThjSw&s",
    githubUrl: "",
    siteUrl:""
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
