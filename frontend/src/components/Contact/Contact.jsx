import React from "react";
import { motion } from "framer-motion";
import contactimg from "../../Assets/contact.svg";

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.5 },
  }),
};
const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen md:flex-row items-center justify-center p-8 bg-gray-100 rounded-xl shadow-lg">
      {/* Contact Form */}
      <div className="md:w-2/3 space-y-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
        <motion.form 
          className="space-y-4 mx-auto max-w-md"
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={inputVariants} custom={0}>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Your Name"
            />
          </motion.div>
          <motion.div variants={inputVariants} custom={1}>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Your Email"
            />
          </motion.div>
          <motion.div variants={inputVariants} custom={2}>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg resize-none"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-500"
            variants={inputVariants}
            custom={3}
          >
            Submit
          </motion.button>
        </motion.form>
      </div>

      {/* SVG Image */}
      <motion.div
        className="md:w-1/2 flex justify-center mt-6 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <img src={contactimg} alt="Contact Illustration" className="w-[35vw]" />
      </motion.div>
    </div>
  );
};

export default Contact;
