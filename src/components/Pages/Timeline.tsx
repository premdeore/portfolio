import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "Aug 2016 - Oct 2020",
    title: "Electronics and Telecommunication Engineering",
    company: "SSVPS BSD COE Dhule",
    description: "Bachelor of Engineering, graduated in 2020.",
  },
  {
    year: "July 2021 - June 2022",
    title: "junior Software Developer",
    company: "Prepbytes",
    description: "UI development for a internal platform.",
  },
  {
    year: "July 2022 - July 2024",
    title: "Software Developer Engineer",
    company: "BrainerHub Solutions",
    description: "write a code and mentor 2-3 juniors",
  },
  // {
  //   year: "Nov 2024",
  //   title: "Software Development Senior Analyst",
  //   company: "Accenture",
  //   description: "Led scalable web app development.",
  // },
];

const Timeline: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center p-4 max-w-xl mx-auto">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="relative flex flex-col items-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
        >
          {/* Circular Node */}
          <motion.div
            className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-md flex items-center justify-center animate-pulse"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-4 h-4 bg-white rounded-full shadow-inner"></div>
          </motion.div>

          {/* Connecting Line */}
          {index < experiences.length - 1 && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "2.5rem" }}
              transition={{ duration: 0.3, delay: index * 0.15 }}
              className="w-0.5 h-10 bg-gradient-to-b from-purple-600 to-transparent"
            />
          )}

          {/* Content Box */}
          <motion.div
            className="mt-4 p-4 bg-gradient-to-r bg-white  shadow-md rounded-lg text-center w-full max-w-xs"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-700">{exp.title}</h3>
            <p className="text-xs text-gray-400">{exp.year}</p>
            <p className="text-xs text-gray-800">{exp.company}</p>
            <p className="mt-1 text-gray-600 text-sm">{exp.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
