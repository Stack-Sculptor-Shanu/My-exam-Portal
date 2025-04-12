import React from 'react'; 
import { motion } from 'framer-motion'; 
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaTerminal } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ExamLists = () => {
    const navigate = useNavigate()
    const handleCardClick = ()=>{
        navigate('/instructions')
    }
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      
      {/* MERN Stack Section */}
      <section className="mb-16 px-5 md:px-20">
        <div className="flex items-center mb-8">
          <FaTerminal className="text-4xl text-green-600 mr-4" />
          <h2 className="text-4xl font-bold text-gray-800">MERN Stack</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8" onClick={handleCardClick}>
          {/* ReactJS */}
          <motion.div className="bg-white shadow-lg rounded-lg overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="https://imgs.search.brave.com/LQYRSpyhWRf-oNf02tXzhDCNUWgwxtGLS630Vuw_atA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS82NjQt/NjY0NDUwOV9pY29u/LXJlYWN0LWpzLWxv/Z28taGQtcG5nLWRv/d25sb2FkLnBuZw" alt="ReactJS" className="w-full h-40 object-cover" />
            <div className="p-5">
                <h3 className="text-xl font-semibold text-sky-500 flex items-center gap-2"><FaReact /> ReactJS</h3>
                <p className="text-gray-600 mt-2">Learn to build dynamic, interactive UIs with React. Develop scalable web applications with component-based architecture.</p>
            </div>
          </motion.div>

          {/* NodeJS */}
          <motion.div className="bg-white shadow-lg rounded-lg overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="https://media.giphy.com/media/1zNpJJyRS77Pa7Ez1r/giphy.gif" alt="NodeJS" className="w-full h-40 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-lime-950 flex items-center gap-2"> <FaNodeJs/>NodeJS</h3>
              <p className="text-gray-600 mt-2">Build fast, scalable server-side applications using NodeJS. Learn about event-driven architecture and non-blocking I/O operations.</p>
            </div>
          </motion.div>

          {/* ExpressJS */}
          <motion.div className="bg-white shadow-lg rounded-lg overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="https://media.giphy.com/media/dnpOVk4ZXjpLWuUlbf/giphy.gif" alt="ExpressJS" className="w-full h-40 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-sky-500 flex items-center gap-2"><FaJsSquare/>ExpressJS</h3>
              <p className="text-gray-600 mt-2">Simplify backend development with ExpressJS. Learn to build RESTful APIs and handle routing, middleware, and more.</p>
            </div>
          </motion.div>

          {/* MongoDB */}
          <motion.div className="bg-white shadow-lg rounded-lg overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="https://media.giphy.com/media/hu4BdvvXlbf9WflxdZ/giphy.gif" alt="MongoDB" className="w-full h-40 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-lime-700 flex items-center gap-2"><FaDatabase/>MongoDB</h3>
              <p className="text-gray-600 mt-2">Learn to store, retrieve, and manage data in a NoSQL database. MongoDB is perfect for handling flexible and scalable datasets.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Web Technologies Section */}
      <section className="mb-16 px-5 md:px-20">
        <div className="flex items-center mb-8">
          <FaHtml5 className="text-4xl text-orange-600 mr-4" />
          <h2 className="text-4xl font-bold text-gray-800">Web Technologies</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8" onClick={handleCardClick}>
          {/* HTML5 */}
          <motion.div className="bg-white shadow-lg rounded-lg overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="https://media.giphy.com/media/Jq0GVxoPkwBDG9h0YX/giphy.gif" alt="HTML5" className="w-full h-40 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-red-400 flex items-center gap-2"><FaHtml5/>HTML5</h3>
              <p className="text-gray-600 mt-2">Learn the structure of web pages with HTML5, the foundation for building web applications and websites.</p>
            </div>
          </motion.div>

          {/* CSS3 */}
          <motion.div className="bg-white shadow-lg rounded-lg overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="https://media.giphy.com/media/Jq0GVxoPkwBDG9h0YX/giphy.gif" alt="CSS3" className="w-full h-40 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-sky-800 flex items-center gap-2"><FaCss3Alt/>CSS3</h3>
              <p className="text-gray-600 mt-2">Master styling web pages with CSS3, creating visually stunning layouts, animations, and responsive designs.</p>
            </div>
          </motion.div>

          {/* JavaScript */}
          <motion.div className="bg-white shadow-lg rounded-lg overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="https://media.giphy.com/media/Jq0GVxoPkwBDG9h0YX/giphy.gif" alt="JavaScript" className="w-full h-40 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-amber-400 flex items-center gap-2"><FaJsSquare/>JavaScript</h3>
              <p className="text-gray-600 mt-2">JavaScript is a core web technology that enables dynamic content. Learn how to create interactive elements on web pages.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aptitude and Reasoning Section */}
      <section className="mb-16 px-5 md:px-20">
        <div className="flex items-center mb-8">
          <FaJsSquare className="text-4xl text-yellow-600 mr-4" />
          <h2 className="text-4xl font-bold text-gray-800">Aptitude and Reasoning</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8" onClick={handleCardClick}>
          {/* Logical Reasoning */}
          <motion.div className="bg-white shadow-lg rounded-lg overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="https://media.giphy.com/media/Jq0GVxoPkwBDG9h0YX/giphy.gif" alt="Logical Reasoning" className="w-full h-40 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">Logical Reasoning</h3>
              <p className="text-gray-600 mt-2">Improve your problem-solving skills with logical reasoning, a key component of many competitive exams.</p>
            </div>
          </motion.div>

          {/* Quantitative Aptitude */}
          <motion.div className="bg-white shadow-lg rounded-lg overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="https://media.giphy.com/media/Jq0GVxoPkwBDG9h0YX/giphy.gif" alt="Quantitative Aptitude" className="w-full h-40 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">Quantitative Aptitude</h3>
              <p className="text-gray-600 mt-2">Enhance your numerical ability with quantitative aptitude. Solve problems related to numbers, time, speed, etc.</p>
            </div>
          </motion.div>

          {/* Verbal Aptitude */}
          <motion.div className="bg-white shadow-lg rounded-lg overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="https://media.giphy.com/media/Jq0GVxoPkwBDG9h0YX/giphy.gif" alt="Verbal Aptitude" className="w-full h-40 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">Verbal Aptitude</h3>
              <p className="text-gray-600 mt-2">Improve your verbal reasoning skills with exercises related to grammar, sentence construction, and comprehension.</p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ExamLists;
