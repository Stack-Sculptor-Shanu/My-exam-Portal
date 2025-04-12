
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, GraduationCap } from 'lucide-react';

const Profile = () => {
  const user = {
    name: 'Biswajit Sahu',
    email: 'biswajit@gmail.com',
    branch: 'Mechanical Engineering',
    phoneNo: '+91 9040006446',
    profileImg:
      'https://cdn.pixabay.com/photo/2022/05/22/16/49/outdoors-7213951_1280.jpg',
  };

  

  return (
    <div className=" bg-gray-50 flex items-center justify-center p-20">
      <div className='bg-green-200 shadow-xl rounded-2xl p-8 flex flex-col md:flex-row items-center w-full max-w-4xl gap-10 '>

      <motion.div
        className="bg-white shadow-xl rounded-2xl p-8 flex flex-col md:flex-row items-center w-full max-w-4xl gap-10"
        initial={{ opacity: 0, y: 230 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
        {/* Profile Image with hover animation */}
        <motion.div
          className="flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          >
          <img
            src={user.profileImg}
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-[#13442E] object-cover shadow-md"
            />
        </motion.div>

        {/* User Info */}
        <div className="text-center md:text-left space-y-4 flex-1">
          <h2 className="text-3xl font-bold text-[#13442E]">{user.name}</h2>
          <div className="text-gray-700 space-y-2">
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>{user.email}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-600" />
              <span>{user.phoneNo}</span>
            </p>
            <p className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-purple-600" />
              <span>{user.branch}</span>
            </p>
          </div>

        
        </div>
      </motion.div>
            </div>
    </div>
  );
};

export default Profile;
