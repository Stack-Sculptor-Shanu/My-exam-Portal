import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import GoTo from '../GoTo';
import { CheckCircleOutline, Laptop, School, Star } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Typed from 'typed.js';
import CountUp from 'react-countup';
import { ThemeContext } from '../../components/ThemeContext'; 
import bg from '../../Assets/bg.svg'


const Landingpage = () => {
  const { ref } = useInView({ triggerOnce: true, threshold: 0.5 });
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Live Exams', 'Mock Tests', 'Study Resources', 'Aptitude Prep'],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => typed.destroy();
  }, []);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    { label: 'Mock Tests Taken', value: 10000 },
    { label: 'Students Helped', value: 5000 },
    { label: 'Positive Feedback', value: 99 },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-500">
      {/* HERO SECTION */}
      <motion.section
        className="text-center py-20 px-5 md:px-20 bg-gradient-to-r from-blue-500 via-red-500 to-sky-500"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Boost Your Aptitude Skills
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white">Practice, Learn, and Improve</p>
        <p className="mt-4 text-white text-2xl font-semibold">
          <span ref={typedRef} />
        </p>
        <Link
          to="/examlists"
          className="inline-block mt-8 px-8 py-3 bg-white text-blue-600 font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Get Started
        </Link>
      </motion.section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-5 md:px-20 text-center" style={{
    background: `url(${bg}) no-repeat center center/cover`,
    backgroundSize: 'cover',
  }}>
        <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/30 dark:bg-white/10 backdrop-blur-md border dark:border-gray-700 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                <CountUp end={item.value} duration={2} />+
              </h3>
              <p className="mt-2 text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <motion.section
        className=" service py-20 w-full px-5 md:px-20"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
  {[
    {
      title: 'Live Exams',
      link: '/examlists',
      text: 'Join real-time exams and get instant feedback.',
    },
    {
      title: 'Study Resources',
      link: '/login',
      text: 'Access detailed notes, videos, and practice questions.',
    },
    {
      title: 'Mock Exams',
      link: '/',
      text: 'Simulate real exam conditions anytime.',
    },
  ].map((service, i) => (
    <Link
      key={i}
      to={service.link || '#'} // Use '#' as a fallback for items without a link
      className="block" // Ensures the Link takes up the full card space
    >
      <motion.div
        className="p-6 bg-white/30 dark:bg-white/10 backdrop-blur-lg shadow-lg rounded-lg border dark:border-gray-700 hover:-translate-y-2 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-white dark:hover:text-black transition-all duration-300"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {service.title}
        </h3>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{service.text}</p>
      </motion.div>
    </Link>
  ))}
</div>
      </motion.section>



      {/* TESTIMONIALS */}
      <motion.section
        className="py-20 px-5 md:px-20 bg-gray-100 dark:bg-gray-800"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Shanu', text: 'Improved my aptitude score quickly!', stars: 5 },
            { name: 'Biswajit', text: 'Mock exams were game-changers.', stars: 4 },
            { name: 'Jishu', text: 'Passed with flying colors!', stars: 5 },
          ].map((user, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white dark:bg-gray-700 rounded-xl text-center shadow-md"
              variants={fadeInVariant}
              transition={{ delay: i * 0.2 }}
            >
              <img
                src={`https://i.pravatar.cc/100?img=${i + 5}`}
                alt={user.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-700 dark:text-gray-200 italic">"{user.text}"</p>
              <div className="flex justify-center mt-3">
                {Array(user.stars)
                  .fill()
                  .map((_, idx) => (
                    <Star key={idx} className="text-yellow-500" />
                  ))}
              </div>
              <p className="font-bold mt-2">{user.name}</p>
              <p className="text-sm text-gray-500">Student</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* HOW IT WORKS */}
      <motion.section
        ref={ref}
        className="py-20 px-5 md:px-20"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Choose Your Exam',
              icon: <CheckCircleOutline fontSize="large" color="primary" />,
              desc: 'Pick an exam that matches your goals.',
            },
            {
              title: 'Take the Test',
              icon: <Laptop fontSize="large" color="primary" />,
              desc: 'Get real-time feedback as you test yourself.',
            },
            {
              title: 'Review Results',
              icon: <School fontSize="large" color="primary" />,
              desc: 'Analyze your performance and improve.',
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              {step.icon}
              <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <GoTo />
      <Footer />
    </div>
  );
};

export default Landingpage;
