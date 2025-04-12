import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import GoTo from '../GoTo';
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { CheckCircleOutline, Laptop, School } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Landingpage = () => {
    const { ref, inView } = useInView({
      triggerOnce: true, 
      threshold: 0.5, 
    });
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-5 bg-gradient-to-r from-blue-500 via-red-500 to-sky-500">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Boost Your Aptitude Skills</h1>
        <p className="mt-4 text-lg md:text-xl text-white">Practice, Learn, and Improve in any kind of aptitude Exams</p>
        {/* <button className="mt-3 px-3 py-3 bg-white bg-opacity-40 text-blue-600 font-semibold rounded-md shadow-md hover:bg-gray-200">
          <Link className="mt-3 px-7 py-3" to="/howitworks">Get started</Link>
        </button> */}
      </section>

      <section className="py-20 w-full service px-5 md:px-20">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className=" grid md:grid-cols-3 gap-8 mt-10 text-center">
          {/* Live Exams */}
          <div className="p-6 bg-white shadow-md rounded-md border border-gray-200 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-100 hover:text-blue-600 hover:border-blue-500 transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold">
              <Link to="/examlists">Live Exams</Link>
            </h3>
            <p className="mt-2 text-gray-600">Join the live exam to test your skills in real-time with instant results and feedback.</p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-md border border-gray-200 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-100 hover:text-blue-600 hover:border-blue-500 transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold">
              Study Resources
            </h3>
            <p className="mt-2 text-gray-600">Access a wide variety of study materials to help you prepare for your exams efficiently.</p>
          </div>

          {/* Mock Exams */}
          <div className="p-6 bg-white shadow-md rounded-md border border-gray-200 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-100 hover:text-blue-600 hover:border-blue-500 transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold">
              <Link to="/">Mock Exams</Link>
            </h3>
            <p className="mt-2 text-gray-600">Simulate real test conditions with mock exams to boost your preparation.</p>
          </div>
        </div>
      </section>
      <section className="py-20 service bg-gray-100">
  <h2 className="text-3xl font-bold text-center">What Our Users Say</h2>
  <div className="grid md:grid-cols-3 gap-8 mt-10">
    <div className="p-6 bg-white shadow-md rounded-md text-center">
      <p className="text-lg text-gray-600">"This platform helped me improve my aptitude score in just a few weeks! Highly recommended!"</p>
      <p className="font-semibold text-gray-800 mt-4">Shanu</p>
      <p className="text-sm text-gray-500">Student</p>
    </div>
    <div className="p-6 bg-white shadow-md rounded-md text-center">
      <p className="text-lg text-gray-600">"The mock exams were incredibly helpful in preparing for the real test. The results helped me focus on areas that needed improvement."</p>
      <p className="font-semibold text-gray-800 mt-4">Biswajit</p>
      <p className="text-sm text-gray-500">Student</p>
    </div>
    <div className="p-6 bg-white shadow-md rounded-md text-center">
      <p className="text-lg text-gray-600">"Great resources and a user-friendly interface. I passed my exam with flying colors!"</p>
      <p className="font-semibold text-gray-800 mt-4">Jishu</p>
      <p className="text-sm text-gray-500">Student</p>
    </div>
  </div>
</section>
<section ref={ref} className="service py-20">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {/* Card 1 */}
        <motion.div 
          className="p-6 bg-white shadow-md rounded-md text-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <CheckCircleOutline fontSize="large" color="primary" />
          <h3 className="text-xl font-semibold mt-4">Step 1: Choose Your Exam</h3>
          <p className="mt-2 text-gray-600">
            Browse through a variety of aptitude exams that match your learning goals.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          className="p-6 bg-white shadow-md rounded-md text-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: inView ? 0 : 100, opacity: inView ? 1 : 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Laptop fontSize="large" color="primary" />
          <h3 className="text-xl font-semibold mt-4">Step 2: Take the Test</h3>
          <p className="mt-2 text-gray-600">
            Start the live or mock test and get real-time feedback to track your progress.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          className="p-6 bg-white shadow-md rounded-md text-center"
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <School fontSize="large" color="primary" />
          <h3 className="text-xl font-semibold mt-4">Step 3: Review Results</h3>
          <p className="mt-2 text-gray-600">
            Once done, review your results and find the areas for improvement to keep getting better.
          </p>
        </motion.div>
      </div>
    </section>
<GoTo/>

      <Footer/>
    </div>
  );
};

export default Landingpage;
