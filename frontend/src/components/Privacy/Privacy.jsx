import React from "react";
import { motion } from "framer-motion";
import privacyimg from "../../Assets/privacy.svg";

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: { delay: index * 0.2, duration: 0.5 },
  }),
};

const Privacy = () => {
  const rules = [
    "Exam content must remain confidential and secure.",
    "Personal student data should be protected and encrypted.",
    "Online monitoring should respect privacy laws and policies.",
    "Secure communication channels must be used for exam-related matters.",
    "Anonymous grading should be implemented where possible.",
  ];

  return (
    <div className="flex flex-col min-h-screen md:flex-row items-center justify-between p-8 bg-gray-100 rounded-xl shadow-lg">
      {/* Privacy Rules */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-4xl font-bold text-gray-800">Exam Privacy Rules</h2>
        <ul className="text-gray-600 text-[20px] space-y-2">
          {rules.map((rule, index) => (
            <motion.li
              key={index}
              className="flex items-center"
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              🎯 {rule}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* SVG Image */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img src={privacyimg} alt="Privacy Illustration" className="w-[35vw]" />
      </div>
    </div>
  );
};

export default Privacy;
