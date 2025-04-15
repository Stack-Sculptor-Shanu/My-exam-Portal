import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col min-h-screen md:flex-row items-center justify-center p-8 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-lg transition-colors duration-300">
      {/* Contact Form */}
      <div className="md:w-2/3 space-y-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Contact Us</h2>
        <motion.form
          className="space-y-4 mx-auto max-w-md"
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
        >
          <motion.div variants={inputVariants} custom={0}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Your Name"
              required
            />
          </motion.div>
          <motion.div variants={inputVariants} custom={1}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Your Email"
              required
            />
          </motion.div>
          <motion.div variants={inputVariants} custom={2}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-2 rounded-lg transition-colors dark:bg-blue-700 dark:hover:bg-blue-600"
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
        <img src={contactimg} alt="Contact Illustration" className="w-[35vw] dark:brightness-90" />
      </motion.div>
    </div>
  );
};

export default Contact;
