import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setStudentData } from '../components/Redux/Slices/StudentSlice';
import axios from 'axios'; 
import studentSVG from '../Assets/StudentSignup.svg'; 

const StudentReg = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { name, email, phone, branch } = useSelector((state) => state.student);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = `${name.split(' ')[0]}@${phone.slice(-3)}`;
    setLoading(true);
    setError(null);
  
    try {
      const userData = {
        name,
        email,
        mobileNumber: phone, // ✅ Fix the casing
        course: branch,
        password,
        // 🔥 Don't include role — backend sets default
      };
  
      console.log("Sending data to backend:", userData); // Debugging (optional)
  
      const response = await axios.post('http://localhost:5050/api/register', userData);
      
      if (response.status === 200) {
        console.log('User created successfully:', response.data);
        navigate('/login'); 
      }
    } catch (err) {
      console.error('Error during registration:', err);
  
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message); // e.g. "User already register"
      } else {
        setError('Failed to register. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };
  
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setStudentData({ field: name, value }));
  };

  return (
    <div className="flex flex-col bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 md:flex-row h-screen bg-gray-100">
      {/* Left Side: SVG and Gradient Background */}
      <div className="flex-1 text-white flex flex-col items-center justify-center p-8 relative rounded-tl-[30px] rounded-br-[30px]">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <img
            src={studentSVG}
            alt="SVG Graphic"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Right Side: Registration Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">Create Student Account</h2>

          {/* Student Registration Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Phone Number</label>
              <input
                type="tel"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your phone number"
                name="phone"
                value={phone}
                onChange={handleInputChange}
              />
            </div>

            {/* Branch Dropdown */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Branch</label>
              <select
                name="branch"
                value={branch}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Branch</option>
                <option value="MERN">MERN</option>
                <option value="JAVA">JAVA</option>
                <option value="Testing">Testing</option>
                <option value="Python">Python</option>
              </select>
            </div>

            {/* Role is hardcoded for student */}
            {/* <input type="hidden" name="role" value="student" /> */}

            {error && <div className="text-red-500 mb-4">{error}</div>}  {/* Show error if any */}
            
            <div className="mt-6">
              <button
                type="submit"
                className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                disabled={loading}  
              >
                {loading ? 'Registering...' : 'Sign Up'}
              </button>
            </div>

            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Already have an account?
                <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                  {' '}Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentReg;
