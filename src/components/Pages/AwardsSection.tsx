import { motion } from "framer-motion";

interface IAwards {
  title: string;
  Issuer: string;
  Issuedate: string;
  Description: string;
  ImageUrl?: string;
}

const awards: IAwards[] = [
  {
    title: "Outstanding Service Award 🏆",
    Issuer: "Brainerhub Solutions",
    Issuedate: "May 2023",
    Description: "Awarded for outstanding contributions and dedication.",
    ImageUrl: "",
  },
  {
    title: "GirlScript Winter of Contributing 2021 🥇",
    Issuer: "GirlScript Foundation",
    Issuedate: "Dec 2021",
    Description:
      "Recognized for active participation and contributions from September to November 2021.",
    ImageUrl: "",
  }
];

const AwardCard = ({ award, index }: { award: IAwards; index: number }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200"
  >
    <div className="flex flex-col items-center">
      {/* <img
        src={award.ImageUrl || "/default-award-image.jpg"}
        alt={award.title}
        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-300 shadow-md"
        aria-label={`Image for ${award.title}`}
      /> */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{award.title}</h2>
      <p className="text-sm font-medium text-gray-500 mb-1">{award.Issuer}</p>
      <p className="text-sm text-gray-400 italic mb-2">{award.Issuedate}</p>
      <p className="text-center text-gray-600 mt-2">{award.Description}</p>
    </div>
  </motion.div>
);

const AwardsSection = () => {
  return (
    <div className="container mx-auto p-4 mt-5">
      <h1 className="font-bold text-black underline text-center text-4xl mb-8">
        Honors & Awards
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-h-[80vh] overflow-y-auto">
        {awards.map((award, index) => (
          <AwardCard key={index} award={award} index={index} />
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
