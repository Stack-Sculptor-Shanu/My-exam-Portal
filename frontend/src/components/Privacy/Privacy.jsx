import React from "react";
import { motion } from "framer-motion";
import privacyimg from "../../Assets/privacy.svg";
import { FiDownload } from "react-icons/fi";

const highlights = [
  "We collect only required student data (name, email, ID).",
  "Monitoring is active only during exams with student consent.",
  "All data and recordings are securely encrypted and time-bound.",
  "Only authorized personnel can access student info.",
  "AI flags behavior, but humans always review before decisions.",
  "Data auto-deletes after 30 to 90 days based on type.",
  "Users will be notified of any privacy policy changes.",
];

const Privacy = () => {
  return (
    <section className="relative min-h-screen px-6 py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      {/* Decorative Background SVG */}
      <img
        src={privacyimg}
        alt="Privacy Illustration"
        className="absolute opacity-10 w-[700px] right-0 bottom-0 pointer-events-none hidden md:block dark:brightness-75"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-gray-800 dark:text-white"
        >
          Privacy Highlights
        </motion.h2>

        {/* Quick Points */}
        <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg text-left md:text-center">
          {highlights.map((point, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-2 justify-start md:justify-center"
            >
              <span className="text-blue-500">✔</span> {point}
            </motion.p>
          ))}
        </div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10"
        >
          <a
            href="/privacy-policy.pdf" // Replace with actual PDF path
            download
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-lg transition-all duration-300"
          >
            <FiDownload className="text-xl" />
            Download Full Privacy Policy
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;
