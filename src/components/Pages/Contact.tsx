import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MobileIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import React from "react";
import LeetcodeIcon from "../../assets/image-svg/leetcode-svgrepo-com.svg";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <div className="p-9 text-center space-y-5">
      <div className="flex items-center justify-center space-x-12">
        <motion.a
          href="https://www.linkedin.com/in/premraj-deore-34a93314a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition transform"
          whileHover={{ scale: 1.5 }} // Scale up on hover
        >
          <LinkedInLogoIcon className="w-6 h-6 cursor-pointer text-[#0077B5] hover:text-[#005582] transition-colors duration-300" />
        </motion.a>

        <motion.a
          href="https://github.com/Premdeore" // Replace with your GitHub profile link
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition transform hover:scale-110" // Added hover scale effect
          whileHover={{ scale: 1.5 }} // Scale up on hover
        >
          <GitHubLogoIcon
            className="w-6 h-6 cursor-pointer"
            style={{
              backgroundImage: "linear-gradient(45deg, #333, #555)", // Dark theme gradient for GitHub
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          />
        </motion.a>

        <motion.a
          href="https://twitter.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="transition transform"
          whileHover={{ scale: 1.5 }} // Scale up on hover
        >
          <TwitterLogoIcon className="w-6 h-6 cursor-pointer text-[#1DA1F2] hover:text-[#0A66C2] transition-colors duration-300" />
        </motion.a>

        <motion.a
          href="https://leetcode.com/u/Premraj27/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
          className="transition transform"
          whileHover={{ scale: 1.5 }} // Scale up on hover
        >
          <img
            src={LeetcodeIcon}
            alt="Portfolio"
            className="w-6 h-6 cursor-pointer text-[#F9C24A] hover:text-[#C3A40D] transition-colors duration-300"
          />
        </motion.a>
      </div>

      {/* Phone Number */}
      <div className="flex items-center justify-center space-x-2 text-gray-700">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.1 }} // Scale up on hover
        >
          <MobileIcon className="w-5 h-5 text-gray-500 hover:text-green-500 transition duration-300 ease-in-out" />
          <a
            href="tel:9689997518"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            9689997518
          </a>
        </motion.div>
      </div>

      {/* Email */}
      <div className="flex items-center justify-center space-x-2 text-gray-700">
        <motion.div
          className="flex items-center space-x-2" // Added space-x-2 for spacing
          whileHover={{ scale: 1.1 }} // Scale up on hover
        >
          <EnvelopeClosedIcon className="w-5 h-5 text-gray-500 transition duration-300 ease-in-out hover:text-blue-600 hover:scale-110 hover:rotate-12" />
          <a
            href="mailto:premrajdeore27@gmail.com"
            className="text-gray-600 transition duration-300 ease-in-out hover:text-gray-800"
          >
            premrajdeore27@gmail.com
          </a>
        </motion.div>
      </div>
      {/* <hr className="w-full border-black"/> */}
    </div>
  );
};

export default Contact;
