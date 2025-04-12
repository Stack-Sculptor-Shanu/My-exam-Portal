import React from 'react';
import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
import availExams from '../Assets/online-test-animate.svg' 

const HowItWorks = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-blue-500 via-red-500 to-sky-500">
      <h2 className="text-4xl text-white font-bold text-center mb-10">How PrepNGo Works</h2>
      
      <div className="relative overflow-hidden">
        {/* Step 1: See Available Exams */}
        <motion.div
          className="step flow-step p-6 text-center bg-white rounded-lg shadow-md"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{ duration: 1 }}
        >
          <img src={availExams} alt="Exams Available" className="w-24 mx-auto" />
          <h3 className="text-xl font-semibold text-center mt-4">Step 1: See Available Exams</h3>
          <p className="text-gray-600 mt-3">
            Browse a wide variety of exams available to match your learning goals.
          </p>
        </motion.div>

        {/* Arrow connecting Step 1 to Step 2 */}
        <motion.div
          className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] mt-8`}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C12.553 2 13 2.447 13 3V15.585L16.707 12.707C17.098 12.316 17.098 11.684 16.707 11.293C16.316 10.902 15.684 10.902 15.293 11.293L12 14.586L8.707 11.293C8.316 10.902 7.684 10.902 7.293 11.293C6.902 11.684 6.902 12.316 7.293 12.707L11 16.586V3C11 2.447 11.447 2 12 2Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>

        {/* Step 2: Sign Up as a Student */}
        <motion.div
          className="step flow-step p-6 text-center bg-white rounded-lg shadow-md mt-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{ duration: 1 }}
        >
          <img src={availExams} alt="Sign Up" className="w-24 mx-auto" />
          <h3 className="text-xl font-semibold text-center mt-4">Step 2: Sign Up as a Student</h3>
          <p className="text-gray-600 mt-3">
            Register as a student to get access to exams and start learning.
          </p>
        </motion.div>

        {/* Arrow connecting Step 2 to Step 3 */}
        <motion.div
          className={`absolute top-[50%] right-[10%] transform mt-8`}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C12.553 2 13 2.447 13 3V15.585L16.707 12.707C17.098 12.316 17.098 11.684 16.707 11.293C16.316 10.902 15.684 10.902 15.293 11.293L12 14.586L8.707 11.293C8.316 10.902 7.684 10.902 7.293 11.293C6.902 11.684 6.902 12.316 7.293 12.707L11 16.586V3C11 2.447 11.447 2 12 2Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>

        {/* Step 3: Log In and Choose an Exam */}
        <motion.div
          className="step flow-step p-6 text-center bg-white rounded-lg shadow-md mt-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{ duration: 1 }}
        >
          <img src={availExams} alt="Log In" className="w-24 mx-auto" />
          <h3 className="text-xl font-semibold text-center mt-4">Step 3: Log In and Choose Your Exam</h3>
          <p className="text-gray-600 mt-3">
            After signing up, log in and pick the exam you want to take.
          </p>
        </motion.div>

        {/* Arrow connecting Step 3 to Step 4 */}
        <motion.div
          className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] mt-8`}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C12.553 2 13 2.447 13 3V15.585L16.707 12.707C17.098 12.316 17.098 11.684 16.707 11.293C16.316 10.902 15.684 10.902 15.293 11.293L12 14.586L8.707 11.293C8.316 10.902 7.684 10.902 7.293 11.293C6.902 11.684 6.902 12.316 7.293 12.707L11 16.586V3C11 2.447 11.447 2 12 2Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>

        {/* Step 4: Participate in the Exam */}
        <motion.div
          className="step flow-step p-6 text-center bg-white rounded-lg shadow-md mt-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{ duration: 1 }}
        >
          <img src={availExams} alt="Take Exam" className="w-24 mx-auto" />
          <h3 className="text-xl font-semibold text-center mt-4">Step 4: Participate in the Exam</h3>
          <p className="text-gray-600 mt-3">
            Start the exam and track your progress in real-time.
          </p>
        </motion.div>

        {/* Arrow connecting Step 4 to Step 5 */}
        <motion.div
          className={`absolute top-[50%] left-[50%] transform -translate-x-[50%] mt-8`}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C12.553 2 13 2.447 13 3V15.585L16.707 12.707C17.098 12.316 17.098 11.684 16.707 11.293C16.316 10.902 15.684 10.902 15.293 11.293L12 14.586L8.707 11.293C8.316 10.902 7.684 10.902 7.293 11.293C6.902 11.684 6.902 12.316 7.293 12.707L11 16.586V3C11 2.447 11.447 2 12 2Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>

        {/* Step 5: Get Results and Feedback */}
        <motion.div
          className="step flow-step p-6 text-center bg-white rounded-lg shadow-md mt-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{ duration: 1 }}
        >
          <img src={availExams} alt="Results & Feedback" className="w-24 mx-auto" />
          <h3 className="text-xl font-semibold text-center mt-4">Step 5: Get Results & Feedback</h3>
          <p className="text-gray-600 mt-3">
            After completing the exam, you will get instant results and feedback.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
