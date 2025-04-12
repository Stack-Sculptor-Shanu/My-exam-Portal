import React from "react";
import { motion } from "framer-motion";
import aboutimg from "../../Assets/about.svg";

const About = () => {
    return (
        <div className=" flex flex-col min-h-screen md:flex-row items-center justify-between p-16 bg-gray-100 rounded-xl shadow-lg">
            {/* About Section */}
            <div className="md:w-1/2 space-y-4 text-[20px]">
                <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
                <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    📌 We are dedicated to providing high-quality education and resources to help students succeed. Our mission is to ensure academic excellence through integrity, privacy, and secure learning environments.
                </motion.p>
                <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    📌 Our platform upholds the highest standards of confidentiality and fairness in delivering educational materials and assessments.
                </motion.p>
                <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    📌 We conduct tests focused on software development, programming, and aptitude to help learners enhance their skills and knowledge.
                </motion.p>
            </div>

            {/* SVG Image */}
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                <img src={aboutimg} alt="About Illustration" className="w-[45vw]" />
            </div>
        </div>
    );
};

export default About;
