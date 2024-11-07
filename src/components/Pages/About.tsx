import React from "react";
import nodeLogo from "../../assets/images/nodelogo.png";
import jsLogo from "../../assets/images/javascriptLogo.png";
import HTMLLogo from "../../assets/images/HTMLLogo.png";
import CSSLogo from "../../assets/images/CSSLogo.png";
import reduxLogo from "../../assets/images/ReduxLogo.png";
import reactLogo from "../../assets/images/ReactLogo.png";
import typescriptLogo from "../../assets/images/TypescriptLogo.png";
import Bootstrap from "../../assets/images/bootstrapLogo.png";
import MaterialUI from "../../assets/images/MaterialUILogo.png";
import TailwindCSS from "../../assets/images/tailwindCssLogo.png";
import github from "../../assets/images/githubLogo.png";
import versionControl from "../../assets/images/gitVersionControlLogo.png";
import mongoDBlogo from "../../assets/images/MongodbLogo.png";
import NestJsLogo from "../../assets/images/nestjsLogo.png";
import NextJsLogo from "../../assets/images/nextjsLogo.png";
import DockerLogo from "../../assets/images/dockerLogo.png";
import jestLogo from "../../assets/images/jestLogo.png";
import awsLogo from "../../assets/images/AWSLogo.png";
import { motion } from "framer-motion";
import Timeline from "./Timeline";

const About: React.FC = () => {
  const skills = [
    { skill: "HTML", url: HTMLLogo },
    { skill: "CSS", url: CSSLogo },
    { skill: "Javascript", url: jsLogo },
    { skill: "Typescript", url: typescriptLogo },
    { skill: "ReactJs", url: reactLogo },
    { skill: "NextJs", url: NextJsLogo },
    { skill: "Redux", url: reduxLogo },
    { skill: "Bootstrap", url: Bootstrap },
    { skill: "Material-UI", url: MaterialUI },
    { skill: "Tailwind-CSS", url: TailwindCSS },
    { skill: "github", url: github },
    { skill: "Version-Control", url: versionControl },
    { skill: "Jest", url: jestLogo },
    { skill: "NodeJs", url: nodeLogo },
    { skill: "NestJs", url: NestJsLogo },
    { skill: "MongoDB", url: mongoDBlogo },
    { skill: "Docker", url: DockerLogo },
    { skill: "AWS", url: awsLogo },
  ];

  return (
    <>
      <div className="container mx-auto p-4 mt-5">
        <h2 className="font-bold flex items-end text-2xl underline">
          About
        </h2>
        
          <Timeline/>
        
      </div>
      <div className="container mx-auto p-4 mt-2">
        <h2 className="font-bold flex items-end text-2xl underline">Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((items, index) => (
            <motion.div
              key={index}
              className="text-white p-6 flex flex-col items-center justify-center rounded shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={items.url}
                alt={items.skill}
                className="w-3/4 md:w-2/3 lg:w-1/2 mb-2"
              />
              <p className="text-center text-black">{items.skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;